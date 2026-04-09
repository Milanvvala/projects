"use client"
import BackButton from "@/utils/BackButton"
import { useEffect, useRef, useState } from "react"

let interval: any

export default function Pomodoro() {
  let [breakLength, setBreakLength] = useState(5)
  let [sessionLength, setSessionLength] = useState(25)
  let [buttonText, setButtonText] = useState("START")
  const [isPaused, setIsPaused] = useState(true)
  const [mode, setMode] = useState("work")
  const [secondsLeft, setSecondsLeft] = useState(0)
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  if (typeof window !== "undefined") {
    var audio = new Audio(
      "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
    )
  }

  function tick() {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work"
      const nextSeconds =
        (nextMode === "work" ? sessionLength : breakLength) * 60

      setMode(nextMode)
      modeRef.current = nextMode
      audio.play()

      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }

    secondsLeftRef.current = sessionLength * 60
    setSecondsLeft(secondsLeftRef.current)

    interval = setInterval(() => {
      if (isPausedRef.current) {
        return
      }
      if (secondsLeftRef.current === 0) {
        return switchMode()
      }

      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [sessionLength, breakLength])

  const minutes = Math.floor(secondsLeft / 60)
  let seconds: any = secondsLeft % 60
  if (seconds < 10) seconds = "0" + seconds

  function resetCountdown() {
    clearInterval(interval)
    setButtonText("START")
    setIsPaused(true)
    setMode("work")
    setBreakLength(5)
    setSessionLength(25)
    setSecondsLeft(0)
  }

  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-screen items-center gap-8">
        <BackButton />
        <div className="flex justify-center gap-8">
          {/* Break */}
          <section id="break" className="text-center">
            <div id="break-label" className="text-xl font-semibold">
              Break Length
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <button
                className="button"
                id="break-increment"
                onClick={() => {
                  if (breakLength < 61) {
                    setBreakLength((breakLength += 1))
                  }
                }}
              >
                +
              </button>
              <div id="break-length">{breakLength}</div>
              <button
                className="button"
                id="break-decrement"
                onClick={() => {
                  if (breakLength > 1) {
                    setBreakLength((breakLength -= 1))
                  }
                }}
              >
                -
              </button>
            </div>
          </section>

          {/* Session */}
          <section id="session" className="text-center">
            <div id="session-label" className="text-xl font-semibold">
              Session Length
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <button
                className="button"
                id="session-increment"
                onClick={() => {
                  if (sessionLength < 61) {
                    setSessionLength((sessionLength += 1))
                  }
                }}
              >
                +
              </button>
              <div id="session-length">{sessionLength}</div>
              <button
                className="button"
                id="session-decrement"
                onClick={() => {
                  if (sessionLength > 1) {
                    setSessionLength((sessionLength -= 1))
                  }
                }}
              >
                -
              </button>
            </div>
          </section>
        </div>

        <section id="timer">
          <div id="timer-label" className="text-2xl font-light italic">
            Session
          </div>
          <div id="time-left" className="text-6xl font-bold ">
            {minutes + ":" + seconds}
          </div>
        </section>

        <section className="flex gap-4">
          <button
            className="button"
            id="start_stop"
            onClick={
              isPaused
                ? () => {
                    setIsPaused(false)
                    isPausedRef.current = false
                    setButtonText("PAUSE")
                  }
                : () => {
                    setIsPaused(true)
                    isPausedRef.current = true
                    setButtonText("PLAY")
                  }
            }
          >
            {buttonText}
          </button>
          <button
            className="button"
            id="reset"
            onClick={() => {
              resetCountdown()
            }}
          >
            &#8635; Reset
          </button>
        </section>

        <audio
          id="beep"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        ></audio>
      </main>
    </>
  )
}
