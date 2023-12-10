import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import { Providers } from '@/components';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moss - Dental Clinic Management System',
  description: 'Dental Clinic Management System',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'dark')}>
        <Providers>{children}</Providers>
        <Toaster
          toastOptions={{
            style: { background: '#18222d', color: '#fff', borderColor: '#18222d' },
          }}
        />
      </body>
    </html>
  );
}
