import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"
import { RootLayoutProps } from "@/utils/type"
import { NavigationBar } from "@/components/Nav"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"
import HeaderLogo from "@/components/HeaderLogo"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sanxs",
})

export const metadata: Metadata = {
  title: "温州肯恩大学科技科研协会",
  description: "温州肯恩大学科技科研协会官方网站",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex flex-col  min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header >
          <HeaderLogo/>
          <NavigationBar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
