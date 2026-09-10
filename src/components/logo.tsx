import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="8" fill="currentColor" className="text-teal" />
      <path
        d="M8 21V12.5c0-.8.6-1.5 1.5-1.5H13M24 21V12.5c0-.8-.6-1.5-1.5-1.5H19M10.5 21h11"
        fill="none"
        stroke="#f3eee4"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M16 7.5v4.2" stroke="#f3eee4" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16" cy="6.6" r="1.15" fill="#f3eee4" />
    </svg>
  );
}

export function Wordmark({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Mark className={inverse ? "text-teal" : "text-teal"} />
      <div className="leading-tight">
        <div className={cn("text-base font-semibold tracking-tight", inverse ? "text-paper" : "text-ink")}>
          زندگی
        </div>
        {!compact && (
          <div className={cn("text-[11px]", inverse ? "text-paper/55" : "text-muted")}>داشبورد حقوقی شهروند</div>
        )}
      </div>
    </div>
  );
}
