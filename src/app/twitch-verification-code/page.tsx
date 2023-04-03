import { TwitchVerificationCodeComponent } from "components/client"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata | undefined> {
  const image = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?page=Twitch+Verification+Code`

  return {
    title: "Twitch Verification Code",
    description: "Twitch Verification Code 🔒",
    openGraph: {
      type: "website",
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      title: "Twitch Verification Code",
      description: "Twitch Verification Code 🔒",
      card: "summary_large_image",
      images: [image]
    }
  }
}

export default function TwitchVerificationCode() {
  return (
    <div className="container mx-auto h-[400px] rounded bg-zinc-900">
      <div className="flex h-full items-center justify-center gap-5">
        <TwitchVerificationCodeComponent />
      </div>
    </div>
  )
}
