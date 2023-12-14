import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <title>똑똑한 청년</title>
      <body className={inter.className}>
        <div className="flex flex-col items-center text-center justify-center align-middle w-screen h-screen bg-slate-200">
          <div className="pt-4 pb-2 fixed top-0	flex justify-between w-full md:w-4/5 lg:w-1/2">
            <Link href="/" className="text-3xl font-bold text-blue-400">
              똑똑한 청년.
            </Link>
          </div>

          <div className="flex gap-4 w-full md:w-4/5 lg:w-1/2">
            <div className="text-3xl font-medium text-blue-400">
              면접 마스터
            </div>

            <div className="text-3xl font-medium">CBT 문제집</div>
          </div>

          <div className="border p-6 rounded-2xl shadow-lg bg-slate-50 w-full h-3/4 md:w-4/5 md:h-3/4 lg:w-1/2 lg:h-3/4">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
