export const navigation = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/library", label: "Library" },
  { href: "/foundations", label: "Foundations" },
  { href: "/academic", label: "Academic" },
  { href: "/about", label: "About" },
] as const;

export type NavigationHref = (typeof navigation)[number]["href"];
