import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Headset, ShieldCheck, Truck } from 'lucide-react';

const trustStats = [
  {
    icon: Truck,
    value: '100+',
    label: 'Projects Delivered',
  },
  {
    icon: Headset,
    value: '24/7',
    label: 'Support',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Secure Payments',
  },
  {
    icon: Award,
    value: '5 Years',
    label: 'Market Experience',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline text-center font-bold mb-4">Why Trust Us?</h2>
        <p className="text-center max-w-2xl mx-auto text-secondary-foreground/80 mb-12">
          We are committed to providing the best tools and services to our customers. Our track record speaks for itself.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustStats.map((stat, index) => (
            <Card key={index} className="text-center bg-background/10 border-secondary-foreground/20 text-secondary-foreground transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                    <stat.icon className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-4xl font-bold">{stat.value}</CardTitle>
                <p className="mt-2 text-secondary-foreground/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
