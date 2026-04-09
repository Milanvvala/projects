import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import { Logo } from "@/components"
import { Flex, IconButton, Link } from "@radix-ui/themes"

export default function Simple() {
  // const colorMode = "light"
  return (
    <Flex justify="between" p="4" align="center">
      {/* logo */}
      <Flex pl="4">
        <Logo />
      </Flex>

      {/* menu */}
      <Flex
        justify="between"
        gap="5"
        align="center"
        pr="4"
        display={{ initial: "none", xs: "flex" }}
      >
        <Link href="/about" highContrast>
          Projects
        </Link>
        <Link href="/about">About</Link>
        <Link href="/templates">Contact</Link>
        <IconButton variant="ghost">
          <LinkedInLogoIcon />
        </IconButton>
        <IconButton variant="ghost">
          <GitHubLogoIcon />
        </IconButton>
        <IconButton variant="ghost">
          <SunIcon />
        </IconButton>
      </Flex>

      <Flex display={{ initial: "flex", xs: "none" }} align="center" mr="4">
        <IconButton variant="outline">
          <SunIcon />
        </IconButton>
      </Flex>
    </Flex>
  )
}
