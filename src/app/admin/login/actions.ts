
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // WARNING: Hardcoded credentials. In a real application, use a secure authentication provider.
  if (email === 'admin@example.com' && password === 'password') {
    const sessionCookie = {
      name: 'admin-session',
      value: JSON.stringify({ email, isAdmin: true }),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    };
    cookies().set(sessionCookie as any);
    redirect('/admin');
  } else {
    return { error: 'Invalid email or password.' };
  }
}

export async function logout() {
    cookies().delete('admin-session');
    redirect('/admin/login');
}
