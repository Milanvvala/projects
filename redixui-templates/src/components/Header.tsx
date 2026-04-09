"use client"
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Logo } from "@/components"
import { Flex, IconButton, Link } from "@radix-ui/themes"

export default function Header() {
  // const colorMode = "light"
  return (
    <header>
      <Flex justify="between" m="4" align="center">
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
          <Link href="#templates" highContrast>
            Templates
          </Link>
          <Link href="https://www.radix-ui.com/">Docs</Link>
          <IconButton variant="ghost">
            <Link href="https://www.github.com">
              <GitHubLogoIcon />
            </Link>
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
    </header>
  )
}
