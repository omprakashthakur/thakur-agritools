
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

interface ShopSidebarProps {
  filters: {
    categories: string[];
    priceRange: [number, number];
  };
  onFilterChange: (newFilters: any) => void;
}

export default function ShopSidebar({ filters, onFilterChange }: ShopSidebarProps) {
    const handleCategoryChange = (categoryId: string) => {
        const newCategories = filters.categories.includes(categoryId)
          ? filters.categories.filter(c => c !== categoryId)
          : [...filters.categories, categoryId];
        onFilterChange({ categories: newCategories });
      };
    
      const handlePriceChange = (newRange: [number, number]) => {
        onFilterChange({ priceRange: newRange });
      };

      const clearFilters = () => {
        onFilterChange({
            categories: [],
            priceRange: [0, 250000]
        });
      };

  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-headline">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={category.id} className="text-base font-normal">
                {category.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-headline">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <Slider
                min={0}
                max={250000}
                step={100}
                value={filters.priceRange}
                onValueChange={handlePriceChange}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
            </div>
        </CardContent>
      </Card>

      <Button variant="ghost" className="w-full" onClick={clearFilters}>
        Clear All Filters
      </Button>
    </aside>
  );
}
