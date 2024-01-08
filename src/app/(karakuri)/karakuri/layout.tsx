import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/karakuri/header'
import Hooter from '@/components/karakuri/hooter'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
})
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: "--font-noto"
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansJP.variable}`} prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#1d2427" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LC5K3384FW" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LC5K3384FW');
        `}
        </Script>
      </head>
      <body className={notoSansJP.className}>
        <div className="w-full text-white select-none bg-dark-950">
          <Header />
          {children}
          <Hooter />
        </div>
      </body>
    </html>
  )
}
