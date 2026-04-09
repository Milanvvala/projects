import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons"
import {
  Box,
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  Text
} from "@radix-ui/themes"

export default function Dashboard() {
  return (
    <Flex>
      <Box m="6" width="max-content">
        <Card size={"4"}>
          <Flex gap="2" align={"center"} width={"100%"}>
            <Button variant="outline" color="gray" highContrast>
              <GitHubLogoIcon />
              <Text>Continue with Github</Text>
            </Button>
            <Button color="crimson">
              <InstagramLogoIcon />
              <Text>Sign in with Instagram</Text>
            </Button>
            <Button color="indigo">
              <LinkedInLogoIcon />
              <Text>Send to Linkedin</Text>
            </Button>
            <Button color="blue">
              <TwitterLogoIcon /> <Text>Send to Twitter</Text>
            </Button>
          </Flex>
        </Card>
        <Card mt="2" size="4">
          <Flex direction="column" gap="3">
            <Callout.Root color="blue" variant="soft">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>Info Callout Blue Soft</Callout.Text>
            </Callout.Root>

            <Callout.Root color="green" variant="outline">
              <Callout.Icon>
                <CheckCircledIcon />
              </Callout.Icon>
              <Callout.Text>Success Callout Green Outline</Callout.Text>
            </Callout.Root>

            <Callout.Root color="yellow" variant="surface">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>Warning Callout Yellow Surface</Callout.Text>
            </Callout.Root>

            <Callout.Root color="red" role="alert">
              <Callout.Icon>
                <CrossCircledIcon />
              </Callout.Icon>
              <Callout.Text>Error Callout Red role="alert"</Callout.Text>
            </Callout.Root>
          </Flex>
        </Card>

        <Card size="4" mt="4">
          <Flex align="center" py="3" px="2" direction="column">
            <Heading as="h2" size="9" color="crimson">
              404
            </Heading>
            <Text size="4" mt="1" mb="2">
              Page Not Found
            </Text>
            <Text color="gray" mb="2">
              The page you&apos;re looking for does not seem to exist
            </Text>

            <Button color="cyan" variant="solid">
              Go to Home
            </Button>
          </Flex>
        </Card>
      </Box>
    </Flex>
  )
}
