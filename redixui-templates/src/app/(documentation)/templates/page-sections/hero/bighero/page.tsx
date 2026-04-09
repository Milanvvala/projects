import { Button, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"
import { placeholderImg } from "@/assets"

export default function BigHero() {
  return (
    <Flex
      direction="column"
      gap="8"
      justify="center"
      align="center"
      p="6"
      m="4"
      width="auto"
    >
      <Text size="9" weight="bold" align="center">
        Meeting scheduling
        <Text color="iris" size="9" weight="bold">
          made easy
        </Text>
      </Text>
      <Text color="gray" size="4" align="center" mx="9">
        Never miss a meeting. Never be late for one too. Keep track of your
        meetings and receive smart reminders in appropriate times. Read your
        smart “Daily Agenda” every morning.
      </Text>
      <Flex gap="3">
        <Button variant="solid" radius="full" color="iris" size="4">
          Get Started
        </Button>
        <Button color="gray" variant="soft" radius="full" size="4">
          Learn More
        </Button>
      </Flex>
      <Image src={placeholderImg} width={600} height={400} alt="alt" />
    </Flex>
  )
}

/**
 const Links = ["Dashboard", "Projects", "Team"]
 const { isOpen, onOpen, onClose } = useDisclosure()
      <Box width={'max-content'}>
      <Flex height="4" align="center" justify="between">
      <Box display={{ md: "none" }}>
            <IconButton
              size="3"
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            >
              {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </IconButton>
          </Box>
          <Flex gap="2" align={"center"}>
            <Box>Logo</Box>
            <Flex gap="2">
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Flex>
          </Flex>
          <Flex align={"center"}>
            <Flex>
              <Avatar fallback={<AvatarIcon />} />
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb="4" display={{ md: "none" }}>
            <Flex gap="1">
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
 */
