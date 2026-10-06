import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.legalName} · DUNS {site.duns}
      </p>
      <nav className="flex gap-4">
        <Link href="/terms/" className="hover:text-foreground">
          Terms
        </Link>
        <Link href="/privacy/" className="hover:text-foreground">
          Privacy
        </Link>
        <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
