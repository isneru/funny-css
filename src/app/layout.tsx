import { ReactNode } from "react"
import "styles/globals.css"

export const metadata = {
  title: "Next13 Boilerplate",
  description: ""
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
