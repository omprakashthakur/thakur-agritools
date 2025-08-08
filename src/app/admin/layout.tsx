
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const session = cookieStore.get('admin-session');
  
  if (!session) {
    redirect('/admin/login');
  }
  
  // This is a special case for the login page itself, to avoid a redirect loop
  if (session && typeof children === 'object' && children && 'type' in children && (children.type as any).name === 'AdminLoginPage') {
     redirect('/admin');
  }

  return (
    <div className="admin-dashboard grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          {children}
        </main>
      </div>
    </div>
  );
}
