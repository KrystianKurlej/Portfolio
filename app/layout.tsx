import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer';
import Script from 'next/script';

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
      {/* Hotjar Tracking Code */}
      <Script strategy="beforeInteractive" src={`https://static.hotjar.com/c/hotjar-${process.env.NEXT_PUBLIC_HJ_ID}.js?sv=6`} />
      {/* Google tag (gtag.js) */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
      <Script id="google-analytics-script">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <body className={poppins.className + ` bg-[#020202] text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
