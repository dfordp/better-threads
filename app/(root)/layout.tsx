import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from "@clerk/themes";



import TopBar from '@/components/shared/Topbar';
import LeftSideBar from '@/components/shared/LeftSideBar';
import RightSideBar from '@/components/shared/RightSideBar';
import BottomBar from '@/components/shared/BottomBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Better Threads',
  description: 'Understanding working of a social media app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className={inter.className}>
            <TopBar />

              <main className='flex flex-row'>
                <LeftSideBar />
                <section className='main-container'>
                  <div className='w-full max-w-4xl'>{children}</div>
                </section>
                {/* @ts-ignore */}
                <RightSideBar />
              </main>

            <BottomBar />  
        </body>
      </html>
    </ClerkProvider>
    
  )
}
