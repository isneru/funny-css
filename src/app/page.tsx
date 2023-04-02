import Link from "next/link"
import { usePages } from "utils"

export default async function Home() {
  const pages = await usePages()
  return (
    <div className="mx-auto">
      {pages.map((page, idx) => (
        <div key={idx}>
          <Link className="hover:underline" href={page.path}>
            {page.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
