import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, FolderOpen, Scale, Waypoints } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatusBadge, TrackBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { daysUntil, formatJalali, formatJalaliLong, toFaDigits } from "@/lib/jalali";
import { citizen } from "@/lib/seed";
import { useAppStore } from "@/lib/store";
import { ROLE_LABEL } from "@/lib/types";

export const Route = createFileRoute("/app/")({ component: Home });

function Home() {
  const role = useAppStore((s) => s.role);
  const cases = useAppStore((s) => s.cases);
  const sana = useAppStore((s) => s.sana);
  const sulh = useAppStore((s) => s.sulh);
  const disputes = useAppStore((s) => s.disputes);
  const unread = sana.filter((n) => !n.read).length;
  const deadlines = sana.filter((n) => n.deadline).sort((a, b) => +new Date(a.deadline!) - +new Date(b.deadline!));

  return (
    <div className="rise">
      <PageHeader
        kicker={formatJalaliLong(new Date())}
        title={`سلام ${citizen.name}`}
        description={`نمای ${ROLE_LABEL[role]} — امور محرمانه و اولویت‌دار در یک نقطه ورود.`}
        actions={
          <Link to="/app/new">
            <Button>
              طرح موضوع تازه
              <ArrowLeft className="size-4" />
            </Button>
          </Link>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi icon={FolderOpen} label="پرونده فعال" value={toFaDigits(cases.filter((c) => c.status !== "closed").length)} />
        <Kpi icon={Bell} label="ابلاغ نخوانده ثنا" value={toFaDigits(unread)} />
        <Kpi icon={Waypoints} label="جلسه سازش" value={toFaDigits(sulh.length)} />
        <Kpi icon={Scale} label="شعبه خصوصی" value={toFaDigits(disputes.length)} />
      </div>

      {role === "judiciary" && <JudiciaryStrip />}
      {role === "office" && <OfficeStrip />}
      {role === "mediator" && <MediatorStrip />}
      {role === "committee" && <CommitteeStrip />}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold">پرونده‌های جاری</h2>
            <Link to="/app/cases" className="text-sm text-teal">
              همه
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {cases.map((c) => (
              <li key={c.id} className="py-3">
                <Link to="/app/cases/$id" params={{ id: c.id }} className="block">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{c.title}</p>
                    <TrackBadge track={c.track} />
                    <StatusBadge status={c.status} />
                  </div>
                  <p className="mt-1 text-sm text-muted">{c.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-paper-2 p-5">
          <h2 className="font-semibold">مهلت‌های نزدیک</h2>
          <ul className="mt-4 space-y-3">
            {deadlines.map((n) => {
              const d = daysUntil(n.deadline!);
              return (
                <li key={n.id} className="rounded-md bg-paper p-3">
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {formatJalali(n.deadline!)} · {d < 0 ? "گذشته" : `${toFaDigits(d)} روز مانده`}
                  </p>
                </li>
              );
            })}
          </ul>
          <Link to="/app/sana" className="mt-4 inline-block text-sm text-teal">
            صندوق ثنا
          </Link>
        </section>
      </div>
    </div>
  );
}

function Kpi({ icon: Icon, label, value }: { icon: typeof Scale; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-paper-2 p-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-semibold leading-none tabular-nums">{value}</p>
        <p className="mt-1.5 truncate text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}

function JudiciaryStrip() {
  return (
    <div className="mt-6 rounded-lg bg-navy p-5 text-paper">
      <p className="text-xs text-paper/50">نمای شریک قضایی</p>
      <p className="mt-1 text-sm leading-7 text-paper/85">
        درخواست شعبه خصوصی از شبکه دفاتر ثبت می‌شود و ابلاغ از کانال ثنا به طرفین می‌رسد. صلح و سازش با هماهنگی معاونت حل
        اختلاف استان قابلیت ضمانت اجرایی دارد.
      </p>
    </div>
  );
}

function OfficeStrip() {
  return (
    <div className="mt-6 rounded-lg border border-line bg-cream p-5">
      <p className="text-xs text-muted">نمای دفتر نمایندگی</p>
      <p className="mt-1 text-sm leading-7">
        سهم مؤسسه مرکزی از درآمد دفتر ۴۰٪ و سهم دفتر ۶۰٪ است. هر دفتر شخصیت حقوقی مستقل، بیمه مسئولیت حرفه‌ای و نظارت مستمر
        دارد.
      </p>
    </div>
  );
}

function MediatorStrip() {
  return (
    <div className="mt-6 rounded-lg border border-teal/25 bg-teal/8 p-5">
      <p className="text-xs text-teal">نمای ریش‌سفید</p>
      <p className="mt-1 text-sm leading-7 text-ink">
        شما وکیل نیستید و مشاوره حقوقی رسمی ارائه نمی‌کنید. کار شما میانجی‌گری برای سازش‌نامه است.
      </p>
    </div>
  );
}

function CommitteeStrip() {
  return (
    <div className="mt-6 rounded-lg border border-line bg-paper-2 p-5">
      <p className="text-xs text-muted">نمای کمیته حقوقی</p>
      <p className="mt-1 text-sm leading-7">
        مسائل مستحدثه حسب مورد و موقعیت زمانی و مکانی به کمیته ارجاع می‌شود تا رویه واحد برای دفاتر صادر گردد.
      </p>
    </div>
  );
}
