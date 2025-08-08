
'use client';

import ProductForm from '@/components/admin/ProductForm';
import { allProducts } from '@/lib/data';
import { notFound } from 'next/navigation';


export default function AdminEditProductPage({ params }: { params: { id: string } }) {
  const product = allProducts.find(p => p.id === params.id);
  
  if (!product) {
      notFound();
  }

  return <ProductForm product={product} />;
}
