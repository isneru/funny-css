import { CheckIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { useEffect, useState } from "react"

type TCode = (undefined | number)[]

export const TwitchVerificationCodeComponent = () => {
  const NUMBER_OF_DIGITS = 6
  const [code, setCode] = useState<TCode>(new Array(NUMBER_OF_DIGITS).fill(0))
  const [isLoading, setIsLoading] = useState(true)

  let isCodeValid = code.every(Number)

  useEffect(() => {
    if (isCodeValid) {
      const timer = setTimeout(() => setIsLoading(false), 2000)
      const timerReset = setTimeout(() => {
        setIsLoading(true)
        setCode(new Array(NUMBER_OF_DIGITS).fill(0))
      }, 4000)
      return () => {
        clearTimeout(timer)
        clearTimeout(timerReset)
      }
    }
  }, [isCodeValid])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target

    const idAsNumber = Number(id)

    const newCode = code.map((digit, index) =>
      index === idAsNumber ? Number(value[value.length - 1]) : digit
    )

    setCode(newCode)

    focusNextInput(idAsNumber)
  }

  function handleInputPaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pastedText = e.clipboardData.getData("text")

    if (pastedText.length !== NUMBER_OF_DIGITS) return

    const newCode = code.map((_, index) => {
      focusNextInput(index)
      const pastedDigit = Number(pastedText[index])

      return pastedDigit
    })

    setCode(newCode)
  }

  function focusNextInput(id: number) {
    const nextInput = document.getElementById((id + 1).toString())
    nextInput
      ? nextInput.focus()
      : document.getElementById(id.toString())!.blur()
  }

  return (
    <div className="flex flex-col items-end justify-center gap-4">
      <div className="flex h-full items-center justify-center gap-5">
        {code.map((digit, idx) => (
          <input
            key={idx}
            type="number"
            id={idx.toString()}
            maxLength={1}
            value={!!digit ? digit : ""}
            onChange={handleInputChange}
            onPaste={handleInputPaste}
            className="h-14 w-20 rounded-xl bg-zinc-800 text-center text-zinc-100 caret-transparent outline-none focus:border-2 focus:border-white/20"
          />
        ))}
      </div>
      <button
        className={clsx(
          "flex w-1/5 items-center justify-center rounded-lg p-2 font-semibold",
          {
            "cursor-not-allowed": !isCodeValid,
            "bg-violet-500": isLoading,
            "bg-green-500": !isLoading
          }
        )}>
        {isCodeValid ? (
          isLoading ? (
            <svg
              width={24}
              height={24}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <g className="spinner origin-center">
                <circle cx={12} cy={12} r="9.5" fill="none" strokeWidth={2} />
              </g>
            </svg>
          ) : (
            <CheckIcon className="h-6 w-6" />
          )
        ) : (
          "Submit"
        )}
      </button>
    </div>
  )
}
