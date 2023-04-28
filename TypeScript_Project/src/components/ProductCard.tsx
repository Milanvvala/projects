import {
  Badge,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { ProductType } from "../context/ProductsProvider"
import { ReducerAction, ReducerActionType } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  Reducer_Actions: ReducerActionType
  inCart: boolean
}

export default function ProductCard(props: PropsType): ReactElement {
  const { product, dispatch, Reducer_Actions, inCart } = props

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href
  console.log(img)

  const onAddToCart = () => {
    dispatch({ type: Reducer_Actions.Add, payload: { ...product, qty: 1 } })
  }

  return (
    <Card maxW="sm" borderColor="black" variant="outline" p={2} m={2}>
      <Image boxSize='400px' objectFit='cover' src={img} alt={product.name} />
      <Stack mt="6" spacing="2">
        <HStack justifyContent='center'>
          <Heading size="md">{product.name}</Heading>
          {inCart ? (
            <Badge ml="1" fontSize="sm" colorScheme="green">
              <HStack>
                <CheckCircledIcon />
                <Text>item in cart</Text>
              </HStack>
            </Badge>
          ) : null}
        </HStack>
        <Text color="blue.600" fontSize="2xl">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </Text>
        <Button onClick={onAddToCart} colorScheme="blue">
          Add to cart
        </Button>
      </Stack>
    </Card>
  )
}
