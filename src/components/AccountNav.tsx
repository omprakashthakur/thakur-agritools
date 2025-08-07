
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Package, MapPin, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const navLinks = [
  { href: '/account', label: 'My Profile', icon: User },
  { href: '/account/orders', label: 'Order History', icon: Package },
  { href: '/account/addresses', label: 'My Addresses', icon: MapPin },
];

const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

export default function AccountNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [user] = useAuthState(auth);
  const { toast } = useToast();

  const handleLogout = async () => {
    await auth.signOut();
    toast({ title: "Logged out", description: "You have been successfully logged out." });
    router.push('/');
  };

  return (
    <Card>
      <CardHeader className="items-center text-center">
        <Avatar className="h-24 w-24 mb-2">
            <AvatarImage src={user?.photoURL ?? ''} alt={user?.displayName ?? 'User'} />
            <AvatarFallback className="text-3xl">{getInitials(user?.displayName)}</AvatarFallback>
        </Avatar>
        <CardTitle>{user?.displayName}</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === link.href && 'bg-accent text-accent-foreground'
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </nav>
      </CardContent>
    </Card>
  );
}
