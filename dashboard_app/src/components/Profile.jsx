import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon } from '@chakra-ui/react'

export default function Profile() {
  
  return (
    
    <Tabs mt='40px' colorScheme='purple' variant='enclosed'>

      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Acount Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>

      <TabPanels>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} color='purple.400' />
              Email : mahatva@email.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} color='purple.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color='purple.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

      </TabPanels>

    </Tabs>
  )

}
