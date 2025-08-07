
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";


// Dummy data for cart items
const initialCartItems = [
  {
    id: '1',
    name: 'Heavy Duty Power Drill',
    price: 129.99,
    image: 'https://placehold.co/400x400.png',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Professional Garden Shovel',
    price: 49.99,
    image: 'https://placehold.co/400x400.png',
    quantity: 2,
  },
];


const OrderSummary = () => {
    const subtotal = initialCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10;
    const taxes = subtotal * 0.13;
    const total = subtotal + shipping + taxes;
    
    return (
        <div className="bg-muted/50 p-8 rounded-lg sticky top-24">
            <h2 className="text-2xl font-headline font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
                {initialCartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <Separator className="my-6" />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-semibold">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p className="font-semibold">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-muted-foreground">Taxes</p>
                    <p className="font-semibold">${taxes.toFixed(2)}</p>
                </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default function CheckoutPage() {
    
    const PaymentMethodIcon = ({ name, src, hint }) => (
        <div className="flex items-center justify-center p-3 border rounded-md bg-background h-16 w-full has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary">
            <Image src={src} alt={name} width={80} height={30} className="object-contain" data-ai-hint={hint} />
        </div>
    );
    
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold">Checkout</h1>
        <p className="text-lg text-muted-foreground mt-2">
            Have an account? <Link href="/account" className="text-primary hover:underline">Log in</Link> for a faster experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Shipping & Payment Form */}
        <div className="space-y-8">
            {/* Shipping Information */}
            <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label htmlFor="first-name">First Name</Label><Input id="first-name" placeholder="John" /></div>
                    <div className="space-y-2"><Label htmlFor="last-name">Last Name</Label><Input id="last-name" placeholder="Doe" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="address">Address</Label><Input id="address" placeholder="123 Main St" /></div>
                <div className="space-y-2"><Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label><Input id="apartment" /></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 md:col-span-1"><Label htmlFor="city">City</Label><Input id="city" placeholder="Dhangadhi" /></div>
                    <div className="space-y-2"><Label htmlFor="country">Country</Label>
                        <Select defaultValue="nepal">
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nepal">Nepal</SelectItem>
                                <SelectItem value="india">India</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2"><Label htmlFor="postal-code">Postal Code</Label><Input id="postal-code" placeholder="10001" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input type="tel" id="phone" placeholder="+977..." /></div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
                 <h2 className="text-2xl font-headline font-bold">Payment Method</h2>
                 <p className="text-muted-foreground">Select your preferred payment method.</p>
                 <RadioGroup defaultValue="esewa" className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <Label htmlFor="esewa" className="cursor-pointer">
                            <RadioGroupItem value="esewa" id="esewa" className="sr-only" />
                            <PaymentMethodIcon name="eSewa" src="https://placehold.co/150x50.png" hint="esewa logo" />
                        </Label>
                         <Label htmlFor="khalti" className="cursor-pointer">
                            <RadioGroupItem value="khalti" id="khalti" className="sr-only" />
                            <PaymentMethodIcon name="Khalti" src="https://placehold.co/150x50.png" hint="khalti logo" />
                        </Label>
                         <Label htmlFor="fonepay" className="cursor-pointer">
                            <RadioGroupItem value="fonepay" id="fonepay" className="sr-only" />
                            <PaymentMethodIcon name="Fonepay" src="https://placehold.co/150x50.png" hint="fonepay logo" />
                        </Label>
                        <Label htmlFor="upi" className="cursor-pointer">
                            <RadioGroupItem value="upi" id="upi" className="sr-only" />
                            <PaymentMethodIcon name="UPI" src="https://placehold.co/150x50.png" hint="upi logo" />
                        </Label>
                        <Label htmlFor="paypal" className="cursor-pointer">
                            <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
                            <PaymentMethodIcon name="PayPal" src="https://placehold.co/150x50.png" hint="paypal logo" />
                        </Label>
                    </div>
                 </RadioGroup>
            </div>
            
            <Button size="lg" className="w-full">Place Order</Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
            <OrderSummary />
        </div>
      </div>
    </div>
  );
}
