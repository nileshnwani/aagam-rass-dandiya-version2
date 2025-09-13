import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aagam Rass Dandiya - Premium Dandiya Event 2025",
  description: "Join us for the most vibrant and exciting Dandiya event of 2025! Experience traditional Gujarati culture with modern entertainment, delicious food, and unforgettable memories.",
  keywords: "dandiya, garba, gujarati, festival, event, 2025, new york, dance, culture, tradition, premium, celebration",
  authors: [{ name: "Aagam Rass Dandiya Team" }],
  creator: "Aagam Rass Dandiya",
  publisher: "Aagam Rass Dandiya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aagamrassdandiya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aagam Rass Dandiya - Premium Dandiya Event 2025",
    description: "Join us for the most vibrant and exciting Dandiya event of 2025! Experience traditional Gujarati culture with modern entertainment.",
    url: 'https://aagamrassdandiya.com',
    siteName: 'Aagam Rass Dandiya',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aagam Rass Dandiya Event 2025 - Premium Gujarati Cultural Celebration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aagam Rass Dandiya - Premium Dandiya Event 2025",
    description: "Join us for the most vibrant and exciting Dandiya event of 2025!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
