import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agam Vuppulury',
  description: 'Hearty Welcome to my Personal website showcasing my work & skills.',
  keywords: 'Data Scientist, Gen AI Engineer, AI Safety Researcher',
  authors: [{ name: 'V.Agam' }],
  creator: 'Agam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Agam Vuppulury - Data Scientist & Gen AI Engineer',
    description: 'Personal website showcasing my work as a Data Scientist.',
    siteName: 'V.Agam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agam Vuppulury - Data Scientist & Gen AI Engineer',
    description: 'Personal website showcasing my work as a Data Scientist.',
    creator: '@Agam_2',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
    </html>
  )
}
