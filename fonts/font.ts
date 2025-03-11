import { Geist_Mono, Red_Hat_Display } from 'next/font/google'

export const redhat = Red_Hat_Display({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-redhat',
})

export const geistMono = Geist_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
