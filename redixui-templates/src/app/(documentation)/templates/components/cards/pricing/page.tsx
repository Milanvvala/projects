import { CheckIcon } from "@radix-ui/react-icons"
import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes"

export default function Priceing() {
  return (
    <Box m="4" width="max-content" p="6">
      <Card size={"3"}>
        <Flex gap="5" direction="column" width="max-content">
          <Flex gap="4" direction="column" align={"center"}>
            <Badge color="green">Hobby</Badge>
            <Flex gap="2" align="center">
              <Text size="5">$</Text>
              <Text size="8" weight={"bold"}>
                79
              </Text>
              <Text size="3" color="gray">
                /month
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap="2">
            <Flex align="center" gap="1">
              <CheckIcon color="lime" />
              <Text>5,000 page views</Text>
            </Flex>
            <Flex align="center" gap="1">
              <CheckIcon color="lime" />
              <Text>50 automation execution</Text>
            </Flex>
            <Flex align="center" gap="1">
              <CheckIcon color="lime" />
              <Text>50 identified users</Text>
            </Flex>
            <Flex align="center" gap="1">
              <CheckIcon color="lime" />
              <Text>All features</Text>
            </Flex>
          </Flex>
          <Button variant="solid" color="green">
            Start your trial
          </Button>
        </Flex>
      </Card>
    </Box>
  )
}
