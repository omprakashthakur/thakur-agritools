
'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MoreVertical, ChevronLeft, ChevronRight, File, ListFilter, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';
import { allProducts, orders } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';


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


export default function AdminOrderDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const orderId = params.id as string;
    
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        notFound();
    }

    const getProductDetails = (productId: string) => {
        return allProducts.find(p => p.id === productId);
    }

    const handleExport = () => {
        toast({
            title: "Exporting Order...",
            description: `Order ${orderId} is being exported. (This is a placeholder)`,
        });
    }

    const handleEdit = () => {
         toast({
            title: "Editing Order...",
            description: `Opening editor for order ${orderId}. (This is a placeholder)`,
        });
    }

    const handleDelete = () => {
        const orderIndex = orders.findIndex(o => o.id === orderId);
        if (orderIndex > -1) {
            orders.splice(orderIndex, 1);
        }
        toast({
            title: "Order Deleted",
            description: `Order ${orderId} has been successfully deleted.`,
        });
        router.push('/admin/orders');
    }

  return (
    <div className="mx-auto grid max-w-6xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router.back()}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Order {order.id}
            </h1>
             <Badge variant={getStatusVariant(order.status) as any} className="ml-auto sm:ml-0">
                {order.status}
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                Discard
                </Button>
                <Button size="sm">Save Changes</Button>
            </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                            <CardTitle className="group flex items-center gap-2 text-lg">
                                Order Details
                            </CardTitle>
                            <CardDescription>Date: {order.date}</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                             <AlertDialog>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button size="icon" variant="outline" className="h-8 w-8">
                                        <MoreVertical className="h-3.5 w-3.5" />
                                        <span className="sr-only">More</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleExport}>Export</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                     <AlertDialogTrigger asChild>
                                        <DropdownMenuItem className="text-destructive focus:text-destructive">Trash</DropdownMenuItem>
                                    </AlertDialogTrigger>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete the
                                        order and remove its data from our servers.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-sm">
                        <div className="grid gap-3">
                            <div className="font-semibold">Items</div>
                            <ul className="grid gap-3">
                                {order.items.map(item => {
                                    const product = getProductDetails(item.productId);
                                    if (!product) return null;
                                    return (
                                        <li key={item.productId} className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                {product.name} <span>× {item.quantity}</span>
                                            </span>
                                            <span>${(product.price * item.quantity).toFixed(2)}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Separator className="my-2" />
                            <ul className="grid gap-3">
                                <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${order.subtotal.toFixed(2)}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>${order.shipping.toFixed(2)}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Tax</span>
                                <span>${order.taxes.toFixed(2)}</span>
                                </li>
                                <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">Total</span>
                                <span>${order.total.toFixed(2)}</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card>
                    <CardHeader>
                    <CardTitle>Customer</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between">
                             <div className="font-medium">Liam Johnson</div>
                        </div>
                        <div className="flex items-center justify-between text-muted-foreground">
                             <span>liam@example.com</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       {order.shippingAddress}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                       {order.billingAddress}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
