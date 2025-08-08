
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { customers } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export default function AdminAddCustomerPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveCustomer = () => {
    if (!name || !email) {
        toast({
            variant: 'destructive',
            title: 'Validation Error',
            description: 'Please fill in at least the name and email fields.',
        });
        return;
    }
    
    const newCustomer = {
      id: `CUST${(customers.length + 1).toString().padStart(3, '0')}`,
      name,
      email,
      phone,
      avatar: 'https://placehold.co/40x40.png',
      registered: new Date().toISOString().split('T')[0],
      totalOrders: 0,
      totalSpent: 0,
    };

    // Note: This only adds to the in-memory array for the current session.
    customers.unshift(newCustomer); 
    
    toast({
      title: 'Customer Added',
      description: `"${name}" has been successfully added.`,
    });

    router.push('/admin/customers');
  };


  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                    <Link href="/admin/customers"><ArrowLeft className="h-4 w-4" /><span className="sr-only">Back</span></Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Add New Customer
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm" onClick={() => router.push('/admin/customers')}>
                        Discard
                    </Button>
                    <Button size="sm" onClick={handleSaveCustomer}>Save Customer</Button>
                </div>
            </div>
            <div className="grid gap-4">
                <Card>
                <CardHeader>
                    <CardTitle>Customer Details</CardTitle>
                    <CardDescription>
                    Fill in the information for the new customer.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                id="name"
                                type="text"
                                className="w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. John Doe"
                                />
                            </div>
                             <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                id="email"
                                type="email"
                                className="w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. john@example.com"
                                />
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input
                            id="phone"
                            type="tel"
                            className="w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
                </Card>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm" onClick={() => router.push('/admin/customers')}>
                    Discard
                </Button>
                <Button size="sm" onClick={handleSaveCustomer}>Save Customer</Button>
            </div>
        </div>
    </div>
  )
}
