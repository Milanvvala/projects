import { Avatar, Badge, Flex, Separator, Text } from "@radix-ui/themes"
import Image from "next/image"

export default function Article() {
  const article = {
    title: "Blog Article Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.",
    author: "John Doe",
    date: "02/01/2021",
    tags: ["tech", "news"],
    image: "https://source.unsplash.com/random/300x300/?product"
  }

  return (
    <Flex direction="column" gap="6" m="4" p="4">
      <Image src={article.image} width={500} height={500} alt="alt" />

      <Flex direction="column" gap="2">
        <Flex gap="4" align="start">
          {article.tags.map((element) => {
            return (
              <Badge color="cyan" size="2">
                {element}
              </Badge>
            )
          })}
        </Flex>
        <Flex direction="column" gap="2">
          <Text size="8" weight="bold">
            {article.title}
          </Text>
          <Flex align="center" gap="4">
            <Avatar
              src="https://source.unsplash.com/random/300x300/?face,portrait"
              fallback="M"
              radius="full"
            />
            <Text size="3">{article.author}</Text>
            <Separator orientation="vertical" size="1" />
            <Text size="3">{article.date}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Text size="4" color="gray">
        {article.description}
      </Text>
    </Flex>
  )
}
