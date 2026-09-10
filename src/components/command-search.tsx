import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, FolderOpen, Gavel, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";

export function CommandSearch({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const cases = useAppStore((s) => s.cases);
  const docs = useAppStore((s) => s.documents);
  const sana = useAppStore((s) => s.sana);

  const results = useMemo(() => {
    const n = q.trim();
    if (!n) {
      return {
        cases: cases.slice(0, 3),
        docs: docs.slice(0, 3),
        sana: sana.slice(0, 3),
      };
    }
    return {
      cases: cases.filter((c) => c.title.includes(n) || c.summary.includes(n)),
      docs: docs.filter((d) => d.title.includes(n) || d.summary.includes(n) || d.kind.includes(n)),
      sana: sana.filter((s) => s.title.includes(n) || s.body.includes(n) || s.tracking.includes(n)),
    };
  }, [q, cases, docs, sana]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-navy/40 p-4 pt-[12vh]">
      <button type="button" className="absolute inset-0" onClick={onClose} aria-label="بستن جستجو" />
      <div className="relative w-full max-w-xl overflow-hidden rounded-xl bg-paper-2 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2 border-b border-line px-4">
          <Search className="size-4 text-muted" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="یک دستور ساده: چک، مهریه، ابلاغ، دیوار…"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          <Group icon={FolderOpen} title="پرونده‌ها">
            {results.cases.map((c) => (
              <Link
                key={c.id}
                to="/app/cases/$id"
                params={{ id: c.id }}
                onClick={onClose}
                className="block rounded-md px-3 py-2 hover:bg-paper-3"
              >
                <p className="text-sm font-medium">{c.title}</p>
                <p className="text-xs text-muted">{c.summary}</p>
              </Link>
            ))}
            {results.cases.length === 0 && <Empty />}
          </Group>
          <Group icon={FileText} title="اسناد">
            {results.docs.map((d) => (
              <Link key={d.id} to="/app/documents" onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-paper-3">
                <p className="text-sm font-medium">{d.title}</p>
                <p className="text-xs text-muted">
                  {d.kind} — {d.summary}
                </p>
              </Link>
            ))}
            {results.docs.length === 0 && <Empty />}
          </Group>
          <Group icon={Gavel} title="ثنا">
            {results.sana.map((s) => (
              <Link key={s.id} to="/app/sana" onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-paper-3">
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-muted">{s.tracking}</p>
              </Link>
            ))}
            {results.sana.length === 0 && <Empty />}
          </Group>
        </div>
      </div>
    </div>
  );
}

function Group({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Search;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-2">
      <p className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-muted">
        <Icon className="size-3.5" />
        {title}
      </p>
      {children}
    </div>
  );
}

function Empty() {
  return <p className="px-3 py-2 text-xs text-muted">موردی یافت نشد.</p>;
}
