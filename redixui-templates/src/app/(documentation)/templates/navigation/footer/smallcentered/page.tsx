import { Logo } from "@/components"
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons"
import { Flex, IconButton, Link, Separator, Text } from "@radix-ui/themes"

export default function SmallCentered() {
  return (
    <Flex direction="column" mr="8" my="4" p="4" gap="3">
      <Flex direction="column" gap="4" align="center">
        <Logo />
        <Flex gap="6">
          <Link href="example.com">Home</Link>
          <Link href="example.com">About</Link>
          <Link href="example.com">Blog</Link>
          <Link href="example.com">Contact</Link>
        </Flex>
      </Flex>

      <Separator size="4" />

      <Flex justify="between" align="center" px="4">
        <Text size="2">
          © 2022 Redix Themes Templates. All rights reserved
        </Text>
        <Flex gap="5">
          <IconButton variant="soft" radius="full">
            <InstagramLogoIcon />
          </IconButton>
          <IconButton variant="soft" radius="full">
            <LinkedInLogoIcon />
          </IconButton>
          <IconButton variant="soft" radius="full">
            <GitHubLogoIcon />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  )
}
