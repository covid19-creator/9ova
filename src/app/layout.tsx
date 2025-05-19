import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
// import { Footer } from '@/components/layout/footer'; Removed Footer
import { Toaster } from '@/components/ui/toaster';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'LandingSpark',
  description: 'Innovate. Create. Elevate. | LandingSpark Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
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
