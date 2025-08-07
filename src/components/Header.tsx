import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, ShoppingCart, User, Menu, ChevronDown, Tractor } from 'lucide-react';

const categories = [
  'Power Tools',
  'Hand Tools',
  'Gardening',
  'Farming Equipment',
  'Safety Gear',
];

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-primary" />
              <span className="text-2xl font-headline font-bold text-foreground">Thakur AgriTools</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                  Categories <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem key={category}>
                      <Link href={`/shop?category=${category.toLowerCase().replace(/\s+/g, '-')}`}>{category}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:block relative w-48 lg:w-64">
              <Input type="search" placeholder="Search products..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-6 h-6" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
               <Link href="/account">
                <User className="w-6 h-6" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col space-y-4 p-4">
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                      <Tractor className="h-8 w-8 text-primary" />
                      <span className="text-2xl font-headline font-bold text-foreground">Thakur AgriTools</span>
                    </Link>
                    <Link href="/" className="text-lg font-medium">Home</Link>
                    <Link href="/shop" className="text-lg font-medium">Shop</Link>
                    <h3 className="text-lg font-medium pt-2">Categories</h3>
                    {categories.map((category) => (
                      <Link key={category} href={`/shop?category=${category.toLowerCase().replace(/\s+/g, '-')}`} className="pl-4 text-muted-foreground">{category}</Link>
                    ))}
                    <Link href="/about" className="text-lg font-medium pt-2">About Us</Link>
                    <Link href="/contact" className="text-lg font-medium">Contact</Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
