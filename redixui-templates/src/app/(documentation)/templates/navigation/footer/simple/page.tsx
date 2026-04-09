import { Flex, Link, Text } from "@radix-ui/themes"

export default function Simple() {
  return (
    <Flex justify="between" m="4" align="center">
      <Flex justify="between" gap="5" align="center" pr="4">
        <Link href="example.com">Home</Link>
        <Link href="example.com">About</Link>
        <Link href="example.com">Blog</Link>
        <Link href="example.com">Contact</Link>
      </Flex>
      <Text size="3">© 2022 Redix Themes Templates. All rights reserved</Text>
    </Flex>
  )
}
