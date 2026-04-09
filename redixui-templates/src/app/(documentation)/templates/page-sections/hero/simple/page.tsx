import { Button, Flex, Link, Text } from "@radix-ui/themes"

export default function Simple() {
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
        Make Money From <br />
        <Text color="green" size="9" weight="bold">
          Your Audience
        </Text>
      </Text>
      <Text color="gray" size="4" align="center">
        Monetize your content by charging your most loyal readers and reward
        them loyalty points. Give back to your loyal readers by granting them
        access to your pre-releases and sneak-peaks.
      </Text>
      <Flex direction="column" gap="3" align="center">
        <Button variant="solid" radius="full" color="green" size="4">
          Get Started
        </Button>
        <Link color="blue" size="4">
          Learn More
        </Link>
      </Flex>
    </Flex>
  )
}
