import './globals.css';

import Loader from '@/components/sections/loader';

import Provider from '@/config/provider';
import { Viewport } from 'next';
import { colors } from '@/config/colors';
import { getSEOTags } from '@/lib/seo';
import { frick } from '@/lib/fonts';

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: colors.main,
  width: 'device-width',
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${frick.className} bg-BACKGROUND w-screen h-screen`}>
        <Provider>
          <Loader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
