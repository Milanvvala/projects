import { Category, SubCategory, Template } from "./types"

export const getExampleUrl = (
  category: Category,
  subCategory: SubCategory,
  template: Template
) => {
  return `/templates/${category.id}/${subCategory.id}/${template.filename}`
}
