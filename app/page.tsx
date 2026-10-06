import { ArrowUpRight, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-6 pt-4 sm:pt-10">
        <div
          style={d(0)}
          className="reveal inline-flex w-fit items-center gap-2 rounded-full border bg-card/50 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm"
        >
          <span className="pulse-dot size-1.5 rounded-full bg-[var(--brand-3)]" />
          {site.legalName}
        </div>
        <h1
          style={d(100)}
          className="reveal text-gradient pb-1 text-5xl font-semibold tracking-tighter sm:text-7xl"
        >
          {site.name}
        </h1>
        <p style={d(200)} className="reveal max-w-lg text-lg text-muted-foreground sm:text-xl">
          {site.tagline}
        </p>
        <div style={d(300)} className="reveal flex flex-wrap gap-2 pt-2">
          <a
            href={`mailto:${site.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 border-0 bg-gradient-to-r from-[oklch(0.52_0.22_285)] to-[oklch(0.55_0.16_235)] px-4 text-white shadow-[0_8px_30px_-8px_var(--brand-1)] transition-all hover:brightness-110 hover:shadow-[0_10px_40px_-6px_var(--brand-1)]"
            )}
          >
            <Mail data-icon="inline-start" />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group h-10 px-4 backdrop-blur-sm")}
          >
            GitHub
            <ArrowUpRight
              data-icon="inline-end"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>

      <section id="work" className="flex scroll-mt-24 flex-col gap-5">
        <div style={d(400)} className="reveal flex items-baseline justify-between">
          <h2 className="text-sm font-medium text-muted-foreground">Stuff we&apos;ve built</h2>
          <span className="font-mono text-xs text-muted-foreground">
            {String(site.projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {site.projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={480 + i * 90} />
          ))}
        </div>
      </section>
    </div>
  );
}
