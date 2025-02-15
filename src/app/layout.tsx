import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Culinary Chronicles',
  description: 'A modern recipe blog sharing delicious meals and cooking adventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">
          <header className="border-b">
            <nav className="container mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold">
                <Link href="/">Culinary Chronicles</Link>
              </h1>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="border-t">
            <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Culinary Chronicles. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 