import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Landmark, Scale, Shield, Waypoints } from "lucide-react";
import { Mark } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <div className="paper-grid min-h-dvh text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2.5">
          <Mark />
          <div>
            <p className="text-sm font-semibold">زندگی</p>
            <p className="text-[11px] text-muted">فاز پرواز حقوقی</p>
          </div>
        </div>
        <Link to="/app">
          <Button size="sm">ورود به داشبورد</Button>
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20">
        <p className="rise mb-4 inline-flex rounded-full border border-line bg-paper-2 px-3 py-1 text-xs text-muted">
          همسو با سند تحول و تعالی قوه قضائیه — سکوهای خصوصی و هوش مصنوعی
        </p>
        <h1 className="rise max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          داشبورد امور محرمانه و اولویت‌دار زندگی
        </h1>
        <p className="rise mt-5 max-w-2xl text-base leading-8 text-muted">
          شهروند موضوع را به زبان طبیعی می‌گوید؛ سامانه مسیر حل، مدارک لازم و مهلت قانونی را مرحله‌به‌مرحله نشان می‌دهد.
          فاز اول حقوقی است: مشاوره هوشمند، صلح و سازش با ریش‌سفید، و حل اختلاف بخش خصوصی با ابلاغ از ثنا.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/app/new">
            <Button size="lg">
              طرح موضوع تازه
              <ArrowLeft className="size-4" />
            </Button>
          </Link>
          <Link to="/app/company">
            <Button size="lg" variant="outline">
              پیش‌نویس اساسنامه
            </Button>
          </Link>
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          <PathCard
            icon={Scale}
            title="مشاوره حقوقی"
            text="نظر مشورتی ارزان و هوشمند. رابطه وکالت ایجاد نمی‌کند و جایگزین رأی مرجع صالح نیست."
          />
          <PathCard
            icon={Waypoints}
            title="صلح و سازش"
            text="ظرفیت ریش‌سفیدان حوزه‌های خانواده، همسایگی، کار و قرارداد. آیین جدا از مشاوره و وکالت؛ سازش‌نامه با ضمانت اجرایی معاونت حل اختلاف استان."
          />
          <PathCard
            icon={Landmark}
            title="حل اختلاف بخش خصوصی"
            text="درخواست شعبه از شبکه دفاتر؛ ابلاغ طرفین از ثنا. آغاز حضور بخش خصوصی در حل اختلاف با هوش مصنوعی."
          />
          <PathCard
            icon={Shield}
            title="وکالت"
            text="فقط وقتی دادرسی رسمی لازم است. معرفی از دفتر نمایندگی دارای شخصیت حقوقی مستقل و بیمه مسئولیت حرفه‌ای."
          />
        </section>

        <section className="mt-14 grid gap-6 rounded-xl bg-navy p-8 text-paper md:grid-cols-3">
          <Stat k="کاهش اطاله" v="ارجاع پیش از دادگاه" />
          <Stat k="پل ارتباطی" v="شهروند و دستگاه قضایی" />
          <Stat k="فاز یک" v="پنج دفتر آزمایشی" />
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-line bg-paper-2 p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold">جایگاه در نظام قضایی</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>ارائه خدمت به قوه قضائیه به‌صورت API، مطابق سند تحول.</li>
              <li>هدایت اختلافات به داوری، صلح و سازش برای کاهش پرونده غیرضروری.</li>
              <li>مرکز ارجاع هوشمند به داوری و شعبه خصوصی.</li>
              <li>کمیته حقوقی برای مسائل مستحدثه حسب زمان و مکان.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-paper-2 p-6">
            <h2 className="text-lg font-semibold">حضور رسمی</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              مدیریت ارشد پروژه: سید محمود میرکمالی. حضور رسمی در ساختار: خانم معین. سمت قضایی در عناوین رسمی درج نمی‌شود.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              هماهنگی با معاونت حل اختلاف استان برای ضمانت اجرایی سازش‌نامه‌ها در نقشه راه فاز یک پیش‌بینی شده است.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function PathCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Scale;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]">
      <Icon className="mb-3 size-5 text-teal" />
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-xs text-paper/50">{k}</p>
      <p className="mt-1 text-lg font-medium">{v}</p>
    </div>
  );
}
