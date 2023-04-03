import { StrictRenderer } from "components/client"
import Link from "next/link"
import type { Metadata } from "next/types"
import { ReactNode } from "react"
import "styles/globals.css"

export async function generateMetadata(): Promise<Metadata | undefined> {
  const title = "Funny CSS"
  const description = "🤠"
  const image = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      type: "website",
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [image]
    }
  }
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
            className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/10 bg-white/10 px-3 py-1 transition-colors hover:bg-white/20">
            Go Home
          </Link>
        </StrictRenderer>
        <main className="flex h-screen items-center">{children}</main>
      </body>
    </html>
  )
}
