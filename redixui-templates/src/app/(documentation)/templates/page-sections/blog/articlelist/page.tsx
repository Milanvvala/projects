import {
  Avatar,
  Badge,
  Card,
  Flex,
  Heading,
  Separator,
  Text
} from "@radix-ui/themes"
import Image from "next/image"

export default function ArticleList() {
  const articleListObj = [
    {
      title: "Blog Article Title 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "John Doe",
      date: "02/01/2021",
      tags: ["tech", "news"],
      image: "https://source.unsplash.com/random/300x300/?product"
    },
    {
      title: "Blog Article Title 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Tom Hanks",
      date: "09/06/2021",
      tags: ["product", "new"],
      image: "https://source.unsplash.com/random/300x300/?product"
    },
    {
      title: "Blog Article Title 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Jay Khan",
      date: "06/09/2021",
      tags: ["tech", "product"],
      image: "https://source.unsplash.com/random/300x300/?product"
    }
  ]
  return (
    <Flex direction="column" gap="8" justify="start" m="4" p="6">
      <Heading size="9" as="h1" weight="bold">
        Stories by Redix Themes Templates
      </Heading>

      {articleListObj.map((article) => {
        return (
          <Card size="2" key={article.title}>
            <Flex gap="6" align="start">
              {/* image */}
              <Image
                style={{ borderRadius: "5px" }}
                src={article.image}
                width={200}
                height={200}
                alt="alt"
              />

              {/* Text */}
              <Flex direction="column" gap="4">
                <Flex gap="4" align="start">
                  {article.tags.map((element) => {
                    return (
                      <Badge color="cyan" size="2">
                        {element}
                      </Badge>
                    )
                  })}
                </Flex>
                <Flex direction="column" gap="3">
                  <Text size="6" weight="medium">
                    {article.title}
                  </Text>
                  <Text size="4" color="gray">
                    {article.description}
                  </Text>
                </Flex>
                <Flex gap="4" align="center">
                  <Avatar
                    src="https://source.unsplash.com/random/300x300/?face,portrait"
                    fallback="M"
                    radius="full"
                  />
                  <Text size="2">{article.author}</Text>
                  <Separator orientation="vertical" size="1" />
                  <Text size="2">{article.date}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        )
      })}
    </Flex>
  )
}
