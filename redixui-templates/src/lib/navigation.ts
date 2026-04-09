import { SubCategory } from "./types"
import { footerImg, navbarImg } from "@/assets"

export const navbar: SubCategory = {
  name: "Navbar",
  id: "navbar",
  image: navbarImg,
  children: [
    {
      name: "Simple with Icon and Dark theme switcher",
      filename: "simple"
    },
    {
      name: "With Sub-Navigation & CTA",
      filename: "mainmenu"
    },
    {
      name: "With action button & user profile",
      filename: "dashboard"
    }
  ]
}

export const footer: SubCategory = {
  name: "Footer",
  id: "footer",
  image: footerImg,
  children: [
    {
      name: "Simple with Logo, Navigation, Socialicons",
      filename: "smallcentered"
    },
    {
      name: "Small with Logo",
      filename: "clean"
    },
    {
      name: "Small with Navigation",
      filename: "simple"
    },
    {
      name: "Large with Logo",
      filename: "largesimple"
    },
    {
      name: "Large with Newslatter",
      filename: "large"
    }
  ]
}
