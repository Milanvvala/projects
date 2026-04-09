"use client"
import { Flex } from "@radix-ui/themes"
import { Example } from "@/components"
import type { Template } from "@/lib/types"

interface Props {
  templates?: Template[]
  category: any
  subCategory: any
}

export default function CodeExamples(props: Props) {
  const { templates, category, subCategory } = props
  return (
    <Flex direction="column">
      {templates?.map((t) => (
        <Example
          key={t.filename}
          template={t}
          category={category}
          subCategory={subCategory}
        />
      ))}
    </Flex>
  )
}
