export const CATEGORIES = [
  { slug: "ui-ux", label: "UI/UX" },
  { slug: "editorial", label: "Editorial" },
  { slug: "brand-identity", label: "Brand Identity" },
  { slug: "digital-design", label: "Digital Design" },
  { slug: "social-media", label: "Social Media" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
