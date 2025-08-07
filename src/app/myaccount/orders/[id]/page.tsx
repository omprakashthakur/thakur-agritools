

'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { orders, allProducts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';


const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
        case 'delivered':
            return 'default';
        case 'shipped':
            return 'secondary';
        case 'processing':
            return 'outline';
        case 'cancelled':
            return 'destructive';
        default:
            return 'default';
    }
}


export default function OrderDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.id as string;
    
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        notFound();
    }

    // A helper to get product details from allProducts based on ID
    const getProductDetails = (productId: string) => {
        return allProducts.find(p => p.id === productId);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                 <Button variant="outline" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold">Order Details</h1>
                    <p className="text-muted-foreground">Order ID: {order.id}</p>
                </div>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>
                        Date: {order.date} | Status: <Badge variant={getStatusVariant(order.status) as any}>{order.status}</Badge>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="space-y-4">
                        {order.items.map(item => {
                            const product = getProductDetails(item.productId);
                            if (!product) return null;
                            
                            return (
                                <div key={item.productId} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{product.name}</p>
                                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold">${(product.price * item.quantity).toFixed(2)}</p>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{order.shippingAddress}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{order.billingAddress}</p>
                    </CardContent>
                </Card>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Total Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                     <div className="flex justify-between">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p className="font-semibold">${order.subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Shipping</p>
                        <p className="font-semibold">${order.shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Taxes</p>
                        <p className="font-semibold">${order.taxes.toFixed(2)}</p>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>${order.total.toFixed(2)}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

