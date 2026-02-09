import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
import { AudioProvider } from '@/components/audio/AudioProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdSenseScript from '@/components/ads/AdSenseScript';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jazz Circle of Fifths — Interactive Jazz Theory Tool',
  description:
    'Explore jazz harmony with our interactive Circle of Fifths. Learn diatonic chords, scale suggestions, chord voicings, and common jazz progressions in all 24 keys.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <AdSenseScript />
        <AudioProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
