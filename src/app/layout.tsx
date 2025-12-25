import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutClient from '@/components/LayoutClient';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rushikesh Zende | AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in production-grade machine learning systems, computer vision, NLP, and intelligent automation.",
  keywords: [
    "Rushikesh Zende",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
  ],
  openGraph: {
    title: "Rushikesh Zende | AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production-grade machine learning systems, computer vision, NLP, and intelligent automation.",
    url: "https://rushikeshzende.vercel.app",
    siteName: "Rushikesh Zende",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Zende | AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production-grade machine learning systems, computer vision, NLP, and intelligent automation.",
    creator: "@rushikeshzende",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200 overflow-x-hidden" suppressHydrationWarning>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
