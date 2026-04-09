import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
  PersonIcon,
  SewingPinFilledIcon
} from "@radix-ui/react-icons"
import {
  Button,
  Card,
  Flex,
  IconButton,
  Separator,
  Text,
  TextArea,
  TextField
} from "@radix-ui/themes"

export default function ContactForm() {
  return (
    <Card m="8" size="4">
      <Flex gap="4" align="start">
        {/* Left Sidw */}
        <Flex direction="column" gap="8" align="center" justify="center">
          <Flex direction="column" align="start" gap="2">
            <Text size="8" weight="bold">
              Contact
            </Text>
            <Text size="3" color="gray">
              Fill up the form below to contact
            </Text>
          </Flex>

          <Flex direction="column" gap="4" align="center">
            <Flex gap="2" align="center">
              <PersonIcon />
              <Text weight="medium">+91-9812345678</Text>
            </Flex>
            <Flex gap="2" align="center">
              <EnvelopeClosedIcon />
              <Text weight="medium">hello@xyz.com</Text>
            </Flex>
            <Flex gap="2" align="center">
              <SewingPinFilledIcon />
              <Text weight="medium">Mumbai, India</Text>
            </Flex>
          </Flex>

          <Flex gap="8" align="center" justify="center" width="100%">
            <IconButton variant="ghost" color="gray">
              <LinkedInLogoIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray">
              <GitHubLogoIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray">
              <InstagramLogoIcon />
            </IconButton>
          </Flex>
        </Flex>

        <Separator size="4" orientation="vertical" color="gray" />

        {/* Right Side */}
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Your Name
            </Text>
            <TextField.Root>
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="enter your name" />
            </TextField.Root>
          </Flex>

          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Email
            </Text>
            <TextField.Root>
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="enter your email" />
            </TextField.Root>
          </Flex>
          <Flex direction="column" gap="2" align="start">
            <Text size="5" weight="medium">
              Message
            </Text>
            <TextArea placeholder="message" />
          </Flex>
          <Button color="blue" variant="solid">
            Send Message <PaperPlaneIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}
