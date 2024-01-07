import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/index/header'
import Hooter from '@/components/index/hooter'
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

export const metadata: Metadata = {
  title: 'Nara Roboco Project',
  description: '奈良高専ロボコンプロジェクトの公式サイトです',
  icons: "/favicon.svg",
  metadataBase: new URL("https://nararobocon.github.io" ?? 'http://localhost:3000'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansJP.variable}`} prefix="og: http://ogp.me/ns#">
      <head>
        <title>Nara Robocon Project</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name='description' content='奈良高専ロボコンプロジェクトの公式サイトです' />
        <meta name="theme-color" content="#1d2427" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
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
        <div className="w-screen text-white select-none bg-dark-950">
          <Header />
          {children}
          <Hooter />
        </div>
      </body>
    </html>
  )
}
