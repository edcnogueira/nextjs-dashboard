import { Sidebar } from '@/components/sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'edcnogueira | Dashboard Template',
  description:
    'Dashboard was designed to streamline the software development process.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex">
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col gap-2 bg-accent">
          {children}
        </div>
      </body>
    </html>
  )
}
