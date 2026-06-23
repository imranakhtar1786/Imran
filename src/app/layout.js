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
  metadataBase: new URL('https://imran-akhtar.vercel.app'),

  title: 'ImranOS — Full Stack Developer Portfolio',

  description:
    'Interactive Linux OS-inspired portfolio of Imran Akhtar, Full Stack Developer specializing in Next.js and Django.',

  verification: {
    google: 'ybv0AXwMuaK6pfnkDeM9Q9mwvIU2v-FSF3rQSfdz7To',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'ImranOS — Full Stack Developer Portfolio',

    description:
      'Interactive Linux desktop portfolio. Open apps, run terminal commands, explore projects.',

    url: 'https://imran-akhtar.vercel.app',

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