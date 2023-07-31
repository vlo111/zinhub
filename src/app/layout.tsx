import { ReactNode } from 'react';
import './globals.css';

import { Noto_Sans_Armenian } from 'next/font/google';
import { AuthProvider } from '@/providers/auth';
import { QueryProvider } from '@/providers/query';

const armenianScript = Noto_Sans_Armenian({ subsets: ['armenian'] });

export const metadata = {
  title: 'ZinHub',
  description: 'Generated by analysed',
};

export default ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={armenianScript.className}>
      <AuthProvider>
        <QueryProvider>{children}</QueryProvider>
      </AuthProvider>
    </body>
  </html>
);
