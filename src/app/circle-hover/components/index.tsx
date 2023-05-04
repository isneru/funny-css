"use client"

import { motion } from "framer-motion"

export const PlaceholderIcon = () => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    width={100}
    height={100}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 9.5v4c0 .276-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5zm-10.061 1.99-1.218-1.218c-.281-.281-.282-.779 0-1.061s.78-.281 1.061 0l1.218 1.218 1.218-1.218c.281-.281.779-.282 1.061 0s.281.78 0 1.061l-1.218 1.218 1.218 1.218c.281.281.282.779 0 1.061s-.78.281-1.061 0l-1.218-1.218-1.218 1.218c-.281.281-.779.282-1.061 0s-.281-.78 0-1.061zm8.561-.99h-2v2h2zm-7.5-8.5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm9 5.25c0 .399-.353.75-.75.75-1.153 0-2.347 0-3.5 0-.397 0-.75-.351-.75-.75s.353-.75.75-.75h3.5c.397 0 .75.351.75.75zm-9-3.75c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 1.5c0 .399-.353.75-.75.75-1.153 0-2.347 0-3.5 0-.397 0-.75-.351-.75-.75s.353-.75.75-.75h3.5c.397 0 .75.351.75.75zm0-2.25c0 .399-.353.75-.75.75-1.153 0-2.347 0-3.5 0-.397 0-.75-.351-.75-.75s.353-.75.75-.75h3.5c.397 0 .75.351.75.75z"
      fillRule="nonzero"
    />
  </svg>
)

export const ButtonCircleHover = () => {
  const text = "HELLO | FRONTEND | WORLD | "

  return (
    <motion.button
      whileHover={{
        padding: 40,
        transition: { duration: 0.1 }
      }}
      className="relative mx-auto overflow-hidden rounded-full bg-white text-black">
      <div className="circle-hover absolute h-40 w-40">
        {text.split("").map((letter, idx) => (
          <span
            className="absolute h-full w-0 -translate-y-8"
            style={{
              rotate: `${(360 / text.length) * idx}deg`
            }}
            key={idx}>
            {letter}
          </span>
        ))}
      </div>
      <div className="flex h-40 w-40 items-center justify-center rounded-full">
        <PlaceholderIcon />
      </div>
    </motion.button>
  )
}
