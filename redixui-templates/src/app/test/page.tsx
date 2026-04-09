"use client"
import { Categories } from "@/components"
import Image from "next/image"
import { featuresImg } from "@/assets"

export default function page() {
  return (
    <>
      <Categories />
      <Image src={featuresImg} height={200} width={200} alt="alt" />
    </>
  )
}
