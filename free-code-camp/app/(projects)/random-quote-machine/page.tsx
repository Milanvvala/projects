"use client"
import BackButton from "@/utils/BackButton"
import { useEffect, useState } from "react"

function RandomQuoteMachine() {
  const [quote, setQuote] = useState({ text: "", author: "" })

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random")
      if (!response.ok) {
        throw new Error("Failed to fetch quote")
      }
      const data = await response.json()
      setQuote({
        text: data[0].content,
        author: data[0].author
      })
      console.log(data, quote)
    } catch (error) {
      console.error("Error fetching quote:", error)
    }
  }

  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-screen items-center gap-4">
        <BackButton />
        <div
          className="border border-white p-8 rounded-lg border-2 w-[60%] flex flex-col justify-center iterms-center gap-4 text-center"
          id="quote-box"
        >
          <p className=" text-2xl font-semibold" id="text">
            <span className="text-5xl">&#10077; </span> {quote.text}
          </p>
          <p id="author" className="text-right text-xl italic font-light">
            ― {quote.author}
          </p>

          <div className="flex justify-between align-center items-center">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <img
                height="32"
                width="32"
                src="https://cdn.simpleicons.org/twitter/_/eee"
              />
            </a>
            <button
              className="button h-12"
              id="new-quote"
              onClick={fetchRandomQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
export default RandomQuoteMachine
