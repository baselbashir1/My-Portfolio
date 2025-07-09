import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mhd Basel Bashir',
  description: 'Developed by Basel',
  generator: 'Basel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
