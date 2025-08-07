
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { getProductRecommendations, type ProductRecommendationOutput } from '@/ai/flows/product-recommendation';
import { allProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

// Dummy data for cart items
const initialCartItems = [
  {
    id: '1',
    name: 'Heavy Duty Power Drill',
    price: 129.99,
    image: 'https://placehold.co/400x400.png',
    slug: 'power-drill',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Professional Garden Shovel',
    price: 49.99,
    image: 'https://placehold.co/400x400.png',
    slug: 'shovel',
    quantity: 2,
  },
];


const CartItem = ({ item, onQuantityChange, onRemove }) => (
    <div className="flex items-start gap-4 py-6">
        <div className="relative h-24 w-24 rounded-lg overflow-hidden border">
            <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            />
        </div>
        <div className="flex-1">
            <Link href={`/product/${item.slug}`} className="font-headline text-lg hover:text-primary transition-colors">{item.name}</Link>
            <p className="text-muted-foreground">Price: ${item.price.toFixed(2)}</p>
            <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => onQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-bold">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <Button variant="outline" size="icon" onClick={() => onRemove(item.id)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
        <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
);

const CartSummary = ({ subtotal }) => {
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    return (
        <div className="sticky top-24 rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-headline font-bold">Order Summary</h2>
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <Button size="lg" className="w-full mt-4">Proceed to Checkout</Button>
        </div>
    );
};

const RecommendedProducts = ({ cartItems }) => {
    const [recommendations, setRecommendations] = useState<ProductRecommendationOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (cartItems.length > 0) {
            const fetchRecommendations = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const cartItemIds = cartItems.map(item => item.id);
                    const result = await getProductRecommendations({ cartItems: cartItemIds, viewingHistory: [] });
                    setRecommendations(result);
                } catch (e) {
                    setError("Sorry, we couldn't fetch recommendations at this time.");
                    console.error(e);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchRecommendations();
        }
    }, [cartItems]);

    const recommendedProducts = recommendations ? allProducts.filter(p => recommendations.recommendations.includes(p.id)) : [];

    if (cartItems.length === 0) return null;

    return (
      <div className="mt-24">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">You Might Also Like</h2>
        {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-96 w-full" />)}
            </div>
        )}
        {error && <p className="text-destructive text-center">{error}</p>}
        {!isLoading && recommendedProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
};


export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  if (cartItems.length === 0) {
    return (
        <div className="container mx-auto px-4 py-24 text-center">
            <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
            <h1 className="mt-8 text-3xl font-headline font-bold">Your cart is empty</h1>
            <p className="mt-4 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="mt-8">
                <Link href="/shop">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                </Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-foreground">Your Shopping Cart</h1>
        <p className="text-lg text-muted-foreground mt-2">You have {cartItems.length} items in your cart.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 bg-card rounded-lg p-6 divide-y">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
            ))}
        </div>
        <div className="lg:col-span-1">
            <CartSummary subtotal={subtotal} />
        </div>
      </div>
      
      <RecommendedProducts cartItems={cartItems} />

      <div className="mt-12">
        <Button variant="link" asChild>
            <Link href="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}

