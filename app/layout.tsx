import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PwaRegister } from '@/components/PwaRegister';

export const metadata: Metadata = {
  title: { default: 'System Formy', template: '%s | System Formy' },
  description: 'System Formy — trening, żywienie i indywidualne prowadzenie.',
  manifest: '/manifest.webmanifest',
  themeColor: '#111111',
  icons: { icon: '/icons/icon-192.png', apple: '/icons/icon-192.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><Header />{children}<Footer /><PwaRegister /></>;
}
