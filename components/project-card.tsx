"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  name: string;
  accent: string;
  href: string;
  domain: string;
  description: string;
  tags: readonly string[];
};

export function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  // Feed the cursor position to the CSS spotlight gradient.
  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onPointerMove={onMove}
      style={{ "--accent-c": project.accent, "--d": `${delay}ms` } as React.CSSProperties}
      className="reveal spotlight group rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid size-8 place-items-center rounded-lg text-sm font-semibold transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
              style={{
                color: project.accent,
                background: `color-mix(in oklch, ${project.accent} 16%, transparent)`,
                boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${project.accent} 35%, transparent)`,
              }}
            >
              {project.name[0]}
            </span>
            {project.name}
            <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </CardTitle>
          <CardDescription className="pt-1">{project.description}</CardDescription>
          <div className="flex flex-wrap items-center gap-1.5 pt-3">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {project.domain}
            </span>
          </div>
        </CardHeader>
      </Card>
    </a>
  );
}
