import {
  Button,
  Flex,
  Image,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react"

import {
  CartItemType,
  ReducerActionType,
  ReducerAction,
} from "../context/CartProvider"
import { ChangeEvent } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"

type PropsType = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  Reducer_Actions: ReducerActionType
}

export default function CartItem(props: PropsType) {
  const { item, dispatch, Reducer_Actions } = props

  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

  const lineTotal = item.qty * item.price

  const highestQty = 20 > item.qty ? 20 : item.qty

  const optionValues = [...Array(highestQty).keys()].map((i) => i + 1)

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: Reducer_Actions.Quantity,
      payload: { ...item, qty: Number(e.target.value) },
    })
  }

  const onRemoveFromCart = () => {
    dispatch({
      type: Reducer_Actions.Remove,
      payload: item,
    })
  }

  return (
    <Flex
      borderWidth={1}
      p="10px"
      m="10px"
      minWidth="200px"
      alignItems="center"
      gap="2"
      justifyContent="space-around"
      fontWeight="semibold"
    >
      <Image boxSize="200px" objectFit="cover" src={img} alt={item.name} />
      <Spacer />

      <Text fontSize="lg">{item.name}</Text>
      <Spacer />

      <Text fontSize="lg">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </Text>
      <Spacer />

      <label htmlFor="itemQty" hidden>
        Item Quantity
      </label>
      <Select
        onChange={onChangeQty}
        name="itemQty"
        value={item.qty}
        id="itemQty"
        placeholder="Select option"
        width="auto"
      >
        {optionValues.map((val) => {
          return (
            <option key={`option${val}`} value={val}>
              {val}
            </option>
          )
        })}
      </Select>
      <Spacer />

      <Text aria-label="'Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </Text>
      <Spacer />

      <Button
        onClick={onRemoveFromCart}
        leftIcon={<Cross2Icon />}
        aria-label="Remove Item from Cart"
        title="Remove Item from Cart"
        colorScheme="red"
      >
        Remove Item
      </Button>
    </Flex>
  )
}
