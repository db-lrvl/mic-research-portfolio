import Link from "next/link";
import { PageFrame } from "@/components/page-frame";

export default function NotFound() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 max-w-xl leading-7">That address is not part of this portfolio.</p>
      <Link href="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        Back to home
      </Link>
    </PageFrame>
  );
}
