import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { ProductsProvider } from "./context/ProductsProvider.tsx"
import { CartProvider } from "./context/CartProvider.tsx"

const colors = { brand: { 900: "#1a365d" } }

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ChakraProvider>
  </React.StrictMode>
)
