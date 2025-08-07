import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
    slug: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/shop?category=${category.slug}`} className="group block">
      <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            width={300}
            height={200}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="agricultural tools"
          />
        </div>
        <CardContent className="p-4 bg-background">
          <h3 className="text-lg font-headline font-semibold text-center text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
