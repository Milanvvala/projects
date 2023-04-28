import { SimpleGrid } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom';
import { ProductCard } from './';

export default function Dashboard() {

  const tasks = useLoaderData()
  console.log(tasks)

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

