"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/navigation";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="min-w-0">
          <span className="block font-serif text-lg leading-tight text-foreground">
            MIC Research Portfolio
          </span>
          <span className="block text-xs tracking-wide text-muted">Medical image computing</span>
        </Link>
        <button
          type="button"
          className="border border-line px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-navigation"
          aria-label="Primary"
          className={`${open ? "absolute inset-x-0 top-full z-20 border-b border-line bg-paper px-6 py-4" : "hidden"} md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-accent underline decoration-accent/40 underline-offset-4"
                        : "text-foreground hover:text-accent"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
