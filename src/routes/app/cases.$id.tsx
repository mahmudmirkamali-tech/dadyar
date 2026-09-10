import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { StatusBadge, TrackBadge } from "@/components/status-badge";
import { Timeline } from "@/components/timeline";
import { TRACK_RULE, DOMAIN_LABEL } from "@/lib/types";
import { formatJalali } from "@/lib/jalali";
import { elders, offices, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/cases/$id")({ component: CaseDetail });

function CaseDetail() {
  const { id } = Route.useParams();
  const legalCase = useAppStore((s) => s.cases.find((c) => c.id === id));
  const docs = useAppStore((s) => s.documents.filter((d) => d.caseId === id));
  if (!legalCase) {
    return (
      <div>
        <p>پرونده یافت نشد.</p>
        <Link to="/app/cases" className="text-sm text-teal">
          بازگشت
        </Link>
      </div>
    );
  }
  const elder = elders.find((e) => e.id === legalCase.elderId);
  const office = offices.find((o) => o.id === legalCase.officeId);

  return (
    <div className="rise">
      <PageHeader
        kicker={DOMAIN_LABEL[legalCase.domain]}
        title={legalCase.title}
        description={legalCase.summary}
      />
      <div className="mb-6 flex flex-wrap gap-2">
        <TrackBadge track={legalCase.track} />
        <StatusBadge status={legalCase.status} />
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-7 text-muted">{TRACK_RULE[legalCase.track]}</p>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-xl border border-line bg-paper-2 p-5">
          <h2 className="mb-4 font-semibold">خط زمان</h2>
          <Timeline events={legalCase.events} />
        </section>
        <aside className="space-y-4">
          <div className="rounded-xl border border-line bg-paper-2 p-5 text-sm">
            <h2 className="mb-3 font-semibold">مشخصات</h2>
            <p>شهر: {legalCase.city}</p>
            <p className="mt-1">طرفین: {legalCase.parties.join("، ")}</p>
            <p className="mt-1">ثبت: {formatJalali(legalCase.createdAt)}</p>
            {legalCase.sanaTracking && <p className="mt-1">ثنا: {legalCase.sanaTracking}</p>}
            {legalCase.branchId && <p className="mt-1">شعبه: {legalCase.branchId}</p>}
            {office && <p className="mt-1">دفتر: {office.title}</p>}
            {elder && <p className="mt-1">ریش‌سفید: {elder.name}</p>}
          </div>
          <div className="rounded-xl border border-line bg-paper-2 p-5">
            <h2 className="mb-3 font-semibold">مدارک</h2>
            <ul className="space-y-2 text-sm">
              {docs.map((d) => (
                <li key={d.id}>{d.title}</li>
              ))}
              {docs.length === 0 && <li className="text-muted">سندی پیوست نشده.</li>}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
