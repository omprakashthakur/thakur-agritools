
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart, Settings, ShoppingCart, Users, Package, Tractor, Shapes } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        label: "Categories",
        href: "/admin/categories",
        icon: Shapes
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
    <aside className="hidden md:flex h-full flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Tractor className="h-6 w-6 text-primary" />
          <span className="">Thakur AgriTools</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="grid items-start px-4 text-sm font-medium">
            {menuItems.map(item => (
                <Link key={item.href} href={item.href} className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    isActive(item.href) && "bg-accent text-primary-foreground"
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
