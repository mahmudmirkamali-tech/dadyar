import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatJalali, toFaDigits } from "@/lib/jalali";
import { DOMAIN_LABEL } from "@/lib/types";
import { elders, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/sulh")({ component: SulhPage });

const SULH_STATUS: Record<string, string> = {
  requested: "درخواست‌شده",
  scheduled: "زمان‌بندی‌شده",
  held: "برگزارشده",
  settled: "منجر به سازش",
  failed: "عدم سازش",
  enforcement: "ارسال برای اجرا",
};

export function SulhPage() {
  const sessions = useAppStore((s) => s.sulh);
  const role = useAppStore((s) => s.role);

  return (
    <div className="rise">
      <PageHeader
        kicker="مسیر مستقل — نه مشاوره، نه وکالت"
        title="صلح و سازش"
        description="ریش‌سفید میانجی است. خروجی سازش‌نامه است و با هماهنگی معاونت حل اختلاف استان ضمانت اجرایی قضایی پیدا می‌کند."
        actions={
          <Link to="/app/new">
            <Button>درخواست سازش تازه</Button>
          </Link>
        }
      />

      <section className="mb-6 grid gap-3 rounded-xl border border-teal/25 bg-teal/6 p-5 md:grid-cols-3">
        <Rule
          title="چه هست"
          text="میانجی‌گری محرمانه با ریش‌سفید حوزه‌ای. هدف، توافق طرفین و کاهش ورود به دادگاه است."
        />
        <Rule
          title="چه نیست"
          text="مشاوره حقوقی، تنظیم دادخواست، و دفاع در مرجع قضایی در این مسیر ممنوع است و به وکالت سپرده می‌شود."
        />
        <Rule
          title="اجرا"
          text="سازش‌نامه پس از تأیید معاونت حل اختلاف استان قابلیت اجرا می‌گیرد. هماهنگی استانی در فاز یک پیش‌بینی شده است."
        />
      </section>

      {role === "mediator" && (
        <p className="mb-4 rounded-md bg-cream px-4 py-3 text-sm">نمای ریش‌سفید: فقط جلسات ارجاع‌شده به شما نمایش داده می‌شود.</p>
      )}

      <h2 className="mb-3 font-semibold">جلسات</h2>
      <div className="space-y-3">
        {sessions.map((s) => {
          const elder = elders.find((e) => e.id === s.elderId);
          return (
            <article key={s.id} className="rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{s.title}</h3>
                <Badge tone="teal">{SULH_STATUS[s.status]}</Badge>
                <Badge>{DOMAIN_LABEL[s.domain]}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted">
                {elder?.name} · {s.city}
                {s.scheduledAt ? ` · ${formatJalali(s.scheduledAt)}` : ""}
              </p>
              <p className="mt-2 text-sm leading-7">{s.notes}</p>
              <Link to="/app/cases/$id" params={{ id: s.caseId }} className="mt-2 inline-block text-sm text-teal">
                پرونده مرتبط
              </Link>
            </article>
          );
        })}
      </div>

      <h2 className="mb-3 mt-10 font-semibold">شبکه ریش‌سفیدان</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {elders.map((el) => (
          <article key={el.id} className="rounded-xl border border-line bg-paper-2 p-5">
            <h3 className="font-medium">{el.name}</h3>
            <p className="mt-1 text-xs text-teal">{el.domainsLabel}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{el.bio}</p>
            <p className="mt-3 text-xs text-muted">
              {el.city} · {toFaDigits(el.years)} سال · نرخ سازش {toFaDigits(el.settlementRate)}٪
            </p>
            <p className="mt-1 text-[11px] text-muted">تأیید: {el.approvedBy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Rule({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-1 text-sm leading-7 text-muted">{text}</p>
    </div>
  );
}
