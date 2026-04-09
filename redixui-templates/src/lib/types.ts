import { StaticImageData } from "next/image"

export interface Category {
  name: string
  subLabel: string
  id: string
  children?: SubCategory[]
}

export interface SubCategory {
  name: string
  id: string
  description?: string
  children?: Template[]
  image: string | StaticImageData
}

export interface Template {
  name: string
  filename: string
}
