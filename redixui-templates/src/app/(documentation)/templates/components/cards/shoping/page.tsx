import { PlusIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons"
import { Badge, Box, Card, Flex, Inset, Text } from "@radix-ui/themes"
import Image from "next/image"

export default function Shoping() {
  const img = "https://source.unsplash.com/random/300x300/?product"

  return (
    <Flex gap="4" p="6">
      {/* Card_1 */}
      <Box width="max-content">
        <Card>
          <Flex gap="4" direction="column" align="center">
            <Image
              style={{ borderRadius: "5px" }}
              src={img}
              width={200}
              height={200}
              alt="image"
            />
            <Flex direction="column" gap="1" align="center">
              <Text size="2" color="gray">
                BRAND
              </Text>
              <Text size="5" weight="bold">
                Nice Chair , Pink
              </Text>
              <Flex gap="2" align="center">
                <Text size="4" highContrast weight="medium">
                  $96
                </Text>
                <Text size="2" color="gray">
                  <del>$249</del>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>

      {/* Card_2 */}
      <Card style={{ padding: "0" }}>
        <Inset side="top" mb="2">
          <Image src={img} width={300} height={300} alt="alt" />
        </Inset>

        <Flex justify="between" align="end">
          <Flex direction="column" gap="2">
            <Badge color="red" radius="full">
              NEW
            </Badge>

            <Text size="5">Wayfarer Classic</Text>

            <Flex>
              <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />
              <StarFilledIcon /> <StarIcon />
            </Flex>

            <Text color="gray" size="2">
              34 riviews
            </Text>
          </Flex>

          <Flex direction="column" gap="2">
            <PlusIcon />
            <Text>$9.8</Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
