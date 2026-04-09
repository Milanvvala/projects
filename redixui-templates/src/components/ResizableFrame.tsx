"use client"
import { useEffect, useRef, useState } from "react"
import { Resizable } from "re-resizable"
import { getExampleUrl } from "@/lib/getExampleUrl"
import { Category, SubCategory, Template } from "../lib/types"
import { Box, Flex } from "@radix-ui/themes"

type IframeProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

const MIN_HEIGHT = 222

export default function ResizableFrame(props: IframeProps) {
  const { template, category, subCategory } = props
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [exampleUrl, setExampleUrl] = useState("")

  useEffect(() => {
    if (!category || !subCategory || !template) {
      return
    }
    setExampleUrl(getExampleUrl(category, subCategory, template))
  }, [category, subCategory, template])

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight
    setHeight(frameHeight)
  }

  if (!exampleUrl) return null

  return (
      <Resizable
        bounds={"parent"}
        minWidth={375}
        minHeight={getHeight()}
        maxHeight={getHeight()}
      >
        <iframe
          loading={"lazy"}
          width={"100%"}
          height={getHeight()}
          src={exampleUrl}
          onLoad={syncHeight}
          ref={ref}
          title="#"
        />
      </Resizable>
  )
}
