
'use client';

import ProductForm from '@/components/admin/ProductForm';
import { allProducts } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';


export default function AdminEditProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
      notFound();
  }

  return <ProductForm product={product} />;
}
