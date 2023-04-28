import { ReactElement, createContext, useEffect, useState } from "react"

export type ProductType = {
  sku: string
  name: string
  price: number
}

export type UseProductContextType = { products: ProductType[] }

type ChildrenType = { children?: ReactElement | ReactElement[] }

const initState: ProductType[] = [
  { sku: "item001", name: "Watch", price: 9.99 },
  { sku: "item002", name: "Sneacker", price: 19.99 },
  { sku: "item003", name: "Glasses", price: 29.99 },
]

const initContextState: UseProductContextType = { products: [] }

const ProductsContext = createContext<UseProductContextType>(initContextState)

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setproducts] = useState(initState)

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:8000")
  //       .then((res) => res.json())
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message)
  //       })
  //     return data
  //   }
  //   fetchProducts().then((products) => setproducts(products))
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
