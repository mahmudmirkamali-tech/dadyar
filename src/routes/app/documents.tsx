import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/field";
import { formatJalali, toFaDigits } from "@/lib/jalali";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/documents")({ component: DocsPage });

function DocsPage() {
  const docs = useAppStore((s) => s.documents);
  const [q, setQ] = useState("");
  const { filtered, ms } = useMemo(() => {
    const t0 = performance.now();
    const n = q.trim();
    const list = n
      ? docs.filter((d) => d.title.includes(n) || d.summary.includes(n) || d.kind.includes(n))
      : docs;
    return { filtered: list, ms: n ? Math.max(1, Math.round(performance.now() - t0)) : null };
  }, [q, docs]);

  return (
    <div className="rise">
      <PageHeader
        kicker="فرمان جستجوی یکپارچه"
        title="اسناد و مدارک"
        description="تمام مدارک مرتبط با یک دستور ساده جمع می‌شود؛ هدف زیر شصت ثانیه است."
      />
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="چک، عقدنامه، اساسنامه، دیوار…" />
      {ms !== null && (
        <p className="mt-2 text-xs text-muted">
          {toFaDigits(filtered.length)} سند در {toFaDigits(ms)} میلی‌ثانیه
        </p>
      )}
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {filtered.map((d) => (
          <li key={d.id} className="rounded-xl border border-line bg-paper-2 p-4">
            <p className="text-xs text-teal">{d.kind}</p>
            <h2 className="mt-1 font-medium">{d.title}</h2>
            <p className="mt-1 text-sm leading-6 text-muted">{d.summary}</p>
            <p className="mt-2 text-[11px] text-muted">
              {toFaDigits(d.pages)} صفحه · {formatJalali(d.addedAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
