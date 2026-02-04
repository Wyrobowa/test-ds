'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { DashboardLayout, Breadcrumbs, BreadcrumbItem, Text } from 'tharaday';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string } | undefined>();
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);

    return (
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isCurrent = index === paths.length - 1;

          return (
            <BreadcrumbItem key={path} href={href} isCurrent={isCurrent}>
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
    );
  };

  return (
    <div className="tapestry-shell">
      <DashboardLayout
        headerTitle="Tharaday Books"
        user={user}
        onLogin={() => setUser({ name: 'Admin User' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'New User' })}
        breadcrumbs={getBreadcrumbs()}
        actions={
          <nav className="tapestry-nav">
            <Link href="/" className="tapestry-link">
              <Text
                variant="label"
                weight={pathname === '/' ? 'bold' : 'regular'}
              >
                Home
              </Text>
            </Link>
            <Link href="/browse" className="tapestry-link">
              <Text
                variant="label"
                weight={pathname === '/browse' ? 'bold' : 'regular'}
              >
                Browse
              </Text>
            </Link>
            <Link href="/sell" className="tapestry-link">
              <Text
                variant="label"
                weight={pathname === '/sell' ? 'bold' : 'regular'}
              >
                Sell
              </Text>
            </Link>
            <Link href="/admin" className="tapestry-link">
              <Text
                variant="label"
                weight={pathname.startsWith('/admin') ? 'bold' : 'regular'}
              >
                Admin
              </Text>
            </Link>
          </nav>
        }
      >
        {children}
      </DashboardLayout>
    </div>
  );
}
