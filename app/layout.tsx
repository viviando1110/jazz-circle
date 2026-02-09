import type { Metadata } from "next";
import localFont from "next/font/local";
import { AudioProvider } from "@/components/audio/AudioProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jazz Circle of Fifths",
  description: "Interactive jazz theory tool centered on the Circle of Fifths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
