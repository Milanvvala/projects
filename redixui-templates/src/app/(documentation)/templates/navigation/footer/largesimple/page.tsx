import { Logo } from "@/components"
import { Flex, Link, Text } from "@radix-ui/themes"

export default function Large() {
  const largeMenu = [
    {
      listTitle: "Product",
      items: [
        { linkTitle: "Overview", link: "example.com" },
        { linkTitle: "Features", link: "example.com" },
        { linkTitle: "Tutorials", link: "example.com" },
        { linkTitle: "Pricing", link: "example.com" },
        { linkTitle: "Releases", link: "example.com" }
      ]
    },
    {
      listTitle: "Support",
      items: [
        { linkTitle: "Help Center", link: "example.com" },
        { linkTitle: "Terms of Service", link: "example.com" },
        { linkTitle: "Legal", link: "example.com" },
        { linkTitle: "Privacy Policy", link: "example.com" },
        { linkTitle: "Status", link: "example.com" }
      ]
    },
    {
      listTitle: "Company",
      items: [
        { linkTitle: "About", link: "example.com" },
        { linkTitle: "Press", link: "example.com" },
        { linkTitle: "Careers", link: "example.com" },
        { linkTitle: "Contact", link: "example.com" },
        { linkTitle: "Partners", link: "example.com" }
      ]
    },
    {
      listTitle: "Follow Us",
      items: [
        { linkTitle: "Facebook", link: "example.com" },
        { linkTitle: "Twitter", link: "example.com" },
        { linkTitle: "Dribbble", link: "example.com" },
        { linkTitle: "Instagram", link: "example.com" },
        { linkTitle: "LinkedIn", link: "example.com" }
      ]
    }
  ]

  return (
    <Flex justify="between" my="4" mx="8" align="center" p="4">
      <Flex pl="4" direction="column" gap="4">
        <Logo />
        <Text size="3">
          © 2022 Redix Themes Templates. All rights reserved
        </Text>
      </Flex>

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
  )
}
