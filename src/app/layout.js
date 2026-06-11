import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import FullscreenPrompt from '@/components/FullscreenPrompt';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbm',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://imranos.dev'),
  title: 'ImranOS — Full Stack Developer Portfolio',
  description:
    'Interactive Linux OS-inspired portfolio of Imran Akhtar, Full Stack Developer specializing in Next.js and Django.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ImranOS — Full Stack Developer Portfolio',
    description:
      'Interactive Linux desktop portfolio. Open apps, run terminal commands, explore projects.',
    url: 'https://imranos.dev',
    siteName: 'ImranOS',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <FullscreenPrompt />
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}