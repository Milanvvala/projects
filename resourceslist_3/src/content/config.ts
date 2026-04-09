import { z, defineCollection, reference } from "astro:content";
export const categories = ["All", "Design", "Development", "Filming", "Photography", "Productivity", "Marketing", "Business", "Finance", "Personal"] as const
export const pricings = ["Free", "Free + Paid", "Freemium", "Paid"] as const

export const collections = {

  // resources - content
  resources: defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
      published: z.boolean(),
      image: image(),
      title: z.string().max(16, {
        message: "Title must be 16 characters or less.",
      }),
      description: z.string().max(160, {
        message: "Description must be 160 characters or less.",
      }),
      category: z.enum(categories),
      pricing: z.enum(pricings),
      deals: z.boolean().optional(),
      // tags: z.array(z.enum(tags)),
      relatedResources: z.array(reference("resources")).optional(),
      date: z.date()
    }),
  }),

};
