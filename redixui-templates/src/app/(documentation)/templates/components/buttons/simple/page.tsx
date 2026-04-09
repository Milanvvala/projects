import {
  ChatBubbleIcon,
  DotsVerticalIcon,
  MoonIcon
} from "@radix-ui/react-icons"
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  Flex,
  IconButton,
  Popover,
  Text,
  TextArea
} from "@radix-ui/themes"

export default function Simple() {
  return (
    <Flex gap="8" m="6" width="100%" align="center" justify="center">
      {/* Button_1 : Theme Swicher */}
      <Card size={"4"}>
        <Flex height="100%" justify="center" align="center">
          <IconButton
            aria-label="Toggle Color Mode"
            variant="solid"
            radius="full"
            size="4"
            // onClick={toggleColorMode} w="fit-content"
          >
            {/* {colorMode === "light" ? <MoonIcon /> : <SunIcon />} */}
            <MoonIcon />
          </IconButton>
        </Flex>
      </Card>

      {/* Button_2 : Dropdown */}
      <Card size={"4"} mt="2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Options
              <DotsVerticalIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Share</DropdownMenu.Item>
            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Card>

      {/* Button_1 : PopeOver */}
      <Card mt="2" size="4">
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="soft">
              <ChatBubbleIcon width="16" height="16" />
              Comment
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 360 }}>
            <Flex gap="3">
              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                fallback="A"
                radius="full"
              />
              <Box grow="1">
                <TextArea
                  placeholder="Write a comment…"
                  style={{ height: 80 }}
                />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <label>
                      <Checkbox />
                      <Text size="2">Send to group</Text>
                    </label>
                  </Flex>

                  <Popover.Close>
                    <Button size="1">Comment</Button>
                  </Popover.Close>
                </Flex>
              </Box>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Card>
    </Flex>
  )
}
