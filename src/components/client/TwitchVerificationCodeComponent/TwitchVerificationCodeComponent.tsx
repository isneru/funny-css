import { useState } from "react"

type TCode = (undefined | number)[]

export const TwitchVerificationCodeComponent = () => {
  const NUMBER_OF_DIGITS = 6
  const [code, setCode] = useState<TCode>(new Array(NUMBER_OF_DIGITS).fill(0))

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target

    if (value.length > 1) {
      setCode(
        code.map((digit, index) =>
          index === Number(id) ? Number(value[value.length - 1]) : digit
        )
      )

      focusNextInput(Number(id))
      return
    }

    setCode(
      code.map((digit, index) => (index === Number(id) ? Number(value) : digit))
    )

    focusNextInput(Number(id))
  }

  function focusNextInput(id: number) {
    const nextInput = document.getElementById(`${id + 1}`)
    if (nextInput) {
      nextInput.focus()
    }
  }

  return (
    <>
      {code.map((digit, idx) => (
        <input
          key={idx}
          className="h-20 w-20 rounded bg-zinc-800 text-center text-zinc-100 caret-transparent outline-none focus:border-2 focus:border-white/20"
          type="number"
          value={!!digit ? digit : ""}
          id={idx.toString()}
          onChange={handleInputChange}
        />
      ))}
    </>
  )
}
