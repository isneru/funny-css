import { ButtonCircleHover } from "app/circle-hover/components"
import { Metadata } from "next"
import { getMetadata } from "utils"

export async function generateMetadata(): Promise<Metadata | undefined> {
  return await getMetadata(
    "Circle Hover Effect",
    "This one is a bit tricky, but it's a cool effect."
  )
}

export default function CircleHover() {
  return <ButtonCircleHover />
}
