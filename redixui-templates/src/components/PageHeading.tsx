"use client"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Flex, Heading, Link, Text } from "@radix-ui/themes"

interface Props {
  name?: string
  description?: string
}

export default function PageHeading(props: Props) {
  const { name, description } = props

  return (
    <Flex pt="2" m="4" gap="2" direction="column">
      <Link href="/">
        <Flex align="center" gap="2">
          <ArrowLeftIcon />
          <Text>Back to all categories</Text>
        </Flex>
      </Link>

      <Heading as="h1" size="8">
        {name}
      </Heading>
      {description ? <Text color="gray">{description}</Text> : null}
    </Flex>
  )
}
