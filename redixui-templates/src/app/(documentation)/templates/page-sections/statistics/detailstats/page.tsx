import { Flex, Text } from "@radix-ui/themes"

export default function Dashboard() {
  return (
    <Flex align="start" justify="center" gap="9" p="8">
      <Text size="8" weight="bold">
        Medium Length Title
      </Text>

      <Flex align="center" gap="8" justify="center">
        <Flex
          gap="3"
          direction="column"
          justify="start"
          style={{ width: "200px" }}
        >
          <Text size="8" weight="bold">
            96%
          </Text>
          <Text size="3">
            Description for the number. People always pay attention to numbers.
          </Text>
        </Flex>
        <Flex
          gap="3"
          direction="column"
          justify="start"
          style={{ width: "200px" }}
        >
          <Text size="8" weight="bold">
            69%
          </Text>
          <Text size="3">
            Description for the number. People always pay attention to numbers.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
