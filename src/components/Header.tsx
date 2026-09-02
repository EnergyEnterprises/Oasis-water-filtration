"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-deep/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  active
                    ? "bg-foam text-teal"
                    : "text-ink/80 hover:bg-sand hover:text-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn btn-primary px-4 lg:hidden" href={site.phoneHref}>
            Call
          </a>
          <a className="btn btn-primary hidden lg:inline-flex" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <Link className="btn btn-outline hidden lg:inline-flex" href="/contact">
            Request a quote
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper text-deep lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
                <path
                  d="M5 8h14M5 12h14M5 16h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-deep/10 bg-cream px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-semibold text-deep hover:bg-sand"
              >
                {item.label}
              </Link>
            ))}
            <a className="btn btn-primary mt-2" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
            <Link className="btn btn-outline" href="/contact">
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
