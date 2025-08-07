
'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ShopSidebar from '@/components/ShopSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { allProducts } from '@/lib/data';


export default function ShopPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 250000] as [number, number],
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredProducts = allProducts.filter(product => {
    const inCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-foreground">Our Products</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our wide range of agricultural and industrial tools.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Mobile Filter */}
        <div className="lg:hidden mb-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-3/4">
                    <ShopSidebar filters={filters} onFilterChange={handleFilterChange} />
                </SheetContent>
            </Sheet>
        </div>
      
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <ShopSidebar filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
