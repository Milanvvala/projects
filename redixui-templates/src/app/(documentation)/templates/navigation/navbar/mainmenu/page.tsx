import {
  CaretDownIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import { Logo } from "@/components"
import { Button, DropdownMenu, Flex, IconButton, Link } from "@radix-ui/themes"

export default function MainMenu() {
  // const colorMode = "light"

  return (
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost" size="3">
              Menu
              <CaretDownIcon width="16" height="16" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content size="2">
            <DropdownMenu.Item>Products</DropdownMenu.Item>
            <DropdownMenu.Item>FAQ</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Blog</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item color="sky">Newslatter</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Link href="/about">Pricing</Link>
        <Link href="/templates">Download</Link>
      </Flex>

      <Flex
        justify="between"
        gap="5"
        align="center"
        pr="4"
        display={{ initial: "none", xs: "flex" }}
      >
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

      {/* <Flex display={{ initial: "flex", xs: "none" }} align="center" mr="4">
        <IconButton variant="outline">
          <SunIcon />
        </IconButton>
      </Flex> */}
    </Flex>
  )
}
