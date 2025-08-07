
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, ShoppingCart, User, Menu, ChevronDown, Tractor, LogOut, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const categories = [
  'Power Tools',
  'Hand Tools',
  'Gardening',
  'Farming Equipment',
  'Safety Gear',
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

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
            <form onSubmit={handleSearchSubmit} className="hidden md:block relative w-48 lg:w-64">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="pr-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground">
                <Search />
              </button>
            </form>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-6 h-6" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>

            {loading ? (
                 <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ) : user ? (
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                         <Avatar className="h-9 w-9">
                            <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link href="/myaccount"><LayoutDashboard className="mr-2 h-4 w-4" /> My Account</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                           <LogOut className="mr-2 h-4 w-4" /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                 </DropdownMenu>
            ) : (
                <Button variant="ghost" size="icon" asChild>
                   <Link href="/myaccount">
                    <User className="w-6 h-6" />
                    <span className="sr-only">Account</span>
                  </Link>
                </Button>
            )}

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
