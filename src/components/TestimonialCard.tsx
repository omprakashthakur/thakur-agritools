import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between bg-card text-card-foreground p-6 rounded-lg shadow-lg">
      <div>
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
        <CardContent className="p-0">
          <p className="text-card-foreground/80">"{testimonial.comment}"</p>
        </CardContent>
      </div>
      <div className="flex items-center mt-6">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full"
          data-ai-hint="person face"
        />
        <div className="ml-4">
          <p className="font-semibold font-headline">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  );
}
