import { geistMono, redhat } from '@/fonts/font'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${redhat.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
