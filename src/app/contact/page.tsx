
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function ContactPage() {
    
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-secondary-foreground/80">
                We're here to help. Reach out to us with any questions or for support.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-headline font-bold">Get In Touch</h2>
                        <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-primary" />
                            <div>
                                <a href="tel:+9779848463549" className="hover:text-primary transition-colors">+977 9848463549</a>
                                <span className="mx-2">/</span>
                                <a href="tel:+9779811108448" className="hover:text-primary transition-colors">+977 9811108448</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-primary" />
                            <a href="mailto:info@thakuragritools.com" className="hover:text-primary transition-colors">info@thakuragritools.com</a>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <span>Dhangadhi, Kailali, Nepal<br/>Bhansar Road, Opposite of Sabji Mandi</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-headline font-semibold">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank"><Facebook className="w-5 h-5" /></Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank"><Twitter className="w-5 h-5" /></Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank"><Instagram className="w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardContent className="p-6">
                        <form className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>
                            <Input type="email" placeholder="Email Address" />
                            <Input type="tel" placeholder="Phone Number" />
                            <Textarea placeholder="Your Message" rows={5} />
                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Map Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-headline font-bold text-center mb-8">Our Location</h2>
                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                    <Image 
                        src="https://placehold.co/1200x600.png"
                        alt="Map to Thakur AgriTools Hub"
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                        data-ai-hint="city map"
                    />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
