import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border bg-zinc-900 text-white shadow p-4", className)} {...props} />;
}
