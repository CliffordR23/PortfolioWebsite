import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Clifford Rodriguez | Portfolio",
  description:
    "Personal portfolio website for Clifford Rodriguez",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/CR2.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="py-6 px-4 bg-navy-dark text-center text-sm text-blue-200">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} Clifford Rodriguez. All rights reserved.</p>
            </div>
          </footer>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { BackToTop } from "@/components/back-to-top"
