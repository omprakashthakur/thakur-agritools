
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const session = cookieStore.get('admin-session');

  if (session) {
    redirect('/admin');
  }

  return <>{children}</>;
}
