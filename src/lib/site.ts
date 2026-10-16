function readPublicUrl(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME?.trim() || null;

export const site = {
  name: "MIC Research Portfolio",
  description:
    "Educational research portfolio in medical image computing, prepared for the University of Girona Master's in Medical Image Computing.",
  authorName,
  githubUrl: readPublicUrl(process.env.NEXT_PUBLIC_GITHUB_URL),
  linkedinUrl: readPublicUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  siteUrl: readPublicUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000",
  programme: "University of Girona, Master's in Medical Image Computing",
  academicYear: "2027/2028",
} as const;
