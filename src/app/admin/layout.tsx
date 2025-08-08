// This layout is intentionally left blank. 
// It is needed for the /admin/login route to not be affected by the protected layout.
export default function UnprotectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
