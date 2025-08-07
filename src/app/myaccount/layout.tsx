

'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MyAccountNav from '@/components/MyAccountNav';
import { Loader2 } from 'lucide-react';
import LoginSignup from '@/components/LoginSignup';

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // The LoginSignup component will handle the UI, no need to redirect
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <LoginSignup />;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <MyAccountNav />
        </div>
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
