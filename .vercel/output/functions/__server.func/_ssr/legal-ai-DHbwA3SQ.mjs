import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-ai-DHbwA3SQ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `شما دستیار حقوقی پلتفرم «داشبورد زندگی» هستید؛ سامانه خصوصی همسو با سند تحول قضایی ایران.
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
async function complete(messages, maxTokens = 900) {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "دستیار هوشمند در این محیط در دسترس نیست."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			messages,
			max_tokens: maxTokens,
			temperature: .3
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `خطای خدمت هوش مصنوعی (${res.status})`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
}
var DOMAIN_KEYS = [
	"family",
	"inheritance",
	"commercial",
	"labor",
	"property",
	"neighbor",
	"contract",
	"check",
	"other"
];
var TRACK_KEYS = [
	"consult",
	"sulh",
	"dispute",
	"advocacy"
];
function localAnalyze(text) {
	const t = text;
	let domain = "other";
	if (/چک|سفته|برات|صیاد/.test(t)) domain = "check";
	else if (/مهریه|نفقه|طلاق|حضانت|زوج|زوجه/.test(t)) domain = "family";
	else if (/ارث|وراثت|وصیت|انحصار/.test(t)) domain = "inheritance";
	else if (/همسایه|دیوار|مشاع|پلاک/.test(t)) domain = "neighbor";
	else if (/اخراج|حقوق معوق|کارگر|بیمه بیکاری/.test(t)) domain = "labor";
	else if (/پیمان|ساختمان|مبایعه‌نامه|سند رسمی|ملک/.test(t)) domain = "property";
	else if (/قرارداد|فسخ|تخلف/.test(t)) domain = "contract";
	else if (/شرکت|تجارت|شریک/.test(t)) domain = "commercial";
	const sulhSuitable = [
		"family",
		"neighbor",
		"inheritance",
		"contract",
		"labor"
	].includes(domain);
	const disputeSuitable = [
		"check",
		"commercial",
		"contract",
		"labor",
		"property"
	].includes(domain);
	let track = "consult";
	if (domain === "check") track = "dispute";
	else if (sulhSuitable) track = "sulh";
	else if (disputeSuitable) track = "dispute";
	if (/وکیل|دادگاه|دادخواست|اجرائیه/.test(t) && !sulhSuitable) track = "advocacy";
	return {
		domain,
		track,
		summary: t.trim().slice(0, 280),
		reason: {
			consult: "ابتدا نیاز به روشن شدن موضوع و مدارک است؛ هنوز برای ارجاع رسمی زود است.",
			sulh: "ماهیت اختلاف سازش‌پذیر است و ورود ریش‌سفید می‌تواند از طرح دعوای فرسایشی جلوگیری کند. این مسیر وکالت نیست.",
			dispute: "موضوع نیازمند تعیین شعبه و ابلاغ رسمی است؛ بخش خصوصی می‌تواند شعبه حل اختلاف تخصیص دهد و از ثنا ابلاغ شود.",
			advocacy: "اقدام اجرایی یا دادرسی رسمی محتمل است؛ ارجاع به وکیل دادگستری مناسب‌تر است."
		}[track],
		nextSteps: track === "sulh" ? [
			"انتخاب ریش‌سفید حوزه مربوط",
			"دعوت طرف مقابل به جلسه سازش",
			"تنظیم سازش‌نامه در صورت توافق",
			"ارسال به معاونت حل اختلاف استان برای ضمانت اجرایی"
		] : track === "dispute" ? [
			"تودیع مدارک کلیدی",
			"درخواست شعبه از دفتر نمایندگی شهر",
			"ابلاغ طرفین از ثنا",
			"حضور در جلسه شعبه خصوصی"
		] : track === "advocacy" ? [
			"اتصال به دفتر نمایندگی برای معرفی وکیل",
			"تهیه دادخواست",
			"پیگیری مهلت‌های قانونی"
		] : [
			"طرح پرسش دقیق‌تر",
			"بارگذاری مدارک",
			"تعیین مسیر پس از تکمیل اطلاعات"
		],
		documents: domain === "check" ? [
			"اصل چک",
			"گواهی عدم پرداخت",
			"مدارک هویت"
		] : domain === "family" ? [
			"عقدنامه",
			"شناسنامه طرفین",
			"مستند مطالبات"
		] : ["مدارک هویت", "مستندات مرتبط با موضوع"],
		deadlines: track === "dispute" ? ["رعایت مهلت واخواهی و ارائه اصل سند"] : ["ثبت موضوع پیش از انقضای مرور زمان احتمالی"],
		sulhSuitable,
		disputeSuitable
	};
}
function parseAnalysis(text, fallback) {
	const jsonMatch = text.match(/\{[\s\S]*\}/);
	if (!jsonMatch) return {
		...fallback,
		reason: text.slice(0, 500) || fallback.reason
	};
	try {
		const raw = JSON.parse(jsonMatch[0]);
		return {
			domain: DOMAIN_KEYS.includes(raw.domain) ? raw.domain : fallback.domain,
			track: TRACK_KEYS.includes(raw.track) ? raw.track : fallback.track,
			summary: raw.summary || fallback.summary,
			reason: raw.reason || fallback.reason,
			nextSteps: Array.isArray(raw.nextSteps) && raw.nextSteps.length ? raw.nextSteps : fallback.nextSteps,
			documents: Array.isArray(raw.documents) && raw.documents.length ? raw.documents : fallback.documents,
			deadlines: Array.isArray(raw.deadlines) && raw.deadlines.length ? raw.deadlines : fallback.deadlines,
			sulhSuitable: Boolean(raw.sulhSuitable ?? fallback.sulhSuitable),
			disputeSuitable: Boolean(raw.disputeSuitable ?? fallback.disputeSuitable)
		};
	} catch {
		return {
			...fallback,
			reason: text.slice(0, 500)
		};
	}
}
var analyzeMatter_createServerFn_handler = createServerRpc({
	id: "1b2161ab14979aa152ad18e900d119f3f6e758eae6c730d93b8f206cee0ad40d",
	name: "analyzeMatter",
	filename: "src/lib/legal-ai.ts"
}, (opts) => analyzeMatter.__executeServer(opts));
var analyzeMatter = createServerFn({ method: "POST" }).validator((input) => input).handler(analyzeMatter_createServerFn_handler, async ({ data }) => {
	const local = localAnalyze(data.text);
	const result = await complete([{
		role: "system",
		content: SYSTEM
	}, {
		role: "user",
		content: `موضوع شهروند:\n${data.text}\n\nفقط یک JSON معتبر برگردان با کلیدهای:
