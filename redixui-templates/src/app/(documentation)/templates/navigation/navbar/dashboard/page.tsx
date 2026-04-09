import { MoonIcon, PlusIcon, SunIcon } from "@radix-ui/react-icons"
import { Logo } from "@/components"
import { Avatar, Button, Flex, IconButton, Link } from "@radix-ui/themes"

export default function Dashboard() {
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
        <Button>
          <PlusIcon /> Action
        </Button>
        <IconButton variant="outline" radius="full">
          <Avatar
            src="https://source.unsplash.com/random/?portrait,face"
            fallback="M"
            radius="full"
          />
        </IconButton>
        <IconButton variant="ghost">
          <SunIcon />
        </IconButton>
      </Flex>
    </Flex>
  )
}
