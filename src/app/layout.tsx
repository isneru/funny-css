import { StrictRenderer } from "components/client"
import Link from "next/link"
import type { Metadata } from "next/types"
import { ReactNode } from "react"
import "styles/globals.css"
import { getMetadata } from "utils"

export async function generateMetadata(): Promise<Metadata | undefined> {
  return await getMetadata("Funny CSS", "🤠")
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <StrictRenderer excludes rule="/">
          <Link
            href="/"
            className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-zinc-300 transition-colors hover:bg-white/20">
            Go Home
          </Link>
        </StrictRenderer>
        <main className="flex h-screen items-center">{children}</main>
      </body>
    </html>
  )
}
