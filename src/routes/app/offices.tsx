import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { toFaDigits } from "@/lib/jalali";
import { offices } from "@/lib/store";

export const Route = createFileRoute("/app/offices")({ component: OfficesPage });

function OfficesPage() {
  return (
    <div className="rise">
      <PageHeader
        kicker="فرانشیز — فاز یک"
        title="شبکه دفاتر نمایندگی"
        description="پوشش سراسری بدون سرمایه‌گذاری سنگین مرکزی. هر دفتر شخصیت حقوقی مستقل است، قرارداد فرانشیز محدوده جغرافیایی و فسخ دارد، و بیمه مسئولیت حرفه‌ای الزامی است."
      />
      <div className="mb-6 grid gap-3 rounded-xl bg-navy p-5 text-paper sm:grid-cols-3">
        <div>
          <p className="text-xs text-paper/50">سهم مؤسسه مرکزی</p>
          <p className="text-2xl font-semibold">۴۰٪</p>
        </div>
        <div>
          <p className="text-xs text-paper/50">سهم دفتر</p>
          <p className="text-2xl font-semibold">۶۰٪</p>
        </div>
        <div>
          <p className="text-xs text-paper/50">شهرهای آزمایشی</p>
          <p className="text-2xl font-semibold">{toFaDigits(offices.length)}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {offices.map((o) => (
          <article key={o.id} className="rounded-xl border border-line bg-paper-2 p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-medium">{o.title}</h2>
              <Badge tone="teal">آزمایشی</Badge>
            </div>
            <p className="mt-2 text-sm text-muted">{o.address}</p>
            <p className="mt-1 text-sm">مدیر: {o.manager}</p>
            <p className="mt-3 text-xs text-muted">
              ظرفیت {toFaDigits(o.capacity)} · فعال {toFaDigits(o.active)} · {o.phone}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
