export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">{children}</div>;
}
