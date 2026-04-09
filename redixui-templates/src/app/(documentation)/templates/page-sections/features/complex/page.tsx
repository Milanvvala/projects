import {
  AvatarIcon,
  LightningBoltIcon,
  MixIcon,
  RocketIcon
} from "@radix-ui/react-icons"
import { Card, Flex, Grid, IconButton, Link, Text } from "@radix-ui/themes"

export default function Complex() {
  const featuresObj = [
    {
      Icon: <AvatarIcon />,
      Title: "Feture_1",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores",
      Link: "example.com"
    },
    {
      Icon: <MixIcon />,
      Title: "Feture_2",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores",
      Link: "example.com"
    },
    {
      Icon: <RocketIcon />,
      Title: "Feture_3",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores",
      Link: "example.com"
    },
    {
      Icon: <LightningBoltIcon />,
      Title: "Feture_4",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores",
      Link: "example.com"
    }
  ]

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="8"
      p="6"
      m="4"
    >
      {/* Heading */}
      <Flex direction="column" align="center" justify="center" gap="6">
        <Text size="8" weight="bold">
          This is the headline
        </Text>
        <Flex align="center" px="9" mx="9">
          <Text size="5" color="gray" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            necessitatibus assumenda in similique dolore eos corporis Fuga
            maiores est laudantium!
          </Text>
        </Flex>
      </Flex>

      {/* Features */}
      <Grid columns="2" gap="8">
        {featuresObj.map((feature) => {
          return (
            <Card key={feature.Title} size="2" style={{ maxWidth: "500px" }}>
              <Flex direction="column" gap="2">
                <IconButton size="3" radius="full">
                  {feature.Icon}
                </IconButton>
                <Text size="5" weight="medium">
                  {feature.Title}
                </Text>
                <Text size="3" color="gray">
                  {feature.Detail}
                </Text>
                <Link href={feature.Link} color="blue">
                  Learn More
                </Link>
              </Flex>
            </Card>
          )
        })}
      </Grid>
    </Flex>
  )
}
