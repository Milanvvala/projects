import { Categories, Features, Hero } from "@/components"
import { Separator } from "@radix-ui/themes"

export default function Home() {
  return (
    <>
      <Separator orientation="horizontal" size="4" />
      <Hero />
      <Separator orientation="horizontal" size="4" />
      <Features />
      <Separator orientation="horizontal" size="4" />
      <Categories />
      <Separator orientation="horizontal" size="4" />
    </>
  )
}
