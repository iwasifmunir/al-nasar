'use client';
import { usePathname } from 'next/navigation';
import StoreProvider from './storeProvider';
import './styles.scss';
import './globals.css';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ToastProvider } from '@/hooks/ToastProvider';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang='en'>
      <head>
        <title>Al Nasar</title>
        <meta name='apple-mobile-web-app-title' content='Al Nasar' />
        <link rel='icon' type='image/svg+xml' href='/alnasar.png' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='apple-touch-icon-precomposed' href='/apple-touch-icon.png' />
      </head>
      <body className='related'>
        <StoreProvider>
          <ToastProvider>
            <div className={`w-full block screenHeight`}>{children}</div>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
