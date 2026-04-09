import { Logo } from "@/components"
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons"
import { Flex, IconButton, Link, Text, TextField } from "@radix-ui/themes"

export default function Large() {
  const largeMenu = [
    {
      listTitle: "Support",
      items: [
        { linkTitle: "Help Center", link: "example.com" },
        { linkTitle: "Terms of Service", link: "example.com" },
        { linkTitle: "Privacy Policy", link: "example.com" }
      ]
    },
    {
      listTitle: "Company",
      items: [
        { linkTitle: "About", link: "example.com" },
        { linkTitle: "Careers", link: "example.com" },
        { linkTitle: "Contact", link: "example.com" }
      ]
    }
  ]

  return (
    <Flex justify="between" my="4" mx="8" align="start" p="4">
      <Flex pl="4" direction="column" gap="4">
        <Logo />
        <Text size="3">
          © 2022 Redix Themes Templates. All rights reserved
        </Text>
        <Flex
          justify="between"
          gap="5"
          align="center"
          pr="4"
          width="max-content"
        >
          <IconButton variant="soft">
            <TwitterLogoIcon />
          </IconButton>
          <IconButton variant="soft">
            <LinkedInLogoIcon />
          </IconButton>
          <IconButton variant="soft">
            <InstagramLogoIcon />
          </IconButton>
        </Flex>
      </Flex>

      <Flex gap="8">
        {largeMenu.map((obj) => {
          return (
            <Flex direction="column" gap="2" key={obj.listTitle} align="start">
              <Text size="4" weight="medium">
                {obj.listTitle}
              </Text>
              {obj.items.map((item) => {
                return (
                  <Link href={item.link} key={item.linkTitle} color="indigo">
                    {item.linkTitle}
                  </Link>
                )
              })}
            </Flex>
          )
        })}
      </Flex>

      <Flex direction="column" gap="4" pr="4">
        <Text size="4" weight="medium">
          Stay Up to Date
        </Text>
        <Flex gap="4">
          <TextField.Input placeholder="Enter your email" />
          <IconButton variant="soft">
            <EnvelopeClosedIcon />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  )
}
