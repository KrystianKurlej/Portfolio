import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer';
import Script from 'next/script';
import Hotjar from '@hotjar/browser';

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
  const siteId = 3629146;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <html lang="pl">
      {/* Google tag (gtag.js) */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-VKGYSJX0W1`} />
      <Script id="google-analytics-script">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VKGYSJX0W1');
        `}
      </Script>
      <body className={poppins.className + ` bg-[#020202] text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
