import { type Metadata } from "next"

export async function getMetadata(
  title: string,
  description: string
): Promise<Metadata | undefined> {
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
