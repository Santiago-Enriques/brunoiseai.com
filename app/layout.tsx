import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: { default: 'Brunoise AI — Your Personal AI Chef', template: '%s | Brunoise AI' },
  description: 'Smart meal planning and nutrition tracking tailored to your fitness goals. AI-powered meal plans for bulking, cutting, or maintaining.',
  keywords: ['AI meal planning', 'nutrition tracking', 'macro tracking', 'fitness', 'meal plans', 'food scanner'],
  openGraph: {
    type: 'website',
    url: 'https://brunoiseai.com',
    title: 'Brunoise AI — Your Personal AI Chef',
    description: 'Smart meal planning and nutrition tracking tailored to your fitness goals.',
    siteName: 'Brunoise AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brunoise AI — Your Personal AI Chef',
    description: 'Smart meal planning and nutrition tracking tailored to your fitness goals.',
    site: '@brunoiseai',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
