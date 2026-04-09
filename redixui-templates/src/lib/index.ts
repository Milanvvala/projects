import { navbar, footer } from "./navigation"
import { hero, features, statistics, blog } from "./page-sections"
import { buttons, cards, forms } from "./components"
import { Category } from "./types"

export const data: Category[] = [
  {
    name: "Page Sections",
    subLabel: "Large Page Sections like Hero, Features ...",
    id: "page-sections",
    children: [hero, features, statistics, blog]
  },
  {
    name: "Navigation",
    id: "navigation",
    subLabel: "Header Navigation for Websites & Apps",
    children: [navbar, footer]
  },
  {
    name: "Components",
    id: "components",
    subLabel: "Smaller buildings blocks like Cards, Buttons, Result ...",
    children: [cards, buttons, forms]
  }
]
