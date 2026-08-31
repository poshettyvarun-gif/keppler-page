import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Keppler OCR — Multilingual AI OCR Platform',
  description: 'AI-powered OCR that reads, understands, and structures complex documents in any language at enterprise scale.',
  openGraph: {
    title: 'Keppler OCR — Multilingual AI OCR Platform',
    description: 'Read anything. In any language. At scale.',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Keppler OCR archival document processing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keppler OCR — Multilingual AI OCR Platform',
    description: 'Read anything. In any language. At scale.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
