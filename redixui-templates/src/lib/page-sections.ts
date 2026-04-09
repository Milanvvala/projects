import { SubCategory } from "./types"
import { blogImg, featuresImg, heroImg, statsImg } from "@/assets"

export const hero: SubCategory = {
  name: "Hero",
  id: "hero",
  image: heroImg,
  children: [
    {
      name: "CTA with Annotation",
      filename: "simple"
    },
    {
      name: "CTA with Illustration",
      filename: "bighero"
    },
    {
      name: "Split Screen with Image",
      filename: "splitscreen"
    }
  ]
}

export const features: SubCategory = {
  name: "Features",
  id: "features",
  image: featuresImg,
  children: [
    {
      name: "Grid List with Heading",
      filename: "simple"
    },
    {
      name: "Feature Cards with Heading",
      filename: "complex"
    }
  ]
}

export const statistics: SubCategory = {
  name: "Statistics",
  id: "statistics",
  image: statsImg,
  children: [
    {
      name: "Basic Statistics",
      filename: "basic"
    },
    {
      name: "Statistics with Icons",
      filename: "iconstats"
    },
    {
      name: "Statistics with Title and Description",
      filename: "detailstats"
    }
  ]
}

export const blog: SubCategory = {
  name: "Blog",
  id: "blog",
  image: blogImg,
  children: [
    {
      name: "List of Article",
      filename: "articlelist"
    },
    {
      name: "Article",
      filename: "article"
    },
    {
      name: "Product Detail",
      filename: "productdetail"
    }
  ]
}
