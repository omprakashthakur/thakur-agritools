
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart, Settings, ShoppingCart, Users, Package, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const menuItems = [
    {
        label: "Dashboard",
        href: "/admin",
        icon: Home
    },
    {
        label: "Products",
        href: "/admin/products",
        icon: Package
    },
    {
        label: "Orders",
        href: "/admin/orders",
        icon: ShoppingCart
    },
    {
        label: "Customers",
        href: "/admin/customers",
        icon: Users
    },
    {
        label: "Analytics",
        href: "/admin/analytics",
        icon: BarChart
    },
    {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings
    }
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href !== '/admin' && pathname.startsWith(href));
  }

  return (
    <aside className="hidden md:flex h-full flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
          </svg>
          <span className="">DashCode</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="grid items-start px-4 text-sm font-medium">
            {menuItems.map(item => (
                <Link key={item.href} href={item.href} className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    isActive(item.href) && "bg-accent text-primary"
                )}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                </Link>
            ))}
        </div>
      </nav>
    </aside>
  );
}
