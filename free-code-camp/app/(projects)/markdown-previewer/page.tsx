"use client"
import BackButton from "@/utils/BackButton"
import { demoMd } from "@/utils/data"
import { useState } from "react"
import rehypeHighlight from "rehype-highlight"
import Markdown from "react-markdown"

function MarkdownPreviewer() {

  
  const [md, setMd] = useState(demoMd)

  return (
    <>
      <main className="w-full flex-col bg-black text-white p-8">
        <BackButton />
        <section id="" className="h-auto">
          <div className="text-xl font-semibold bg-gray-500 rounded mb-1 pl-2">
            &#9998; Editor
          </div>

          <textarea
            className="w-full text-white bg-black p-4 border h-full rounded border-white"
            name="editor"
            id="editor"
            cols={30}
            value={md}
            onChange={(e) => setMd(e.target.value)}
            rows={10}
          ></textarea>
        </section>
        <section id="preview" className="h-max mt-8">
          <div className="text-xl font-semibold bg-gray-500 rounded mb-1 pl-2">
            &#77; &#8681; Preview
          </div>

          <div className=" p-4 border rounded border-white">
            <Markdown
              className="prose prose-slate dark:prose-invert "
              rehypePlugins={[rehypeHighlight]}
            >
              {md}
            </Markdown>
          </div>
        </section>
      </main>
    </>
  )
}
export default MarkdownPreviewer
