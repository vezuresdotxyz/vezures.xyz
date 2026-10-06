import { ArrowUpRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {site.legalName}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">{site.tagline}</p>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${site.email}`} className={buttonVariants({ size: "lg" })}>
            <Mail data-icon="inline-start" />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </div>
      </section>

      <section id="work" className="flex scroll-mt-8 flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">
          Stuff we&apos;ve built
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {site.projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Card className="h-full transition-colors group-hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                    <span className="ml-auto font-mono text-xs text-muted-foreground">
                      {p.domain}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
