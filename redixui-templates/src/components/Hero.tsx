"use client"
import { Button, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes"
import {
  CheckIcon,
  ExternalLinkIcon,
  GitHubLogoIcon
} from "@radix-ui/react-icons"

export default function Hero() {
  const FeaturesCol1 = [
    "Responsive Demos",
    "Easy Customizable",
    "Written in TypeScript",
    "100% Open Source",
    "10 Templates",
    "5 Categories"
  ]

  return (
    <Flex
      mx="5"
      my={{ initial: "4", md: "8" }}
      py="4"
      direction="column"
      gap={{ initial: "4", lg: "9" }}
    >
      <Heading
        size={{ initial: "8", lg: "9" }}
        weight={{ initial: "medium", lg: "bold" }}
      >
        10 responsive components
        <br />
        built with Mantine
      </Heading>

      <Text size={{ initial: "3", lg: "4" }} weight="light" color="gray">
        Build your next website even faster with premade responsive components
        designed and built with Redix Themes All components are free forever for
        everyone.
      </Text>

      <Grid columns={{ initial: "1", lg: "3" }} gap={{ initial: "1", lg: "4" }}>
        {FeaturesCol1.map((feature, index) => {
          return (
            <Flex key={index} align="center" gap="2">
              <CheckIcon color="lime" />
              <Text weight="bold" color="gray">
                {feature}
              </Text>
            </Flex>
          )
        })}
      </Grid>

      <Flex
        gap={{ initial: "3", lg: "8" }}
        direction={{ initial: "column", lg: "row" }}
        align={{ initial: "center", lg: "start" }}
      >
        <Link href="#templates">
          <Button color="iris" size="4">
            Browse Templates
          </Button>
        </Link>
        <Button variant="soft" size="4">
          <GitHubLogoIcon />
          GitHub
        </Button>
        <Link href="https://www.radix-ui.com/">
          <Button variant="soft" size="4">
            Get Started with RedixUI <ExternalLinkIcon />
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
