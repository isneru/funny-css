import { TwitchVerificationCodeComponent as Code } from "app/twitch-verification-code/components"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata | undefined> {
  const title = "Twitch Verification Code"
  const description = "Twitch Verification Code 🔒"
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

export default function TwitchVerificationCode() {
  return (
    <div className="container mx-auto h-[400px] rounded bg-zinc-900">
      <div className="flex h-full items-center justify-center gap-5">
        <Code />
      </div>
    </div>
  )
}
