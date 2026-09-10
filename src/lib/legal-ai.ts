import { createServerFn } from "@tanstack/react-start";
import type { AiAnalysis, Domain, Track } from "./types";

const SYSTEM = `شما دستیار حقوقی پلتفرم «داشبورد زندگی» هستید؛ سامانه خصوصی همسو با سند تحول قضایی ایران.
قوانین سخت:
- به فارسی رسمی و دقیق پاسخ دهید.
- مشاوره شما وکالت نیست و رأی مرجع صالح نیست.
- سه مسیر را خلط نکنید: ۱) مشاوره حقوقی (نظر مشورتی) ۲) صلح و سازش با ریش‌سفید (میانجی‌گری؛ خروجی سازش‌نامه؛ قابلیت ضمانت اجرایی با معاونت حل اختلاف استان) ۳) حل اختلاف شعبه بخش خصوصی از طریق ثنا ۴) وکالت توسط وکیل دادگستری.
- صلح و سازش را برای اختلافات غیرکیفری، خانوادگی، همسایگی، قراردادی قابل سازش پیشنهاد دهید.
- حل اختلاف خصوصی را برای چک، مطالبات، اختلافات نیازمند ابلاغ رسمی پیشنهاد دهید.
- وکالت را وقتی دادرسی رسمی یا اقدام اجرایی فوری لازم است پیشنهاد دهید.
- مسائل مستحدثه را به کمیته حقوقی ارجاع دهید، نه اینکه قطعی اعلام کنید.
- اگر اطلاعات ناکافی است، سؤال بپرسید.
- هیچ وعده پیروزی در دادگاه ندهید.`;

async function complete(messages: { role: "system" | "user" | "assistant"; content: string }[], maxTokens = 900) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: false as const, error: "دستیار هوشمند در این محیط در دسترس نیست." };

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      messages,
      max_tokens: maxTokens,
      temperature: 0.3,
    }),
  });
  if (!res.ok) return { ok: false as const, error: `خطای خدمت هوش مصنوعی (${res.status})` };
  const body = (await res.json()) as { choices: { message: { content: string } }[] };
  return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
}

const DOMAIN_KEYS: Domain[] = [
  "family",
  "inheritance",
  "commercial",
  "labor",
  "property",
  "neighbor",
  "contract",
  "check",
  "other",
];
const TRACK_KEYS: Track[] = ["consult", "sulh", "dispute", "advocacy"];

function localAnalyze(text: string): AiAnalysis {
  const t = text;
  let domain: Domain = "other";
  if (/چک|سفته|برات|صیاد/.test(t)) domain = "check";
  else if (/مهریه|نفقه|طلاق|حضانت|زوج|زوجه/.test(t)) domain = "family";
  else if (/ارث|وراثت|وصیت|انحصار/.test(t)) domain = "inheritance";
  else if (/همسایه|دیوار|مشاع|پلاک/.test(t)) domain = "neighbor";
  else if (/اخراج|حقوق معوق|کارگر|بیمه بیکاری/.test(t)) domain = "labor";
  else if (/پیمان|ساختمان|مبایعه‌نامه|سند رسمی|ملک/.test(t)) domain = "property";
  else if (/قرارداد|فسخ|تخلف/.test(t)) domain = "contract";
  else if (/شرکت|تجارت|شریک/.test(t)) domain = "commercial";

  const sulhSuitable = ["family", "neighbor", "inheritance", "contract", "labor"].includes(domain);
  const disputeSuitable = ["check", "commercial", "contract", "labor", "property"].includes(domain);
  let track: Track = "consult";
  if (domain === "check") track = "dispute";
  else if (sulhSuitable) track = "sulh";
  else if (disputeSuitable) track = "dispute";
  if (/وکیل|دادگاه|دادخواست|اجرائیه/.test(t) && !sulhSuitable) track = "advocacy";

  const reasonMap: Record<Track, string> = {
    consult: "ابتدا نیاز به روشن شدن موضوع و مدارک است؛ هنوز برای ارجاع رسمی زود است.",
    sulh: "ماهیت اختلاف سازش‌پذیر است و ورود ریش‌سفید می‌تواند از طرح دعوای فرسایشی جلوگیری کند. این مسیر وکالت نیست.",
    dispute: "موضوع نیازمند تعیین شعبه و ابلاغ رسمی است؛ بخش خصوصی می‌تواند شعبه حل اختلاف تخصیص دهد و از ثنا ابلاغ شود.",
    advocacy: "اقدام اجرایی یا دادرسی رسمی محتمل است؛ ارجاع به وکیل دادگستری مناسب‌تر است.",
  };

  return {
    domain,
    track,
    summary: t.trim().slice(0, 280),
    reason: reasonMap[track],
    nextSteps:
      track === "sulh"
        ? ["انتخاب ریش‌سفید حوزه مربوط", "دعوت طرف مقابل به جلسه سازش", "تنظیم سازش‌نامه در صورت توافق", "ارسال به معاونت حل اختلاف استان برای ضمانت اجرایی"]
        : track === "dispute"
          ? ["تودیع مدارک کلیدی", "درخواست شعبه از دفتر نمایندگی شهر", "ابلاغ طرفین از ثنا", "حضور در جلسه شعبه خصوصی"]
          : track === "advocacy"
            ? ["اتصال به دفتر نمایندگی برای معرفی وکیل", "تهیه دادخواست", "پیگیری مهلت‌های قانونی"]
            : ["طرح پرسش دقیق‌تر", "بارگذاری مدارک", "تعیین مسیر پس از تکمیل اطلاعات"],
    documents:
      domain === "check"
        ? ["اصل چک", "گواهی عدم پرداخت", "مدارک هویت"]
        : domain === "family"
          ? ["عقدنامه", "شناسنامه طرفین", "مستند مطالبات"]
          : ["مدارک هویت", "مستندات مرتبط با موضوع"],
    deadlines: track === "dispute" ? ["رعایت مهلت واخواهی و ارائه اصل سند"] : ["ثبت موضوع پیش از انقضای مرور زمان احتمالی"],
    sulhSuitable,
    disputeSuitable,
  };
}

