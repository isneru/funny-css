import { TwitchVerificationCodeComponent as Code } from "app/twitch-verification-code/components"
import type { Metadata } from "next"
import { getMetadata } from "utils"

export async function generateMetadata(): Promise<Metadata | undefined> {
  return await getMetadata(
    "Twitch Verification Code",
    "Twitch Verification Code 🔒"
  )
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
