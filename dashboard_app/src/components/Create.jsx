import { FormLabel, FormHelperText, Input, Box, Textarea, Button, FormControl, Checkbox } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

export default function Create() {

  return (
    <Box maxW='480px'>

      <Form method='post' action='/create'>

        <FormControl mb='40px' isRequired>
          <FormLabel>Task Name: </FormLabel>
          <Input type='text' name='title' />
          <FormHelperText>Enter Title</FormHelperText>
        </FormControl>

        <FormControl mb='40p'>
          <FormLabel>Task Description:</FormLabel>
          <Textarea placeholder='Enter Detailed Description' name='description' />
        </FormControl>

        <FormControl mb='40px' display='flex' alignItems='center'>
          <Checkbox name='priority' size='lg' colorScheme='purple' />
          <FormLabel ml='10px' mb='0'>Make this Priority Task</FormLabel>
        </FormControl>

        <Button type='submit'>Submit</Button>

      </Form>

    </Box>
  )

}