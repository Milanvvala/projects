"use client"
import { Header, Footer } from "@/components"
import { Container, Flex, Separator } from "@radix-ui/themes"

interface Props {
  children: React.ReactNode
}

export default function DocumentationLayout(props: Props) {
  const { children } = props
  return (
    <Container>
      <Header />
      <Separator orientation="horizontal" size="4" />
      <Flex
        direction={{ initial: "column", lg: "row" }}
        gap={{ initial: "0", lg: "2" }}
      >
        <Flex direction="column" width="100%">
          {children}
        </Flex>
      </Flex>
      <Separator orientation="horizontal" size="4" />
      <Footer />
    </Container>
  )
}
