import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nimax',
  description: 'Test for nimax',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {/*<main className='h-screen grid place-content-center'>*/}
    {children}
    {/*</main>*/}
    </body>
    </html>
  )
}
