import { usePathname } from "next/navigation"

interface StrictRendererProps {
  children: React.ReactNode
  rule: string
  excludes?: boolean
}

export const StrictRenderer = ({
  children,
  rule,
  excludes = false
}: StrictRendererProps) => {
  const pathname = usePathname()

  if (excludes) return pathname === rule ? null : <>{children}</>
  return pathname === rule ? <>{children}</> : null
}
