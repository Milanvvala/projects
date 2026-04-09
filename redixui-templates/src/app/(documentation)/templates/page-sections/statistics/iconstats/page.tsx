import { ButtonIcon, PersonIcon, SewingPinIcon } from "@radix-ui/react-icons"
import { Card, Flex, Text } from "@radix-ui/themes"

export default function Dashboard() {
  const statsObj = [
    { statTitle: "Users", Stat: "5,000", Icon: <PersonIcon /> },
    { statTitle: "Servers", Stat: "1,000", Icon: <ButtonIcon /> },
    { statTitle: "Datacenters", Stat: "7", Icon: <SewingPinIcon /> }
  ]

  return (
    <Flex
      align="center"
      justify="center"
      gap="8"
      direction="column"
      m="4"
      p="6"
    >
      {/* Heading */}
      <Text size="8" weight="bold">
        What is our company doing?
      </Text>

      {/* Statistics */}
      <Flex align="center" gap="4">
        {statsObj.map((stat) => {
          return (
            <Card size="2" key={stat.statTitle} style={{ width: "300px" }}>
              <Flex justify="between">
                <Flex direction="column">
                  <Text size="2">{stat.statTitle}</Text>
                  <Text size="9" weight="medium" color="grass">
                    {stat.Stat}
                  </Text>
                </Flex>
                <Flex>{stat.Icon}</Flex>
              </Flex>
            </Card>
          )
        })}
      </Flex>
    </Flex>
  )
}
