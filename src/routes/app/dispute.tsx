import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatJalali } from "@/lib/jalali";
import { offices, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/dispute")({ component: DisputePage });

const ST: Record<string, string> = {
  queued: "در صف تخصیص",
  assigned: "شعبه تعیین شد",
  notified: "ابلاغ ثنا صادر شد",
  session: "جلسه شعبه",
  decided: "تصمیم صادر شد",
};

export function DisputePage() {
  const items = useAppStore((s) => s.disputes);
  const cases = useAppStore((s) => s.cases);

  return (
    <div className="rise">
      <PageHeader
        kicker="بخش خصوصی × ثنا"
        title="حل اختلاف هوشمند"
        description="سامانه از شبکه دفاتر شعبه می‌خواهد و ابلاغ را از ثنا صادر می‌کند. این مسیر جایگزین شورای دولتی نیست؛ شریک خصوصی با قابلیت ابلاغ رسمی است."
        actions={
          <Link to="/app/new">
            <Button>درخواست شعبه تازه</Button>
          </Link>
        }
      />

      <ol className="mb-8 grid gap-3 md:grid-cols-4">
        {["شرح موضوع و مدارک", "تحلیل هوش مصنوعی", "تخصیص شعبه دفتر خصوصی", "ابلاغ طرفین از ثنا"].map((step, i) => (
          <li key={step} className="rounded-lg border border-line bg-paper-2 p-4">
            <p className="text-[11px] text-teal">گام {["یک", "دو", "سه", "چهار"][i]}</p>
            <p className="mt-1 text-sm font-medium">{step}</p>
          </li>
        ))}
      </ol>

      <div className="space-y-3">
        {items.map((d) => {
          const office = offices.find((o) => o.id === d.officeId);
          const c = cases.find((x) => x.id === d.caseId);
          return (
            <article key={d.id} className="rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{c?.title ?? d.branchLabel}</h3>
                <Badge tone="warn">{ST[d.status]}</Badge>
              </div>
              <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-muted">شعبه</dt>
                  <dd>{d.branchLabel}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">دفتر</dt>
                  <dd>{office?.title}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">شماره پیگیری ثنا</dt>
                  <dd className="font-medium tabular-nums">{d.sanaTracking}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">ثبت</dt>
                  <dd>{formatJalali(d.createdAt)}</dd>
                </div>
              </dl>
              <Link to="/app/cases/$id" params={{ id: d.caseId }} className="mt-3 inline-block text-sm text-teal">
                خط زمان پرونده
              </Link>
            </article>
          );
        })}
        {items.length === 0 && <p className="text-sm text-muted">هنوز شعبه خصوصی درخواست نشده است.</p>}
      </div>
    </div>
  );
}
