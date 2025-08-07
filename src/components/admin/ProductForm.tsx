
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { categories, allProducts } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface ProductFormProps {
    product?: (typeof allProducts)[0];
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const isEditing = !!product;

  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price.toString() || '');
  const [category, setCategory] = useState(product?.category || '');
  const [status, setStatus] = useState('published');
  const [images, setImages] = useState(product?.images || ['https://placehold.co/600x600.png']);
  const [activeImage, setActiveImage] = useState(images[0]);


  const handleSaveProduct = () => {
    if (!name || !price || !category) {
        toast({
            variant: 'destructive',
            title: 'Validation Error',
            description: 'Please fill in the Name, Price, and Category fields.',
        });
        return;
    }

    if (isEditing) {
        const productIndex = allProducts.findIndex(p => p.id === product.id);
        if (productIndex > -1) {
            allProducts[productIndex] = {
                ...allProducts[productIndex],
                name,
                description,
                price: parseFloat(price),
                category,
                images,
                image: images[0],
            };
        }
         toast({
            title: 'Product Updated',
            description: `"${name}" has been successfully updated.`,
        });
    } else {
        const newProduct = {
            id: `PROD${(allProducts.length + 1).toString().padStart(3, '0')}`,
            name,
            price: parseFloat(price),
            image: images[0],
            images,
            slug: name.toLowerCase().replace(/\s+/g, '-'),
            category,
            rating: 0,
            description,
            specifications: {},
            reviews: [],
        };
        allProducts.unshift(newProduct); 
        toast({
            title: 'Product Saved',
            description: `"${name}" has been successfully added.`,
        });
    }

    router.push('/admin/products');
  };


  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                    <Link href="/admin/products"><ArrowLeft className="h-4 w-4" /><span className="sr-only">Back</span></Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {isEditing ? `Edit: ${product.name}` : 'Add New Product'}
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                    In stock
                </Badge>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm" onClick={() => router.push('/admin/products')}>
                        Discard
                    </Button>
                    <Button size="sm" onClick={handleSaveProduct}>{isEditing ? 'Save Changes' : 'Save Product'}</Button>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                                 <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="300"
                                    src={activeImage}
                                    width="300"
                                    data-ai-hint="tool"
                                />
                                <div className="grid grid-cols-3 gap-2">
                                    {images.map((img, idx) => (
                                         <button key={idx} onClick={() => setActiveImage(img)} className="relative">
                                            <Image
                                                alt="Product image"
                                                className={`aspect-square w-full rounded-md object-cover ${activeImage === img ? 'ring-2 ring-primary' : ''}`}
                                                height="84"
                                                src={img}
                                                width="84"
                                                data-ai-hint="tool"
                                            />
                                         </button>
                                    ))}
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
                                <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                             <div className="grid gap-3">
                                <Label htmlFor="originalPrice">Original Price (Optional)</Label>
                                <Input id="originalPrice" type="number" placeholder="159.99" />
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
                            <Select value={category} onValueChange={setCategory}>
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
                        </Header>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="status">Status</Label>
                                    <Select value={status} onValueChange={setStatus}>
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
                        </Header>
                        <CardContent>
                             <Input placeholder="e.g. Sale, New, Featured" />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm" onClick={() => router.push('/admin/products')}>
                    Discard
                </Button>
                <Button size="sm" onClick={handleSaveProduct}>{isEditing ? 'Save Changes' : 'Save Product'}</Button>
            </div>
        </div>
    </div>
  )
}
