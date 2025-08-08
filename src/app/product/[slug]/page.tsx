
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Minus, Plus, ShoppingCart, Bot, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { useToast } from "@/hooks/use-toast";
import { summarizeProductReviews, type SummarizeProductReviewsOutput } from '@/ai/flows/product-review-summarizer';
import { Skeleton } from '@/components/ui/skeleton';
import { getProductBySlug, getProducts, type Product } from '@/services/product.service';

const AIReviewSummary = ({ product }) => {
    const [summary, setSummary] = useState<SummarizeProductReviewsOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (product.reviews && product.reviews.length > 0) {
            const fetchSummary = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const result = await summarizeProductReviews({ reviews: product.reviews });
                    setSummary(result);
                } catch (e) {
                    setError("Sorry, I couldn't generate a summary at this time.");
                    console.error(e);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchSummary();
        }
    }, [product.reviews]);

    if (!product.reviews || product.reviews.length === 0) {
        return null; // Don't show the section if there are no reviews
    }
    
    return (
        <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-headline">
                <div className="flex items-center gap-2">
                    <Bot /> AI Review Summary
                </div>
            </AccordionTrigger>
            <AccordionContent>
                {isLoading && (
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                )}
                {error && <p className="text-destructive">{error}</p>}
                {summary && !isLoading && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-accent fill-accent" />
                            <span className="font-bold">Average Rating:</span>
                            <span>{summary.averageRating.toFixed(1)} / 5</span>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><ThumbsUp className="w-5 h-5 text-green-500" /> Common Positive Feedback</h4>
                            <p className="text-muted-foreground">{summary.positiveFeedback}</p>
                        </div>
                         <div className="space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><ThumbsDown className="w-5 h-5 text-red-500" /> Common Negative Feedback</h4>
                            <p className="text-muted-foreground">{summary.negativeFeedback}</p>
                        </div>
                    </div>
                )}
            </AccordionContent>
        </AccordionItem>
    );
};


export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProductData = async () => {
      if (params.slug) {
        setIsLoading(true);
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const p = await getProductBySlug(slug);
        
        if (p) {
          setProduct(p);
          setActiveImage(p.image);
          
          // Fetch related products
          const allProducts = await getProducts();
          const related = allProducts.filter(rp => rp.category === p.category && rp.id !== p.id).slice(0, 4);
          setRelatedProducts(related);

        } else {
            notFound();
        }
        setIsLoading(false);
      }
    };
    fetchProductData();
  }, [params.slug]);


  if (isLoading || !product) {
     return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-4">
                    <Skeleton className="aspect-square w-full rounded-lg" />
                    <div className="grid grid-cols-5 gap-2">
                        <Skeleton className="aspect-square w-full rounded-md" />
                        <Skeleton className="aspect-square w-full rounded-md" />
                        <Skeleton className="aspect-square w-full rounded-md" />
                    </div>
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-20 w-full" />
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-32" />
                        <Skeleton className="h-12 flex-1" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    toast({
        title: "Added to cart!",
        description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image Gallery */}
        <div className="flex flex-col gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border">
                {activeImage && <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                />}
            </div>
            <div className="grid grid-cols-5 gap-2">
                {(product.images || [product.image]).map((img, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`aspect-square relative rounded-md overflow-hidden border-2 ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                    >
                         <Image
                            src={img}
                            alt={`${product.name} thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                         />
                    </button>
                ))}
            </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{product.name}</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`} />
                    ))}
                    <span className="text-muted-foreground text-sm ml-1">({product.rating.toFixed(1)})</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-sm font-medium text-primary">In Stock</span>
            </div>
          </div>

          <p className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={decrementQuantity}>
                    <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>

          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-headline">Specifications</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key} className="flex justify-between">
                            <span className="font-medium text-foreground">{key}:</span>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-headline">Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <p>Free standard shipping on orders over $50. Express shipping available. We accept returns within 30 days of purchase. Please see our full policy for details.</p>
              </AccordionContent>
            </AccordionItem>
            <AIReviewSummary product={product} />
          </Accordion>
        </div>
      </div>
        
      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>

    </div>
  );
}
