import { RocketIcon } from "@radix-ui/react-icons"
import { Badge, Button, Flex, Grid, Separator, Text } from "@radix-ui/themes"
import Image from "next/image"

export default function ProductDetail() {
  const product = {
    title: "Blog Article Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet.",
    tags: ["tech", "news"],
    image: "https://source.unsplash.com/random/300x300/?product",
    details: [
      { detail: "Between lugs", data: "20 mm" },
      { detail: "Bracelet", data: "leather strap" },
      { detail: "Case", data: "Steel" },
      { detail: "Case diameter", data: "42 mm" },
      { detail: "Dial color", data: "Black" },
      { detail: "Water resistance", data: "5 bar (50 metres / 167 feet) " },
      {
        detail: "Crystal",
        data: "Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside"
      }
    ],
    features: [
      "Chronograph",
      "Master Chronometer Certified",
      "Tachymeter",
      "Anti‑magnetic",
      "Chronometer",
      "Small seconds"
    ]
  }
  return (
    <Flex direction="column" gap="4" align="center" m="4" p="4">
      <Flex direction="column" gap="4">
        {/* Image */}
        <Image src={product.image} width={200} height={200} alt="alt" />

        {/* Head */}
        <Text size="8" weight="medium">
          {product.title}
        </Text>
        <Flex gap="4" align="start">
          {product.tags.map((element) => {
            return (
              <Badge color="cyan" size="2">
                {element}
              </Badge>
            )
          })}
        </Flex>
        <Text size="4" color="gray">
          {product.description}
        </Text>
        <Separator size="4" color="gray" />
        {/* Features and Details */}
        <Text color="jade" size="6" weight="medium">
          Features
        </Text>
        <Grid columns="2" gap="3">
          {product.features.map((feature) => {
            return <Text>{feature}</Text>
          })}
        </Grid>
        <Separator size="4" color="gray" />
        <Text color="jade" size="6" weight="medium">
          Details
        </Text>
        <Grid columns="2" gap="3">
          {product.details.map((detail) => {
            return (
              <Text weight="medium">
                {detail.detail} : <Text>{detail.data}</Text>
              </Text>
            )
          })}
        </Grid>
      </Flex>

      {/* Action Button */}
      <Flex width="100%" gap="4" direction="column" align="center">
        <Button radius="none" color="jade" size="4" variant="solid">
          ADD TO CART
        </Button>
        <Flex gap="4">
          <RocketIcon />
          <Text size="2" color="gray" weight="light">
            2-3 business days delivery
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
