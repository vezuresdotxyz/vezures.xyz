import { Separator } from "@/components/ui/separator";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">Last updated {updated}</p>
      </header>
      <Separator />
      <div className="legal flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </article>
  );
}
