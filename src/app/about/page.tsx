
import Image from 'next/image';
import { Award, ShieldCheck, Tractor, Users } from 'lucide-react';
import TrustSection from '@/components/TrustSection';

const team = [
    {
      name: 'Dharam Bir Thakur',
      role: 'Proprietor',
      avatar: 'https://placehold.co/128x128.png',
      bio: 'With decades of experience in the agricultural and industrial sectors, Dharam Bir Thakur leads the company with a vision for quality and customer satisfaction.',
    },
];

const authorizedDealers = [
    { name: 'STIHL', logo: 'https://placehold.co/150x50.png', hint: 'stihl logo' },
    { name: 'Honda Power Products', logo: 'https://placehold.co/150x50.png', hint: 'honda logo' },
    { name: 'OLEO-MAC', logo: 'https://placehold.co/150x50.png', hint: 'oleo-mac logo' },
    { name: 'NEELKAMAL', logo: 'https://placehold.co/150x50.png', hint: 'neelkamal logo' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">About Thakur AgriTools Hub</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-secondary-foreground/80">
                Empowering Nepal and India with top-tier agricultural and industrial tools since 2018.
            </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Workers using tools"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="workers industry"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-foreground">Our Mission & Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to be the most trusted and reliable supplier of agricultural and industrial tools in the region. We aim to provide high-quality, durable, and efficient tools that empower our customers, from individual farmers to large-scale construction companies, to achieve their goals with excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where everyone has access to the best tools for their trade, fostering growth, efficiency, and prosperity across communities in Nepal and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-headline text-center font-bold mb-12">Meet Our Leadership</h2>
              <div className="flex justify-center">
                {team.map((member) => (
                    <div key={member.name} className="text-center max-w-md">
                        <Image
                            src={member.avatar}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="rounded-full mx-auto mb-4 shadow-lg"
                            data-ai-hint="man portrait"
                        />
                        <h3 className="text-2xl font-headline font-semibold">{member.name}</h3>
                        <p className="text-primary font-bold">{member.role}</p>
                        <p className="mt-2 text-muted-foreground">{member.bio}</p>
                    </div>
                ))}
              </div>
          </div>
      </section>

      {/* Authorized Dealer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline text-center font-bold mb-4">Authorized Seller & Dealer</h2>
            <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
                We are proud to be an authorized dealer for leading brands in the industry, ensuring you get genuine products and the best service.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {authorizedDealers.map((dealer) => (
                    <div key={dealer.name}>
                        <Image 
                            src={dealer.logo} 
                            alt={dealer.name} 
                            width={150} 
                            height={50} 
                            className="object-contain" 
                            data-ai-hint={dealer.hint}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <TrustSection />
    </>
  );
}
