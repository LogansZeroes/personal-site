import type { Metadata, Viewport } from 'next';
import React from 'react';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Logan Radochonski: Developer & Entrepreneur",
  description: "Logan Radochonski's Personal Website",
  authors: [{ name: 'Logan Radochonksi' }],
  openGraph: {
    title: "Logan Radochonski: Developer & Entrepreneur",
    description: "Logan Radochonski's Personal Website",
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary',
    title: "Logan Radochonski: Developer & Entrepreneur",
    description: "Logan Radochonski's Personal Website",
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
    shortcut: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="is-preload">{children}</body>
    </html>
  );
}
