import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm leading-6 text-muted md:flex-row md:justify-between">
        <div className="max-w-2xl">
          <p>
            Educational experiments in medical image computing. This site is not a medical device,
            does not provide diagnosis, and does not imply clinical qualifications.
          </p>
          <p className="mt-2">
            Reports published here are student research records. Peer review will be named only if
            it has happened.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/about" className="text-foreground hover:text-accent">
            About
          </Link>
          {site.githubUrl ? (
            <a href={site.githubUrl} className="text-foreground hover:text-accent">
              GitHub
            </a>
          ) : (
            <span>GitHub profile not configured</span>
          )}
          {site.linkedinUrl ? (
            <a href={site.linkedinUrl} className="text-foreground hover:text-accent">
              Professional profile
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
