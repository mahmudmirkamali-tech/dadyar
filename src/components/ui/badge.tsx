import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const tones = {
  teal: "bg-teal/12 text-teal",
  navy: "bg-navy/10 text-navy",
  warn: "bg-warn/12 text-warn",
  danger: "bg-danger/12 text-danger",
  ok: "bg-ok/12 text-ok",
  muted: "bg-paper-3 text-muted",
  inverse: "bg-paper/12 text-paper",
} as const;

export function Badge({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
