import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer';
import { HotjarInit } from './utils/HotjarInit';
import { GoogleAnalyticsInit } from './utils/GoogleAnalyticsInit';
import CookiesModal from './polityka-prywatnosci/CookiesModal';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Krystian Kurlej',
  description: 'Portfolio',
  themeColor: "#020202",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <HotjarInit />
      <GoogleAnalyticsInit />
      <body className={poppins.className + ` bg-[#020202] text-white`}>
        <CookiesModal />
        {children}
      </body>
    </html>
  )
}
