import { Button, Card, Flex, Text, TextField } from "@radix-ui/themes"

export default function Newsletter() {
  return (
    <Flex p="8" m="8">
      <Card size="4">
        <Flex gap="4" align="center" direction="column">
          <Text size="6" weight="bold">
            Subscribe to our Newsletter
          </Text>
          <Flex gap="2">
            <TextField.Input placeholder="enter your email" />
            <Button color="blue" variant="solid">
              Submit
            </Button>
          </Flex>
          <Text size="3" color="gray">
            You won't receive any spam!
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
