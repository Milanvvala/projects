import { BookmarkIcon, HeartIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button, Card, Flex, IconButton, Text } from "@radix-ui/themes"

export default function ButtonTypes() {
  return (
    <Flex m="4" p="6">
      <Card size="3">
        <Flex direction="column" gap="6" align="start" justify="start" mb="8">
          <Text size="5" weight="medium">
            Simple Button Types
          </Text>

          <Flex gap="4" align="center">
            <Button color="violet" radius="none" variant="classic" size="4">
              <BookmarkIcon /> Button with icon
            </Button>
            <Button color="pink" radius="small" variant="solid" size="3">
              Button with icon <HeartIcon />
            </Button>
            <Button color="amber" radius="medium" variant="outline" size="2">
              Button Outline
            </Button>
            <Button color="gold" radius="large" variant="surface" size="1">
              SurfaceButton
            </Button>
            <Button color="crimson" radius="full" variant="soft" size="2">
              softButton
            </Button>
            <Button color="mint" variant="ghost" size="2">
              ghostButton
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column" gap="6" align="start" justify="start">
          <Text size="5" weight="medium">
            Icon Button Types
          </Text>

          <Flex gap="9" align="center">
            <IconButton color="indigo" radius="none" variant="classic" size="4">
              <RocketIcon />
            </IconButton>
            <IconButton color="ruby" radius="small" variant="solid" size="3">
              <RocketIcon />
            </IconButton>
            <IconButton color="sky" radius="medium" variant="outline" size="2">
              <RocketIcon />
            </IconButton>
            <IconButton color="grass" radius="large" variant="surface" size="1">
              <RocketIcon />
            </IconButton>
            <IconButton color="jade" radius="full" variant="soft">
              <RocketIcon />
            </IconButton>
            <IconButton color="teal" variant="ghost">
              <RocketIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
