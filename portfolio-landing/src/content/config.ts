import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Las 5 categorías definidas para el portafolio
    category: z.enum([
      "ui-ux",
      "editorial",
      "brand-identity",
      "digital-design",
      "social-media",
    ]),
    role: z.string(), // tu rol en el proyecto
    tools: z.array(z.string()).default([]),
    year: z.string().optional(),
    cover: z.string(), // ruta de la imagen en /public/images/projects
    link: z.string().url().optional(), // link al case study (Behance, etc.)
    featured: z.boolean().default(false),
    order: z.number().default(0), // menor = aparece primero
  }),
});

export const collections = { projects };
