import { Flex, Text } from "@chakra-ui/react"

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
      <Flex as="footer" p="10px" align="center" mt="20px" borderTopWidth={1}>
        <Text>Shoping Cart &copy; {year}</Text>
      </Flex>
    </>
  )

}
