import { CheckCircledIcon } from "@radix-ui/react-icons"
import { Flex, Grid, IconButton, Text } from "@radix-ui/themes"

export default function Simple() {
  const featuresObj = [
    {
      title: "Feture_1",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores"
    },
    {
      title: "Feture_2",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores"
    },
    {
      title: "Feture_3",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores"
    },
    {
      title: "Feture_4",
      Detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, maiores"
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
            <Flex gap="3" key={feature.title} px="8">
              <IconButton radius="full" size="4" variant="outline">
                <CheckCircledIcon color="lime" />
              </IconButton>
              <Flex direction="column" gap="2">
                <Text weight="medium" size="4">
                  {feature.title}
                </Text>
                <Text color="gray" size="3">
                  {feature.Detail}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Grid>
    </Flex>
  )
}
