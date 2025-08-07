
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ShoppingCart, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    slug: string;
    tag?: string;
    rating?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation
    toast({
      title: "Added to cart!",
      description: `"${product.name}" has been added to your cart.`,
    });
  }
  
  return (
    <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <CardHeader className="p-0 relative">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="agricultural tool"
          />
        </Link>
        {product.tag && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{product.tag}</Badge>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`/product/${product.slug}`} tabIndex={-1}>
              <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                  <Eye className="w-5 h-5" />
                  <span className="sr-only">Quick View</span>
              </Button>
            </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-headline leading-tight h-12">
            <Link href={`/product/${product.slug}`} className="hover:text-primary transition-colors">
                {product.name}
            </Link>
        </CardTitle>
        <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline space-x-2">
            <p className="text-xl font-bold text-foreground">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            </div>
            {product.rating && (
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)}</span>
                </div>
            )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
