import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { StatusBadge, TrackBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { formatJalali } from "@/lib/jalali";
import { DOMAIN_LABEL } from "@/lib/types";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/cases")({ component: CasesPage });

function CasesPage() {
  const cases = useAppStore((s) => s.cases);
  return (
    <div className="rise">
      <PageHeader
        kicker="خط زمان یکپارچه"
        title="پرونده‌ها"
        description="هر موضوع یک پرونده با مسیر مشخص، مدارک و مهلت دارد."
        actions={
          <Link to="/app/new">
            <Button>موضوع تازه</Button>
          </Link>
        }
      />
      <div className="overflow-hidden rounded-xl border border-line bg-paper-2">
        <ul className="divide-y divide-line">
          {cases.map((c) => (
            <li key={c.id}>
              <Link to="/app/cases/$id" params={{ id: c.id }} className="block p-4 hover:bg-paper-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-medium">{c.title}</h2>
                  <TrackBadge track={c.track} />
                  <StatusBadge status={c.status} />
                </div>
                <p className="mt-1 text-sm text-muted">
                  {DOMAIN_LABEL[c.domain]} · {c.city} · {formatJalali(c.createdAt)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
