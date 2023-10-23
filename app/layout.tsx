import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarPage from '@/components/NavbarPage'
import FooterPage from '@/components/FooterPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ei Myat Noe Thu | </>',
  description: 'made by eimyat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarPage />
        {children}
        <FooterPage />
      </body>
    </html>
  )
}
