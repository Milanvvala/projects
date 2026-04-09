import { z } from "zod";
import { Globe, Figma } from 'lucide-react'

// Zod validation schema for Tools
export const toolSchema = z.object({
  id: z.string().uuid(), // Unique identifier in UUID format
  slug: z.string().min(3).max(50).regex(/^[a-z0-9-]+$/), // URL-friendly identifier (lowercase, numbers, hyphens)
  logoImage: z.string().url().optional(),
  title: z.string().min(3).max(50), // Display name of the tool (3-50 chars)
  description: z.string().min(10).max(200), // Short description (10-200 chars)
  category: z.enum(["development", "design", "productivity"]),
  url: z.string().url(),
  pricing: z.enum(["free", "freemium", "paid", "subscription"]),
  tags: z.array(z.string().min(1).max(20)).min(1).max(5), // Array of tags (1-5 items, each 1-20 chars)
  isPublished: z.boolean().default(false), // Visibility status (default: unpublished)
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  relatedTools: z.array(z.string().uuid()).optional(), // Array of related tool IDs
  relatedResources: z.array(z.string().uuid()).optional(), // Array of related resource IDs
  // Additional metadata fields
  featured: z.boolean().default(false), // Whether the tool is featured
  popularity: z.number().min(0).max(100).optional(), // Popularity score (0-100)
});

// Zod validation schema for Resources
export const resourceSchema = z.object({
  id: z.string().uuid(), // Unique identifier in UUID format
  slug: z.string().min(3).max(50).regex(/^[a-z0-9-]+$/), // URL-friendly identifier
  image: z.string().url().optional(),
  title: z.string().min(3).max(50),
  description: z.string().min(10).max(200),
  category: z.enum(["development", "design", "productivity"]),
  url: z.string().url(), // URL to access the resource
  type: z.enum(["article", "video", "tutorial", "course", "cheatsheet"]),
  tags: z.array(z.string().min(1).max(20)).min(1).max(5), // Array of tags
  isPublished: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  // Additional metadata fields
  author: z.string().min(2).max(50).optional(), // Author/creator name
  duration: z.number().min(0).optional(), // Duration in minutes (for time-based resources)
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(), // Difficulty level
});

export const demoRecsource = {
  id: '1',
  slug: 'resources-list',
  logoImage: '/logo-icon.svg',
  title: 'ResourcesList',
  description: 'Collaction of Digital Tools and Resources for Pros',
  category: 'design',
  url: 'https://resourceslist.com',
  pricing: 'freemium',
  tags: ['design', 'ui', 'ux', 'collaboration', 'prototyping', 'vector'],
  createdAt: new Date(),
  companyName: 'Rector Tech',
  details: 'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
  companyBio: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
  features: [
    "Real-time collaboration",
    "Vector networks",
    "Auto layout",
    "Interactive prototypes",
    "Design systems",
  ],
  integrations: [
    "Slack",
    "Jira",
    "Notion",
    "Dropbox",
    "Google Drive",
  ],
  availableOn: [
    { icon: Globe, label: "Web" },
    { icon: Figma, label: "Desktop App" },
  ],
  alternatives: ["Adobe XD", "Sketch", "InVision Studio"]
}

// Infer TypeScript types from Zod schemas
export type Tool = z.infer<typeof toolSchema>;
export type Resource = z.infer<typeof resourceSchema>;

// Additional utility types
export type ToolCategory = Tool["category"]; // "development" | "design" | "productivity"
export type ResourceType = Resource["type"]; // "article" | "video" | etc.
export type PricingModel = Tool["pricing"]; // "free" | "freemium" | etc.