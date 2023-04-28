import { Outlet } from "react-router-dom"
import { GridItem, Grid, } from '@chakra-ui/react'
import { Nav, Sidebar } from './'

export default function Layout() {

  return (
    <Grid templateColumns='repeat(6,1fr)' bg='gray.50' >

      <GridItem as='aside' colSpan={{ base: 6, lg: 2, xl: 1 }} bg='brand.500' minHeight={{ lg: '100vh' }} p={{ base: '20px', lg: '30px' }}>
        <Sidebar />
      </GridItem>

      <GridItem as='main' colSpan={{ base: 6, lg: 4, xl: 5 }} p='40px'>
        <Nav />
        <Outlet />
      </GridItem>

    </Grid>
  )

}
