"use client"
import { useState } from "react"
import { drumAudios } from "@/utils/data"
import BackButton from "@/utils/BackButton"

function DrumMachine() {
  const [tag, setTag] = useState("Click on any Key")

  const playSound = (audioSrc: any) => {
    const audio = new Audio(audioSrc)
    audio.play()
  }

  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-screen items-center gap-4">
        <BackButton />
        <div
          className="border border-white p-8 rounded-lg border-2 w-[60%] flex flex-col justify-center iterms-center gap-4 text-center"
          id="drum-machine"
        >
          <p className=" text-4xl font-semibold" id="text">
            Drum Machine
          </p>

          <div className="button">{tag}</div>
          <div className="grid grid-cols-3 gap-2" id="display">
            {drumAudios.map((e) => {
              return (
                <div
                  className="drum-pad h-12 w-full bg-blue-600 button"
                  key={e.key}
                  id={e.key}
                  onClick={() => {playSound(e.audio);setTag(e.tag)}}
                >{e.key}</div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
export default DrumMachine
