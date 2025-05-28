import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Armand Sauzay',
  description: 'Personal website of Armand Sauzay',
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 