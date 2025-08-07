'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Last updated: {lastUpdated}</p>
        
        <p>Thakur AgriTools Hub ("us", "we", or "our") operates the website (the "Service").</p>
        
        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Thakur AgriTools Hub is managed through... (This is just placeholder text).</p>
        
        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        
        <h3 className="text-xl font-headline font-semibold text-foreground pt-2">Types of Data Collected</h3>
        <h4 className="font-bold text-foreground">Personal Data</h4>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
        <ul className="list-disc list-inside">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        
        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">Use of Data</h2>
        <p>Thakur AgriTools Hub uses the collected data for various purposes:</p>
        <ul className="list-disc list-inside">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-headline font-bold text-foreground pt-4">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc list-inside">
            <li>By email: info@thakuragritools.com</li>
            <li>By visiting this page on our website: /contact</li>
        </ul>
      </div>
    </div>
  );
}
