
'use client';

import { useEffect, useState } from 'react';
import ProductForm from '@/components/admin/ProductForm';
import { useParams, notFound } from 'next/navigation';
import { getProduct, type Product } from '@/services/product.service';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminEditProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        setIsLoading(true);
        try {
          const productData = await getProduct(productId);
          if (productData) {
            setProduct(productData);
          } else {
            setError('Product not found.');
          }
        } catch (e) {
          setError('Failed to fetch product data.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  if (isLoading) {
    return (
        <div className="space-y-4 p-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
    );
  }

  if (error) {
    notFound();
  }

  return product ? <ProductForm product={product} /> : null;
}