domain (یکی از: family, inheritance, commercial, labor, property, neighbor, contract, check, other),
track (یکی از: consult, sulh, dispute, advocacy),
summary, reason, nextSteps (آرایه فارسی), documents (آرایه), deadlines (آرایه), sulhSuitable (boolean), disputeSuitable (boolean).
بدون متن اضافه.`
	}]);
	if (!result.ok) return {
		ok: true,
		analysis: local,
		source: "local",
		warning: result.error
	};
	return {
		ok: true,
		analysis: parseAnalysis(result.text, local),
		source: "ai"
	};
});
var consultChat_createServerFn_handler = createServerRpc({
	id: "61ba1250a496ebd3a1443c7e66563a6e16f0742d4bdc133f861b793ac283b83d",
	name: "consultChat",
	filename: "src/lib/legal-ai.ts"
}, (opts) => consultChat.__executeServer(opts));
var consultChat = createServerFn({ method: "POST" }).validator((input) => input).handler(consultChat_createServerFn_handler, async ({ data }) => {
	const result = await complete([{
		role: "system",
		content: SYSTEM + "\nپاسخ را کوتاه، مرحله‌ای و عملی بنویس. در پایان مسیر پیشنهادی را در یک خط مشخص کن."
	}, ...data.messages.slice(-8).map((m) => ({
		role: m.role,
		content: m.content
	}))]);
	if (!result.ok) return result;
	return {
		ok: true,
		text: result.text
	};
});
var draftDocument_createServerFn_handler = createServerRpc({
	id: "78b18d8949e4fc93b1dc3951f8c9f60881289c9c912dc26c7fe30f766c3b72c6",
	name: "draftDocument",
	filename: "src/lib/legal-ai.ts"
}, (opts) => draftDocument.__executeServer(opts));
var draftDocument = createServerFn({ method: "POST" }).validator((input) => input).handler(draftDocument_createServerFn_handler, async ({ data }) => {
	return await complete([{
		role: "system",
		content: SYSTEM + "\nسند را به‌صورت پیش‌نویس حقوقی فارسی بنویس. جای امضا و هشدار «پیش‌نویس غیررسمی» را درج کن."
	}, {
		role: "user",
		content: `نوع سند: ${data.kind}\nشرح وقایع:\n${data.facts}\nپیش‌نویس کامل بده.`
	}], 1400);
});
//#endregion
export { analyzeMatter_createServerFn_handler, consultChat_createServerFn_handler, draftDocument_createServerFn_handler };
