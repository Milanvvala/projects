import { Button, Card, Flex, Link, Text, TextField } from "@radix-ui/themes"

export default function AuthenticationForm() {
  return (
    <Flex direction="column" gap="6" align="center" m="8" p="8">
      <Flex direction="column" align="center" gap="3">
        <Text size="8" weight="bold">
          Sign up
        </Text>
        <Text size="4" color="gray">
          to enjoy all of our cool features
        </Text>
      </Flex>

      <Card size="4">
        <Flex direction="column" align="center" gap="4">
          <Flex gap="4" direction="column">
            <Flex gap="6">
              <Flex gap="1" direction="column">
                <Text size="4" weight="medium">
                  First Name
                  <Text size="1" color="red">
                    *
                  </Text>
                </Text>
                <TextField.Input />
              </Flex>

              <Flex gap="1" direction="column">
                <Text size="4" weight="medium">
                  Last Name
                </Text>
                <TextField.Input />
              </Flex>
            </Flex>

            <Flex gap="1" direction="column">
              <Text size="4" weight="medium">
                Email Address
                <Text size="1" color="red">
                  *
                </Text>
              </Text>
              <TextField.Input />
            </Flex>

            <Flex gap="1" direction="column">
              <Text size="4" weight="medium">
                Password
                <Text size="1" color="red">
                  *
                </Text>
              </Text>
              <TextField.Input />
            </Flex>
          </Flex>

          <Button color="blue" variant="solid" size="4">
            Sign Up
          </Button>

          <Text weight="light" size="2">
            Already a user? <Link color="blue">Login</Link>
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