function parseAnalysis(text: string, fallback: AiAnalysis): AiAnalysis {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return { ...fallback, reason: text.slice(0, 500) || fallback.reason };
  try {
    const raw = JSON.parse(jsonMatch[0]) as Partial<AiAnalysis> & { domain?: string; track?: string };
    const domain = DOMAIN_KEYS.includes(raw.domain as Domain) ? (raw.domain as Domain) : fallback.domain;
    const track = TRACK_KEYS.includes(raw.track as Track) ? (raw.track as Track) : fallback.track;
    return {
      domain,
      track,
      summary: raw.summary || fallback.summary,
      reason: raw.reason || fallback.reason,
      nextSteps: Array.isArray(raw.nextSteps) && raw.nextSteps.length ? raw.nextSteps : fallback.nextSteps,
      documents: Array.isArray(raw.documents) && raw.documents.length ? raw.documents : fallback.documents,
      deadlines: Array.isArray(raw.deadlines) && raw.deadlines.length ? raw.deadlines : fallback.deadlines,
      sulhSuitable: Boolean(raw.sulhSuitable ?? fallback.sulhSuitable),
      disputeSuitable: Boolean(raw.disputeSuitable ?? fallback.disputeSuitable),
    };
  } catch {
    return { ...fallback, reason: text.slice(0, 500) };
  }
}

export const analyzeMatter = createServerFn({ method: "POST" })
  .validator((input: { text: string }) => input)
  .handler(async ({ data }) => {
    const local = localAnalyze(data.text);
    const result = await complete([
      { role: "system", content: SYSTEM },
      {
        role: "user",
        content: `موضوع شهروند:\n${data.text}\n\nفقط یک JSON معتبر برگردان با کلیدهای:
domain (یکی از: family, inheritance, commercial, labor, property, neighbor, contract, check, other),
track (یکی از: consult, sulh, dispute, advocacy),
summary, reason, nextSteps (آرایه فارسی), documents (آرایه), deadlines (آرایه), sulhSuitable (boolean), disputeSuitable (boolean).
بدون متن اضافه.`,
      },
    ]);
    if (!result.ok) return { ok: true as const, analysis: local, source: "local" as const, warning: result.error };
    return { ok: true as const, analysis: parseAnalysis(result.text, local), source: "ai" as const };
  });

export const consultChat = createServerFn({ method: "POST" })
  .validator((input: { messages: { role: "user" | "assistant"; content: string }[] }) => input)
  .handler(async ({ data }) => {
    const result = await complete([
      { role: "system", content: SYSTEM + "\nپاسخ را کوتاه، مرحله‌ای و عملی بنویس. در پایان مسیر پیشنهادی را در یک خط مشخص کن." },
      ...data.messages.slice(-8).map((m) => ({ role: m.role, content: m.content })),
    ]);
    if (!result.ok) return result;
    return { ok: true as const, text: result.text };
  });

export const draftDocument = createServerFn({ method: "POST" })
  .validator((input: { kind: string; facts: string }) => input)
  .handler(async ({ data }) => {
    const result = await complete(
      [
        { role: "system", content: SYSTEM + "\nسند را به‌صورت پیش‌نویس حقوقی فارسی بنویس. جای امضا و هشدار «پیش‌نویس غیررسمی» را درج کن." },
        {
          role: "user",
          content: `نوع سند: ${data.kind}\nشرح وقایع:\n${data.facts}\nپیش‌نویس کامل بده.`,
        },
      ],
      1400,
    );
    return result;
  });
