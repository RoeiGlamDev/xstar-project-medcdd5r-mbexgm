import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxury LRP cosmetics',
  description: 'Experience the elegance of luxury LRP cosmetics, your destination for high-end beauty products.',
  keywords: ['cosmetics', 'luxury LRP cosmetics', 'luxury beauty', 'high-end cosmetics'],
  authors: [{ name: 'luxury LRP cosmetics' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function