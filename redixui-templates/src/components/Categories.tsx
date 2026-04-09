"use client"
import { Card, Flex, Grid, Inset, Link, Text } from "@radix-ui/themes"
import Image from "next/image"
import { data } from "../lib"
import { usePathname } from "next/navigation"

interface Props {
  href: string
  children: React.ReactNode
  pathname: string
}
interface StackProps {}

const NavigationLink = (props: Props) => {
  const { href, children } = props
  return (
    <Link href={href} color="gray">
      {children}
    </Link>
  )
}

export default function Categories(props: StackProps) {
  const cards: String[] = ["Navbar", "Footer", "Hero", "Fetures", "Blog"]
  const pathname = usePathname()

  return (
    <Flex my="8" direction="column" gap="6" align="center" id='templates' >
      <Text size="8" weight="bold">
        Templates
      </Text>

      {/* Template Grid */}
      <Flex
        grow="1"
        shrink="0"
        {...props}
        direction="column"
        align="center"
        gap="6"
      >
        {data.map((category) => {
          return (
            <Flex key={category.id} gap="4" direction="column">
              <Text size="5" weight="medium" color="iris">
                {category.name}
              </Text>
              <Grid gap="4" columns={{ initial: "1", lg: "3" }} >
                {category.children?.map((subCategory) => (
                  <NavigationLink
                    pathname={pathname}
                    key={subCategory.id}
                    href={`/${category.id}/${subCategory.id}`}
                  >
                    <Card>
                      <Inset side="top" mb="1">
                        <Image src={subCategory.image} alt="img" height={200} />
                      </Inset>
                      <Text size="5" weight="medium" mx="1">
                        {subCategory.name}
                      </Text>
                    </Card>
                  </NavigationLink>
                ))}
              </Grid>
            </Flex>
          )
        })}
        {/* </Grid> */}
      </Flex>
    </Flex>
  )
}
