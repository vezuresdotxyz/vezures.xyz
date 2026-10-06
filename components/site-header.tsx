import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="size-5 rounded-md bg-gradient-to-br from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-3)] transition-transform duration-500 group-hover:rotate-90"
          />
          {site.name}
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/#work"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Work
          </Link>
          <a
            href={`mailto:${site.email}`}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
