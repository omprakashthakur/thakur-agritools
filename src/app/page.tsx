import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import TrustSection from '@/components/TrustSection';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Dummy data for demonstration
const featuredProducts = [
  { id: '1', name: 'Heavy Duty Power Drill', price: 129.99, originalPrice: 159.99, image: 'https://placehold.co/400x400.png', slug: 'power-drill', tag: 'Sale' },
  { id: '2', name: 'Professional Garden Shovel', price: 49.99, image: 'https://placehold.co/400x400.png', slug: 'shovel' },
  { id: '3', name: 'Electric Tiller and Cultivator', price: 249.99, image: 'https://placehold.co/400x400.png', slug: 'electric-tiller' },
  { id: '4', name: 'Advanced Protective Goggles', price: 24.99, image: 'https://placehold.co/400x400.png', slug: 'safety-goggles', tag: 'New' },
];

const categories = [
  { name: 'Power Tools', image: 'https://placehold.co/300x200.png', slug: 'power-tools' },
  { name: 'Hand Tools', image: 'https://placehold.co/300x200.png', slug: 'hand-tools' },
  { name: 'Gardening', image: 'https://placehold.co/300x200.png', slug: 'gardening' },
  { name: 'Farming Equipment', image: 'https://placehold.co/300x200.png', slug: 'farming-equipment' },
];

const testimonials = [
  { name: 'Ramesh Thapa', role: 'Farmer, Chitwan', avatar: 'https://placehold.co/48x48.png', comment: 'The quality of tools is unmatched. My farm has become much more efficient since I started using Thakur AgriTools.', rating: 5 },
  { name: 'Sita Sharma', role: 'Construction Manager, Pokhara', avatar: 'https://placehold.co/48x48.png', comment: 'Reliable, durable, and delivered on time. The customer support is also excellent. Highly recommended for industrial needs.', rating: 5 },
  { name: 'Arjun Patel', role: 'Gardening Enthusiast, Delhi', avatar: 'https://placehold.co/48x48.png', comment: 'I found everything I needed for my home garden. The prices are very competitive and the website is easy to use.', rating: 4 },
  { name: 'Priya Singh', role: 'Landscaper, Mumbai', avatar: 'https://placehold.co/48x48.png', comment: 'Great variety of tools. The electric tiller I bought is powerful and has made my work so much easier.', rating: 5 },
];


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Hero background showing agricultural tools"
          fill
          className="object-cover z-0"
          data-ai-hint="agricultural equipment farm"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-start justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4">Top Quality AgriTools</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Get 40% off your first purchase. The best tools for your farm and industrial needs, delivered to your doorstep.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 px-8">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline text-center font-bold mb-4">Shop by Category</h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
            Find the right tools for your job, from power tools to large farming equipment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline text-center font-bold mb-4">Featured Products</h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
            Check out our best-sellers and new arrivals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <TrustSection />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline text-center font-bold mb-4">What Our Customers Say</h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
            Real stories from our satisfied customers across Nepal and India.
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
