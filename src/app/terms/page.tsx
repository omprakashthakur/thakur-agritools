'use client';

import { useState, useEffect } from 'react';

export default function TermsOfServicePage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Last updated: {lastUpdated}</p>

        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">1. Introduction</h2>
        <p>Welcome to Thakur AgriTools Hub! These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website (together or individually “Service”) operated by Thakur AgriTools Hub.</p>
        <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here /privacy.</p>
        <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>

        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">2. Communications</h2>
        <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at info@thakuragritools.com.</p>
        
        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">3. Purchases</h2>
        <p>If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
        <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>

        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">4. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Nepal and India, which governing law applies to agreement without regard to its conflict of law provisions.</p>
        
        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">5. Changes To Service</h2>
        <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period.</p>
        
        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">Contact Us</h2>
        <p>Please send your feedback, comments, requests for technical support by email: <strong>info@thakuragritools.com</strong>.</p>
      </div>
    </div>
  );
}
