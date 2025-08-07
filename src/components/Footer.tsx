import Link from 'next/link';
import { Tractor } from 'lucide-react';

const categories = [
  'Power Tools',
  'Hand Tools',
  'Gardening',
  'Farming Equipment',
  'Safety Gear',
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-primary" />
              <span className="text-2xl font-headline font-bold">Thakur AgriTools</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Your one-stop shop for high-quality industrial and agricultural tools in Nepal and India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map(category => (
                <li key={category}><Link href={`/shop?category=${category.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">{category}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact & Payments */}
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">Contact Us</h3>
            <p className="text-sm">Kathmandu, Nepal</p>
            <p className="text-sm">New Delhi, India</p>
            <h3 className="text-lg font-headline font-semibold mt-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-black text-xs font-bold ring-1 ring-inset ring-gray-300">eSewa</div>
              <div className="w-12 h-8 bg-purple-100 rounded flex items-center justify-center text-black text-xs font-bold ring-1 ring-inset ring-gray-300">Khalti</div>
              <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-black text-xs font-bold ring-1 ring-inset ring-gray-300">Fonepay</div>
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-black text-xs font-bold ring-1 ring-inset ring-gray-300">UPI</div>
              <div className="w-12 h-8 bg-yellow-100 rounded flex items-center justify-center text-black text-xs font-bold ring-1 ring-inset ring-gray-300">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Thakur AgriTools Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
