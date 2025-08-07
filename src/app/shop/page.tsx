
'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ShopSidebar from '@/components/ShopSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const allProducts = [
    { id: '1', name: 'Heavy Duty Power Drill', price: 129.99, originalPrice: 159.99, image: 'https://placehold.co/400x400.png', slug: 'power-drill', category: 'power-tools', rating: 4.5 },
    { id: '2', name: 'Professional Garden Shovel', price: 49.99, image: 'https://placehold.co/400x400.png', slug: 'shovel', category: 'hand-tools', rating: 5 },
    { id: '3', name: 'Electric Tiller and Cultivator', price: 249.99, image: 'https://placehold.co/400x400.png', slug: 'gardening', category: 'gardening', rating: 4 },
    { id: '4', name: 'Advanced Protective Goggles', price: 24.99, image: 'https://placehold.co/400x400.png', slug: 'safety-goggles', category: 'safety-gear', rating: 4.8 },
    { id: '5', name: 'Industrial Grade Welder', price: 499.99, image: 'https://placehold.co/400x400.png', slug: 'welder', category: 'power-tools', rating: 4.7 },
    { id: '6', name: 'Combine Harvester', price: 150000, image: 'https://placehold.co/400x400.png', slug: 'harvester', category: 'farming-equipment', rating: 5 },
    { id: '7', name: 'Hand Pruner', price: 19.99, image: 'https://placehold.co/400x400.png', slug: 'pruner', category: 'hand-tools', rating: 4.2 },
    { id: '8', name: 'Heavy Duty Work Gloves', price: 15.99, image: 'https://placehold.co/400x400.png', slug: 'gloves', category: 'safety-gear', rating: 4.9 },
    { id: '9', name: 'Automatic Seed Planter', price: 1250.00, image: 'https://placehold.co/400x400.png', slug: 'seed-planter', category: 'farming-equipment', rating: 4.6 },
    { id: '10', name: 'Garden Hose with Nozzle', price: 35.00, image: 'https://placehold.co/400x400.png', slug: 'garden-hose', category: 'gardening', rating: 4.1 },
    { id: '11', name: 'Cordless Leaf Blower', price: 179.00, image: 'https://placehold.co/400x400.png', slug: 'leaf-blower', category: 'power-tools', rating: 4.5 },
    { id: '12', name: 'Steel Wheelbarrow', price: 89.99, image: 'https://placehold.co/400x400.png', slug: 'wheelbarrow', category: 'gardening', rating: 4.3 },
];

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
