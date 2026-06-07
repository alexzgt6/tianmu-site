"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/product", label: "产品" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm text-white">
            幕
          </span>
          天幕
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggle}
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-foreground dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <Link
            href="/contact"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:opacity-80"
          >
            开始使用
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
              onClick={() => setMenuOpen(false)}
            >
              开始使用
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
