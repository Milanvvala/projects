import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import useProducts from "../hooks/useProductsHook"
import useCart from "../hooks/useCartHook"
import { ProductCard } from "."

export default function Store() {
  const { dispatch, Reducer_Actions, cart } = useCart()
  const { products } = useProducts()

  return (
    <>
      {/* <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> */}
      <SimpleGrid spacing="10px" columns={3} textAlign='center'>
        {products.map((product) => {
          const incart: boolean = cart.some((item) => item.sku === product.sku)
          return (
            <ProductCard
              key={product.sku}
              product={product}
              dispatch={dispatch}
              Reducer_Actions={Reducer_Actions}
              inCart={incart}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}
