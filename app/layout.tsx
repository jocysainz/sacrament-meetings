import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sacrament Meeting Planner',
  description: 'Plan, view, and print sacrament meeting programs.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}