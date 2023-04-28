import { useToast, Heading, Flex, AvatarBadge, Button, Text, Spacer, HStack, Avatar } from '@chakra-ui/react'

export default function Nav() {

  const toast = useToast()
  function showToast() {
    toast({
      title: 'Logged Out',
      description: 'Successfully Loged Out',
      duration: 3000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: { UnlockIcon },
    })
  }

  return (
    <Flex as='nav' p='10px' align='center' mb='40px'>

      <Heading as='h1'>L0G0</Heading>
      <Spacer />

      <HStack spacing='20px'>
        <Avatar name='mario' src='/img/mario.png' bg='purple.400'>
          <AvatarBadge width='1.3em' bg='teal.500' >
            <Text fontSize='xs' color='white'>4</Text>
          </AvatarBadge>
        </Avatar>
        <Text>demomail@mail.dev</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
      </HStack>

    </Flex>
  )

}
