import { Card, Flex, Text } from "@radix-ui/themes"

export default function Dashboard() {
  const statsObj = [
    { subText: "We serve", Stat: "50,000 people" },
    { subText: "In", Stat: "30 different countries" },
    { subText: "Who speak", Stat: "100 different languages" }
  ]
  return (
    <Flex
      align="center"
      justify="center"
      gap="8"
      m="4"
      p="6"
      direction="column"
    >
      {/* Heading */}
      <Text size="8" weight="bold">
        What is our company doing?
      </Text>

      {/* Statistics */}
      <Flex align="center" gap="8" justify="center">
        {statsObj.map((stat) => {
          return (
            <Card
              size="2"
              key={stat.Stat}
              style={{ width: "33%", height: "150px" }}
            >
              <Flex align="start" direction="column" gap="1">
                <Text size="2">{stat.subText}</Text>
                <Text size="8" weight="medium">
                  {stat.Stat}
                </Text>
              </Flex>
            </Card>
          )
        })}
      </Flex>
    </Flex>
  )
}
