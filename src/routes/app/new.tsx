import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { TrackPanel } from "@/components/track-panel";
import { Button } from "@/components/ui/button";
import { Label, Select, Textarea } from "@/components/ui/field";
import { analyzeMatter } from "@/lib/legal-ai";
import { CITIES, DOMAIN_LABEL, TRACK_LABEL, type AiAnalysis, type Track } from "@/lib/types";
import { matchElders, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/new")({ component: NewMatter });

function NewMatter() {
  const navigate = useNavigate();
  const createFromAnalysis = useAppStore((s) => s.createFromAnalysis);
  const [text, setText] = useState("");
  const [city, setCity] = useState("تهران");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AiAnalysis | null>(null);
  const [track, setTrack] = useState<Track | undefined>();
  const [elderId, setElderId] = useState<string | undefined>();

  async function analyze() {
    if (text.trim().length < 8) {
      setError("موضوع را کمی کامل‌تر بنویسید.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await analyzeMatter({ data: { text } });
      if (!res.ok) {
        setError("warning" in res ? String(res.warning) : "تحلیل انجام نشد.");
        return;
      }
      setAnalysis(res.analysis);
      setTrack(res.analysis.track);
      const ranked = matchElders(res.analysis.domain, city);
      setElderId(ranked[0]?.id);
    } catch {
      setError("ارتباط با دستیار هوشمند برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  function submit() {
    if (!analysis || !track) return;
    const { caseId } = createFromAnalysis({
      title: text.trim().slice(0, 72),
      summary: analysis.summary || text.trim(),
      city,
      analysis,
      track,
      elderId,
    });
    if (track === "consult") navigate({ to: "/app/consult" });
    else if (track === "sulh") navigate({ to: "/app/sulh" });
    else if (track === "dispute") navigate({ to: "/app/dispute" });
    else navigate({ to: "/app/cases/$id", params: { id: caseId } });
  }

  const elders = analysis ? matchElders(analysis.domain, city) : [];

  return (
    <div className="rise mx-auto max-w-3xl">
      <PageHeader
        kicker="پذیرش موضوع"
        title="موضوع را به زبان خودتان بگویید"
        description="سامانه تشخیص می‌دهد مسیر مناسب مشاوره است، صلح و سازش، شعبه حل اختلاف خصوصی، یا وکالت. این چهار مسیر مخلوط نمی‌شوند."
      />

      <div className="rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]">
        <Label htmlFor="matter">شرح موضوع</Label>
        <Textarea
          id="matter"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="مثلاً: همسایه دیوار مشاع را خراب کرده… یا چک شرکت برگشت خورده…"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="city">شهر</Label>
            <Select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-danger">{error}</p>}
        <Button className="mt-4" onClick={analyze} disabled={loading}>
          {loading ? "در حال تحلیل…" : "تحلیل هوشمند مسیر"}
        </Button>
      </div>

      {analysis && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-line bg-paper-2 p-5">
            <p className="text-xs text-teal">تشخیص موضوع: {DOMAIN_LABEL[analysis.domain]}</p>
            <p className="mt-2 text-sm leading-7">{analysis.reason}</p>
            <ul className="mt-3 list-disc pr-5 text-sm leading-7 text-muted">
              {analysis.nextSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">مدارک پیشنهادی: {analysis.documents.join("، ")}</p>
          </div>

          <TrackPanel active={track} recommended={analysis.track} onSelect={setTrack} />

          {track === "sulh" && (
            <div className="rounded-xl border border-teal/30 bg-teal/5 p-5">
              <h3 className="font-medium">انتخاب ریش‌سفید</h3>
              <p className="mt-1 text-sm leading-6 text-muted">
                ریش‌سفید وکیل نیست و حق‌الوکاله نمی‌گیرد. خروجی جلسه سازش‌نامه است.
              </p>
              <div className="mt-3 space-y-2">
                {elders.slice(0, 4).map((el) => (
                  <label
                    key={el.id}
                    className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-paper-2 p-3"
                  >
                    <input
                      type="radio"
                      name="elder"
                      checked={elderId === el.id}
                      onChange={() => setElderId(el.id)}
                      className="mt-1"
                    />
                    <span>
                      <span className="block text-sm font-medium">{el.name}</span>
                      <span className="text-xs text-muted">
                        {el.domainsLabel} · {el.city} · تأیید: {el.approvedBy}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {track === "dispute" && (
            <div className="rounded-xl border border-line bg-cream p-5 text-sm leading-7">
              با تأیید شما، از دفتر نمایندگی {city} شعبه حل اختلاف بخش خصوصی درخواست می‌شود و ابلاغ طرفین از مسیر ثنا صادر
              می‌گردد. این آغاز ورود بخش خصوصی به حل اختلاف است.
            </div>
          )}

          <Button onClick={submit} disabled={!track}>
            ثبت در مسیر {track ? TRACK_LABEL[track] : "انتخاب‌شده"}
          </Button>
        </div>
      )}
    </div>
  );
}
