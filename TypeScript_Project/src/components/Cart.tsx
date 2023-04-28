import { useState } from "react"
import { Badge, Button, Heading, Spacer, Text } from "@chakra-ui/react"
import CartItem from "./CartItem"
import { ThankYou } from "./"
import useCart from "../hooks/useCartHook"

export default function Cart() {
  const [confirm, setConfirm] = useState(false)

  const { dispatch, Reducer_Actions, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: Reducer_Actions.Submit })
    setConfirm(true)
  }

  return (
    <>
      {confirm ? (
        <ThankYou />
      ) : (
        <div>
          <Heading as="h2" size="xl" p="10px">
            Cart
          </Heading>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.sku}
                item={item}
                dispatch={dispatch}
                Reducer_Actions={Reducer_Actions}
              />
            )
          })}
          <Badge m="10px" fontSize="xl" colorScheme="blue">
            <Text>Total Items : {totalItems} </Text>
          </Badge>
          <Badge m="10px" fontSize="xl" colorScheme="green">
            <Text>Total Price : {totalPrice}</Text>
          </Badge>
          <br />
          <Button
            disabled={!totalItems}
            onClick={onSubmitOrder}
            m="10px"
            colorScheme="whatsapp"
            size="lg"
          >
            Place Order
          </Button>
        </div>
      )}
    </>
  )
}
