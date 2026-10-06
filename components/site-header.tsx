import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b py-5">
      <Link href="/" className="font-medium tracking-tight">
        {site.name}
      </Link>
      <nav className="flex items-center gap-1">
        <Link href="/#work" className={buttonVariants({ variant: "ghost", size: "sm" })}>
          Work
        </Link>
        <a
          href={`mailto:${site.email}`}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
