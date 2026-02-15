import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
import { AudioProvider } from '@/components/audio/AudioProvider';
import { SubscriptionProvider } from '@/components/subscription/SubscriptionProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import AdSenseScript from '@/components/ads/AdSenseScript';
import { themeScript } from '@/lib/theme-script';
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
  metadataBase: new URL('https://jazz-circle.com'),
  title: 'Jazz Circle of Fifths — Interactive Jazz Theory Tool',
  description:
    'Explore jazz harmony with our interactive Circle of Fifths. Learn diatonic chords, scale suggestions, chord voicings, and common jazz progressions in all 24 keys.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jazz-circle.com',
    siteName: 'Jazz Circle',
    title: 'Jazz Circle — Interactive Circle of Fifths for Jazz Musicians',
    description:
      'Learn jazz harmony with an interactive Circle of Fifths. Explore diatonic chords, jazz progressions, 100+ song chord charts with notation and audio playback.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jazz Circle — Interactive Circle of Fifths for Jazz Musicians',
    description:
      'Learn jazz harmony with an interactive Circle of Fifths.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <GoogleAnalytics />
        <AdSenseScript />
        <AudioProvider>
          <SubscriptionProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SubscriptionProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
