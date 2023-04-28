import { Flex, Heading, CardFooter, CardBody, Box, Text, CardHeader, Card, HStack, Button, Divider, Avatar } from '@chakra-ui/react'
import { ViewIcon, EditIcon } from '@chakra-ui/icons'

export default function ProductCard(props) {

  const { title, author, description, img } = props.task

  return (
    <Card borderTop='8px' borderColor='purple.400' >

      <CardHeader >
        <Flex gap={5}>
          <Box w='50px' h='50px'>
            <Avatar src={img} />
          </Box>
          <Box>
            <Heading as='h3' size='sm'>{title}</Heading>
            <Text>by {author}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody >
        <Text color='gray.500'>
          {description}
        </Text>
      </CardBody>

      <Divider borderColor='gray.200' />

      <CardFooter >
        <HStack >
          <Button varient='ghost' leftIcon={<ViewIcon />}>Watch</Button>
          <Button varient='ghost' leftIcon={<EditIcon />}>Comment</Button>
        </HStack>
      </CardFooter>

    </Card>
  )

}
