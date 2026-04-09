import { SubCategory } from "./types"
import { buttonsImg, cardImg, formsImg } from "@/assets"

export const buttons: SubCategory = {
  name: "Buttons",
  id: "buttons",
  image: buttonsImg,
  children: [
    {
      name: "Buttons_1",
      filename: "simple"
    },
    {
      name: "Buttons_2",
      filename: "complex"
    },
    {
      name: "Buttons_3",
      filename: "buttontypes"
    }
  ]
}

export const cards: SubCategory = {
  name: "Cards",
  id: "cards",
  image: cardImg,
  children: [
    {
      name: "Pricing",
      filename: "pricing"
    },
    {
      name: "Shoping",
      filename: "shoping"
    }
  ]
}

export const forms: SubCategory = {
  name: "Forms",
  id: "forms",
  image: formsImg,
  children: [
    {
      name: "Contact Form",
      filename: "contactform"
    },
    {
      name: "Authentication Form",
      filename: "authenticationform"
    },
    {
      name: "newsletter",
      filename: "newsletter"
    }
  ]
}
