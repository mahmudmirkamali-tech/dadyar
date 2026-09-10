import { formatJalali } from "@/lib/jalali";
import type { TimelineEvent } from "@/lib/types";

const KIND: Record<TimelineEvent["kind"], string> = {
  created: "ثبت",
  ai: "هوش مصنوعی",
  document: "سند",
  sana: "ثنا",
  sulh: "سازش",
  branch: "شعبه",
  session: "جلسه",
  enforcement: "اجرا",
  note: "یادداشت",
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const ordered = [...events].sort((a, b) => +new Date(b.at) - +new Date(a.at));
  return (
    <ol className="relative space-y-4 border-r border-line pr-5">
      {ordered.map((ev) => (
        <li key={ev.id} className="relative">
          <span className="absolute top-1.5 -right-[23px] size-2.5 rounded-full bg-teal" />
          <p className="text-[11px] text-muted">
            {KIND[ev.kind]} · {formatJalali(ev.at)}
          </p>
          <p className="text-sm font-medium text-ink">{ev.title}</p>
          {ev.detail && <p className="mt-0.5 text-sm leading-6 text-muted">{ev.detail}</p>}
        </li>
      ))}
    </ol>
  );
}
