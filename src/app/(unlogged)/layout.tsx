import { Inter } from 'next/font/google'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'edcnogueira | Dashboard Template',
  description:
    'Dashboard was designed to streamline the software development process.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen w-full bg-accent">{children}</body>
    </html>
  )
}
