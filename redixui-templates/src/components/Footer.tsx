import { Flex, Text } from "@radix-ui/themes"

export default function Footer() {
  return (
    <Flex p="4" gap="3" direction="column">
      <Text size="6" weight="medium">
        Thanks for visiting.
      </Text>
      <Text size="2">© 2022 Redix Themes Templates. All rights reserved</Text>
    </Flex>
  )
}
