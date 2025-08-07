
'use client';

import Link from 'next/link';
import { ArrowLeft, PlusCircle, Upload } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { categories } from '@/lib/data';

export default function AdminAddProductPage() {
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                    <Link href="/admin/products"><ArrowLeft className="h-4 w-4" /><span className="sr-only">Back</span></Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Pro Power Drill
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                    In stock
                </Badge>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                        <CardDescription>
                        Basic information about the product.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue="Pro Power Drill"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                            id="description"
                            defaultValue="A powerful and durable drill for heavy-duty tasks. Comes with a brushless motor for longer life and better performance."
                            className="min-h-32"
                            />
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Product Images</CardTitle>
                             <CardDescription>Upload images for your product.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 gap-2">
                                     <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover"
                                        height="84"
                                        src="https://placehold.co/300x300.png"
                                        width="84"
                                    />
                                    <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover"
                                        height="84"
                                        src="https://placehold.co/300x300.png"
                                        width="84"
                                    />
                                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                        <Upload className="h-4 w-4 text-muted-foreground" />
                                        <span className="sr-only">Upload</span>
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                    <CardHeader>
                        <CardTitle>Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="price">Price</Label>
                                <Input id="price" type="number" defaultValue="129.99" />
                            </div>
                             <div className="grid gap-3">
                                <Label htmlFor="originalPrice">Original Price (Optional)</Label>
                                <Input id="originalPrice" type="number" defaultValue="159.99" />
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card>
                    <CardHeader>
                        <CardTitle>Product Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                            <SelectTrigger id="category" aria-label="Select category">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(cat => (
                                    <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Status</CardTitle>
                            <CardDescription>Set the current status of the product.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="status">Status</Label>
                                    <Select>
                                        <SelectTrigger id="status" aria-label="Select status">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="draft">Draft</SelectItem>
                                            <SelectItem value="published">Active</SelectItem>
                                            <SelectItem value="archived">Archived</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Tags</CardTitle>
                            <CardDescription>Add tags to your product.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Input placeholder="e.g. Sale, New, Featured" />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                    Discard
                </Button>
                <Button size="sm">Save Product</Button>
            </div>
        </div>
    </div>
  )
}
