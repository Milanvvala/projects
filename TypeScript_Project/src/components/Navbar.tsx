import {
  Badge,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react"
import logo from "../assets/logo.svg"
import useCart from "../hooks/useCartHook"

type PropType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ viewCart, setViewCart }: PropType) {

  const {totalItems, totalPrice} = useCart()
 
  return (
    <Flex as="nav" p="10px" align="center" mb="20px" borderBottomWidth={1}>
      {/* <Heading as="h1">L0G0</Heading> */}
      <Image src={logo} />

      <Spacer />
      <HStack spacing="20px">
        <Badge ml="1" fontSize="xl" colorScheme="blue">
          <Text>Total Items : {totalItems} </Text>
        </Badge>
        <Badge ml="1" fontSize="xl" colorScheme="green">
          <Text>Total Price : {totalPrice}</Text>
        </Badge>

        {viewCart ? (
          <Button onClick={() => setViewCart(false)} colorScheme="blue">
            Go to Store
          </Button>
        ) : (
          <Button onClick={() => setViewCart(true)} colorScheme="blue">
            View Cart
          </Button>
        )}
      </HStack>
    </Flex>
  )
}
