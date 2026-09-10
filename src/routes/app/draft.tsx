import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Label, Select, Textarea } from "@/components/ui/field";
import { draftDocument } from "@/lib/legal-ai";

export const Route = createFileRoute("/app/draft")({ component: DraftPage });

const KINDS = ["اظهارنامه", "سازش‌نامه", "دادخواست", "لایحه", "قرارداد ساده", "وکالتنامه داخلی دفتر"];

function DraftPage() {
  const [kind, setKind] = useState(KINDS[0]);
  const [facts, setFacts] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run() {
    if (facts.trim().length < 8) {
      setError("وقایع را کامل‌تر بنویسید.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await draftDocument({ data: { kind, facts } });
      if (!res.ok) setError(res.error);
      else setOut(res.text);
    } catch {
      setError("تولید پیش‌نویس ممکن نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rise mx-auto max-w-3xl">
      <PageHeader
        kicker="تولید سند"
        title="پیش‌نویس هوشمند"
        description="خروجی پیش‌نویس غیررسمی است و باید توسط کمیته حقوقی یا وکیل واجد صلاحیت بازبینی شود."
      />
      <div className="rounded-xl border border-line bg-paper-2 p-5">
        <Label>نوع سند</Label>
        <Select value={kind} onChange={(e) => setKind(e.target.value)}>
          {KINDS.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </Select>
        <Label className="mt-4">وقایع</Label>
        <Textarea value={facts} onChange={(e) => setFacts(e.target.value)} placeholder="طرفین، خواسته، مستندات…" />
        {error && <p className="mt-2 text-sm text-danger">{error}</p>}
        <Button className="mt-4" onClick={run} disabled={loading}>
          {loading ? "در حال تنظیم…" : "تولید پیش‌نویس"}
        </Button>
      </div>
      {out && (
        <article className="mt-5 whitespace-pre-wrap rounded-xl border border-line bg-paper-2 p-5 text-sm leading-7">
          {out}
        </article>
      )}
    </div>
  );
}
