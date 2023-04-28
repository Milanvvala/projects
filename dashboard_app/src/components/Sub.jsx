import React from 'react'
import { Container, Heading, Text, Box } from '@chakra-ui/react'

export default function Sub() {

  let styles = {
    color: 'gray.100', bg: 'teal',
    my: '20px', p: '20px',
    filter: 'blur(2px)',
    ':hover': { color: 'gray.900', filter: 'blur(0)', bg: 'yellow', }
  }

  return (
    <Container as='section' maxWidth='4xl' py='20px'>

      <Heading my='30px' p='10px'>Chakra UI</Heading>
      <Text color='blue.300' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptas!</Text>
      <Text >Lorem ipsum  Omnis, voluptas!</Text>

      <Box sx={styles}>
        <Text>Box Content</Text>
      </Box>

    </Container>
  )

}
