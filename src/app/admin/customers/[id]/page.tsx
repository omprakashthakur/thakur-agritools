
'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { customers, orders } from '@/lib/data';


export default function AdminCustomerDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const customerId = params.id as string;
    
    const customer = customers.find(c => c.id === customerId);

    if (!customer) {
        notFound();
    }
  
  return (
    <div className="mx-auto grid max-w-6xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router.back()}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
             <Image
                className="aspect-square rounded-full object-cover"
                height="40"
                src={customer.avatar}
                width="40"
                alt="Customer Avatar"
              />
            <div className='flex-1'>
                <h1 className="shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {customer.name}
                </h1>
                <p className="text-sm text-muted-foreground">{customer.email}</p>
            </div>
            
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                    Edit Customer
                </Button>
                <Button size="sm">Send Message</Button>
            </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Total Orders</CardDescription>
                    <CardTitle className="text-4xl">{customer.totalOrders}</CardTitle>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Total Spent</CardDescription>
                    <CardTitle className="text-4xl">${customer.totalSpent.toFixed(2)}</CardTitle>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Registered On</CardDescription>
                    <CardTitle className="text-4xl">{customer.registered}</CardTitle>
                </CardHeader>
            </Card>
        </div>
        <div className="grid gap-4">
             <Card>
                <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="font-semibold">Email</div>
                        <div>{customer.email}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="font-semibold">Phone</div>
                        <div>{customer.phone}</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

