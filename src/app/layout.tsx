import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
// import { Footer } from '@/components/layout/footer'; Removed Footer
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next"

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  preload: true,
});

export const metadata: Metadata = {
  title: '9ova',
  description: 'Transforming Ideas into Digital Excellence | 9ova Tech Solutions',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} dark`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> Removed Footer */}
        <Toaster />
      </body>
    </html>
  );
}
