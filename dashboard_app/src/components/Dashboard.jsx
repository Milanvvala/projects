import { SimpleGrid } from '@chakra-ui/react'
// import { useLoaderData } from 'react-router-dom';
import { ProductCard } from './';
import { data } from '../../data';

export default function Dashboard() {

  // const tasks = useLoaderData()
  const tasks = data.tasks

  return (
    <SimpleGrid spacing={10} minChildWidth='300px' >
      {tasks && tasks.map(e => {
        return (
          <ProductCard task={e} key={e.id} />
        )
      })
      }
    </SimpleGrid>
  )

}

