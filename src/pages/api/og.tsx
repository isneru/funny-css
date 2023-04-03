import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge"
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const pageTitle = searchParams.get("title")

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/og.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <span
          style={{
            fontSize: 130,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap"
          }}>
          {pageTitle}
        </span>
      </div>
    ),
    {
      width: 1920,
      height: 1080
    }
  )
}
