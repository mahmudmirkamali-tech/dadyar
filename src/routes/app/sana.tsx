import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { daysUntil, formatJalali, toFaDigits } from "@/lib/jalali";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/sana")({ component: SanaPage });

const KIND: Record<string, string> = {
  notice: "اطلاعیه",
  summons: "احضاریه",
  deadline: "مهلت",
  ruling: "رأی",
  branch: "تعیین شعبه",
};

function SanaPage() {
  const notices = useAppStore((s) => s.sana);
  const mark = useAppStore((s) => s.markSanaRead);

  return (
    <div className="rise">
      <PageHeader
        kicker="اتصال سکو"
        title="ثنا و مهلت‌های قانونی"
        description="ابلاغ الکترونیک قضایی در داشبورد یکپارچه می‌شود تا مهلت احضاریه یا توقیف از دست نرود. تخصیص شعبه خصوصی نیز از همین کانال ابلاغ می‌گردد."
      />
      <div className="mb-4 rounded-lg border border-line bg-navy p-4 text-sm leading-7 text-paper">
        وضعیت اتصال: آزمایشی. در فاز ۲ اتصال عملیاتی به ثنا و ثبت اسناد تکمیل می‌شود. شماره‌های پیگیری در این نسخه نمونه
        عملیاتی برای نمایش جریان کار هستند.
      </div>
      <ul className="space-y-3">
        {notices.map((n) => {
          const d = n.deadline ? daysUntil(n.deadline) : null;
          return (
            <li
              key={n.id}
              className="rounded-xl border border-line bg-paper-2 p-4"
              onClick={() => mark(n.id)}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-medium">{n.title}</h2>
                <Badge tone={n.read ? "muted" : "warn"}>{n.read ? "خوانده" : "جدید"}</Badge>
                <Badge>{KIND[n.kind]}</Badge>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted">{n.body}</p>
              <p className="mt-2 text-xs text-muted">
                پیگیری {n.tracking} · {formatJalali(n.at)}
                {n.deadline && ` · مهلت ${formatJalali(n.deadline)} (${d !== null && d >= 0 ? `${toFaDigits(d)} روز` : "گذشته"})`}
              </p>
              {n.caseId && (
                <Link to="/app/cases/$id" params={{ id: n.caseId }} className="mt-2 inline-block text-sm text-teal">
                  پرونده
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
