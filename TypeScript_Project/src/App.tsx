import { useState } from "react"
import { Cart, Footer, Navbar, Store } from "./components"

export default function App() {
  const [viewCart, setviewCart] = useState(false)

  return (
    <div>
      <Navbar viewCart={viewCart} setViewCart={setviewCart} />
      {viewCart ? <Cart /> : <Store />}
      <Footer />
    </div>
  )
}