import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocial from '@/components/FloatingSocial';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Dr. Hayan | Top Orthodontic Specialty & Invisible Braces',
  description: 'Specialty Orthodontic Clinic by Dr. Hayan. Transforming smiles with extreme precision using the latest 3D digital scanning technologies and invisible clear aligners. Book your confident smile today.',
  keywords: 'orthodontics, orthodontist, clear aligners, invisalign, dental aesthetics, orthodontic clinic, jaw correction, Class I, Class II, Class III, digital dentistry, best orthodontist, braces, pediatric orthodontics',
  authors: [{ name: 'Dr. Hayan Clinic' }],
  openGraph: {
    title: 'Dr. Hayan | Premium Orthodontic Specialty',
    description: 'Specialty Orthodontic Clinic by Dr. Hayan. Transforming smiles with extreme precision using the latest digital technologies.',
    url: 'https://drhayanortho.com',
    siteName: 'Dr. Hayan Orthodontics',
    images: [
      {
        url: 'https://i.ibb.co/nNqJYXqD/removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Hayan Orthodontics Clinic',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Hayan | Premium Orthodontic Specialty',
    description: 'Transforming smiles with extreme precision using the latest 3D digital scanning technologies and invisible clear aligners.',
    images: ['https://i.ibb.co/nNqJYXqD/removebg-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-800 min-h-screen flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
