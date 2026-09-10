import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { V as require_react, _ as createRootRoute, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seed-CR81BKlf.js
var citizen = {
	name: "سارا احمدی",
	nationalId: "۰۰۸۹۳۴۱۲۵۶",
	city: "تهران",
	phone: "۰۹۱۲۳۴۵۶۷۸۹"
};
var offices = [
	{
		id: "off-teh",
		city: "تهران",
		title: "دفتر نمایندگی تهران — آزمایشی",
		manager: "خانم ناهید معین",
		address: "خیابان خردمند جنوبی، پلاک ۴۲",
		capacity: 40,
		active: 18,
		phone: "۰۲۱۸۸۳۳۰۰۱۲",
		status: "pilot"
	},
	{
		id: "off-msh",
		city: "مشهد",
		title: "دفتر نمایندگی مشهد — آزمایشی",
		manager: "مهدی صالحی",
		address: "بلوار سجاد، نبش دانش‌غربی",
		capacity: 24,
		active: 9,
		phone: "۰۵۱۳۷۶۶۱۰۲۰",
		status: "pilot"
	},
	{
		id: "off-esf",
		city: "اصفهان",
		title: "دفتر نمایندگی اصفهان — آزمایشی",
		manager: "لیلا جعفری",
		address: "خیابان چهارباغ بالا",
		capacity: 20,
		active: 7,
		phone: "۰۳۱۳۶۲۲۸۴۱۰",
		status: "pilot"
	},
	{
		id: "off-shr",
		city: "شیراز",
		title: "دفتر نمایندگی شیراز — آزمایشی",
		manager: "کامران رستمی",
		address: "خیابان زند، ساختمان عدل",
		capacity: 16,
		active: 5,
		phone: "۰۷۱۳۲۳۴۵۶۰۰",
		status: "pilot"
	},
	{
		id: "off-tbz",
		city: "تبریز",
		title: "دفتر نمایندگی تبریز — آزمایشی",
		manager: "رؤیا نیکنام",
		address: "ولیعصر، برج دادگستر",
		capacity: 16,
		active: 4,
		phone: "۰۴۱۳۳۳۰۱۲۴۵",
		status: "pilot"
	}
];
var elders = [
	{
		id: "el-nouri",
		name: "حاج عبدالله نوری",
		domain: "family",
		domainsLabel: "خانواده، مهریه، نفقه",
		city: "تهران",
		years: 42,
		bio: "چهل سال میانجی‌گری در اختلافات خانوادگی؛ مورد تأیید معاونت حل اختلاف استان تهران.",
		approvedBy: "معاونت حل اختلاف استان تهران",
		sessions: 610,
		settlementRate: 78
	},
	{
		id: "el-kamali",
		name: "دکتر فرهاد کمالی",
		domain: "contract",
		domainsLabel: "قراردادهای تجاری و شرکت‌ها",
		city: "تهران",
		years: 24,
		bio: "سابقه داوری اتاق بازرگانی و سازش در اختلافات قراردادی متوسط.",
		approvedBy: "کمیته حقوقی مؤسسه زندگی",
		sessions: 190,
		settlementRate: 71
	},
	{
		id: "el-mosavi",
		name: "بانو زهرا موسوی",
		domain: "family",
		domainsLabel: "امور زنان و خانواده",
		city: "مشهد",
		years: 19,
		bio: "تمرکز بر سازش محرمانه در دعاوی خانوادگی با حفظ کرامت طرفین.",
		approvedBy: "معاونت حل اختلاف استان خراسان رضوی",
		sessions: 240,
		settlementRate: 81
	},
	{
		id: "el-bagheri",
		name: "استاد کریم باقری",
		domain: "labor",
		domainsLabel: "کار، بیمه، اخراج",
		city: "اصفهان",
		years: 31,
		bio: "ریش‌سفید حوزه کارگری؛ آشنا با رویه هیئت‌های تشخیص و حل اختلاف کار.",
		approvedBy: "کمیته حقوقی مؤسسه زندگی",
		sessions: 320,
		settlementRate: 69
	},
	{
		id: "el-rezaei",
		name: "شیخ محمود رضایی",
		domain: "neighbor",
		domainsLabel: "املاک، دیوار مشاع، همسایگی",
		city: "شیراز",
		years: 38,
		bio: "سازش در اختلافات محلی و ثبتی محله‌محور؛ مورد وثوق دفاتر اسناد.",
		approvedBy: "معاونت حل اختلاف استان فارس",
		sessions: 450,
		settlementRate: 84
	},
	{
		id: "el-taheri",
		name: "مهندس ناصر طاهری",
		domain: "property",
		domainsLabel: "پیمانکاری و ساخت‌وساز",
		city: "تبریز",
		years: 22,
		bio: "میانجی اختلافات پیمان و تأخیر تحویل در پروژه‌های ساختمانی.",
		approvedBy: "کمیته حقوقی مؤسسه زندگی",
		sessions: 110,
		settlementRate: 66
	}
];
var cases = [
	{
		id: "c-check",
		title: "مطالبه وجه چک برگشتی — پارس تجارت",
		summary: "یک فقره چک عهده بانک ملت به مبلغ یک میلیارد و دویست میلیون ریال برگشت شده است. صادرکننده شرکت پارس تجارت است.",
		domain: "check",
		track: "dispute",
		status: "dispute",
		city: "تهران",
		parties: ["سارا احمدی", "شرکت پارس تجارت"],
		createdAt: "2026-08-18T09:00:00.000Z",
		deadline: "2026-09-12T00:00:00.000Z",
		sanaTracking: "۱۴۰۵۰۸۲۲۰۰۸۴۱۲",
		branchId: "شعبه خصوصی ۲ تهران",
		officeId: "off-teh",
		events: [
			{
				id: "e1",
				at: "2026-08-18T09:00:00.000Z",
				kind: "created",
				title: "ثبت موضوع در داشبورد زندگی",
				detail: "تشخیص هوشمند: اسناد تجاری / مسیر حل اختلاف خصوصی."
			},
			{
				id: "e2",
				at: "2026-08-18T09:04:00.000Z",
				kind: "ai",
				title: "تحلیل مسیر",
				detail: "با توجه به مبلغ و وجود گواهی عدم پرداخت، ارجاع به شعبه خصوصی مناسب‌تر از سازش صرف است."
			},
			{
				id: "e3",
				at: "2026-08-19T11:20:00.000Z",
				kind: "branch",
				title: "تخصیص شعبه حل اختلاف بخش خصوصی",
				detail: "دفتر تهران — شعبه خصوصی ۲. ابلاغ از طریق ثنا صادر شد."
			},
			{
				id: "e4",
				at: "2026-08-20T08:12:00.000Z",
				kind: "sana",
				title: "ابلاغ ثنا به طرفین",
				detail: "شماره پیگیری ۱۴۰۵۰۸۲۲۰۰۸۴۱۲"
			}
		],
		documentIds: [
			"d-check",
			"d-cert",
			"d-id"
		]
	},
	{
		id: "c-wall",
		title: "اختلاف دیوار مشاع پلاک ۱۲۲۲",
		summary: "همسایه بدون رضایت، دیوار مشاع حیاط را تخریب و در محل پنجره نصب کرده است. موضوع قابلیت سازش محلی دارد.",
		domain: "neighbor",
		track: "sulh",
		status: "intake",
		city: "تهران",
		parties: ["سارا احمدی", "حسین کرمی"],
		createdAt: "2026-09-01T14:10:00.000Z",
		events: [{
			id: "w1",
			at: "2026-09-01T14:10:00.000Z",
			kind: "created",
			title: "ثبت موضوع",
			detail: "پیشنهاد سامانه: صلح و سازش با ریش‌سفید حوزه همسایگی."
		}, {
			id: "w2",
			at: "2026-09-01T14:12:00.000Z",
			kind: "ai",
			title: "ارزیابی سازش‌پذیری",
			detail: "اختلاف غیرکیفری، طرفین همسایه، سابقه خصومت شدید گزارش نشده. مناسب ریش‌سفید."
		}],
		documentIds: ["d-deed", "d-photo"]
	},
	{
		id: "c-mahr",
		title: "مطالبه مهریه و نفقه معوق",
		summary: "زوجه مهریه عندالمطالبه و نفقه شش ماه را مطالبه می‌کند. زوج آمادگی سازش مشروط دارد.",
		domain: "family",
		track: "sulh",
		status: "sulh",
		city: "تهران",
		parties: ["سارا احمدی", "رضا احمدی"],
		createdAt: "2026-07-22T10:00:00.000Z",
		deadline: "2026-09-18T00:00:00.000Z",
		elderId: "el-nouri",
		events: [
			{
				id: "m1",
				at: "2026-07-22T10:00:00.000Z",
				kind: "created",
				title: "پذیرش پرونده خانوادگی"
			},
			{
				id: "m2",
				at: "2026-07-24T16:00:00.000Z",
				kind: "sulh",
				title: "ارجاع به حاج عبدالله نوری",
				detail: "ریش‌سفید خانواده؛ جلسه اول برگزار شد. ادامه در ۱۸ شهریور."
			},
			{
				id: "m3",
				at: "2026-08-10T12:00:00.000Z",
				kind: "session",
				title: "جلسه سازش نخست",
				detail: "توافق اولیه بر تقسیط مهریه؛ نفقه در حال مذاکره."
			}
		],
		documentIds: ["d-nikah", "d-draft-sulh"]
	}
];
var documents = [
	{
		id: "d-check",
		title: "تصویر چک عهده بانک ملت",
		kind: "سند تجاری",
		caseId: "c-check",
		source: "upload",
		pages: 1,
		addedAt: "2026-08-18T09:01:00.000Z",
		summary: "چک به شماره ۷۴۴۲۱۹، مبلغ ۱٬۲۰۰٬۰۰۰٬۰۰۰ ریال، سررسید ۱۴۰۵/۰۵/۲۰."
	},
	{
		id: "d-cert",
		title: "گواهی عدم پرداخت",
		kind: "گواهی بانکی",
		caseId: "c-check",
		source: "upload",
		pages: 2,
		addedAt: "2026-08-18T09:02:00.000Z",
		summary: "صادر شده از شعبه بانک ملت کریمخان."
	},
	{
		id: "d-id",
		title: "کارت ملی و شناسنامه",
		kind: "هویت",
		source: "upload",
		pages: 2,
		addedAt: "2026-07-01T08:00:00.000Z",
		summary: "مدارک هویتی دارنده حساب داشبورد."
	},
	{
		id: "d-deed",
		title: "سند مالکیت پلاک ۱۲۲۲",
		kind: "سند رسمی",
		caseId: "c-wall",
		source: "upload",
		pages: 4,
		addedAt: "2026-09-01T14:11:00.000Z",
		summary: "ششدانگ یک واحد مسکونی، عرصه مشاع."
	},
	{
		id: "d-photo",
		title: "گزارش تصویری دیوار مشاع",
		kind: "مستند",
		caseId: "c-wall",
		source: "upload",
		pages: 3,
		addedAt: "2026-09-01T14:11:30.000Z",
		summary: "وضع موجود پس از تخریب و نصب پنجره."
	},
	{
		id: "d-nikah",
		title: "عقدنامه رسمی",
		kind: "سند نکاح",
		caseId: "c-mahr",
		source: "upload",
		pages: 2,
		addedAt: "2026-07-22T10:05:00.000Z",
		summary: "مهریه عندالمطالبه: ۱۴ سکه بهار آزادی."
	},
	{
		id: "d-draft-sulh",
		title: "پیش‌نویس سازش‌نامه مهریه",
		kind: "سازش‌نامه",
		caseId: "c-mahr",
		source: "draft",
		pages: 3,
		addedAt: "2026-08-11T09:00:00.000Z",
		summary: "تقسیط در ۱۲ ماه؛ در انتظار تأیید طرفین و معاونت حل اختلاف."
	},
	{
		id: "d-articles",
		title: "پیش‌نویس اساسنامه مؤسسه زندگی",
		kind: "اساسنامه",
		source: "draft",
		pages: 18,
		addedAt: "2026-09-04T07:00:00.000Z",
		summary: "نسخه مقدمه برای ثبت شخصیت حقوقی مؤسسه مرکزی و شبکه فرانشیز."
	}
];
var sanaNotices = [
	{
		id: "s1",
		title: "ابلاغ تعیین شعبه حل اختلاف خصوصی",
		kind: "branch",
		body: "پرونده مطالبه وجه چک به شعبه خصوصی ۲ دفتر تهران ارجاع شد. حضور در جلسه الزامی است.",
		at: "2026-08-20T08:12:00.000Z",
		deadline: "2026-09-12T00:00:00.000Z",
		caseId: "c-check",
		tracking: "۱۴۰۵۰۸۲۲۰۰۸۴۱۲",
		read: true
	},
	{
		id: "s2",
		title: "اخطار مهلت ارائه اصل چک",
		kind: "deadline",
		body: "اصل چک و گواهی عدم پرداخت باید تا مهلت مقرر در دفتر شعبه تودیع شود.",
		at: "2026-08-28T10:00:00.000Z",
		deadline: "2026-09-08T00:00:00.000Z",
		caseId: "c-check",
		tracking: "۱۴۰۵۰۸۲۸۰۰۹۱۰۰",
		read: false
	},
	{
		id: "s3",
		title: "احضاریه جلسه سازش خانوادگی",
		kind: "summons",
		body: "جلسه دوم صلح و سازش با حاج عبدالله نوری در دفتر تهران.",
		at: "2026-09-02T09:40:00.000Z",
		deadline: "2026-09-18T00:00:00.000Z",
		caseId: "c-mahr",
		tracking: "۱۴۰۵۰۹۰۲۰۰۴۴۱۸",
		read: false
	},
	{
		id: "s4",
		title: "اطلاعیه اتصال حساب ثنا",
		kind: "notice",
		body: "حساب ثنا شما به داشبورد زندگی متصل شد. ابلاغ‌های آتی به‌صورت یکپارچه نمایش داده می‌شود.",
		at: "2026-07-15T12:00:00.000Z",
		tracking: "۱۴۰۵۰۷۱۵۰۰۰۰۰۱",
		read: true
	},
	{
		id: "s5",
		title: "رأی سازش قابل اجرا — نمونه",
		kind: "ruling",
		body: "نمونه رأی سازش که پس از تأیید معاونت حل اختلاف استان قابلیت اجرا پیدا می‌کند.",
		at: "2026-06-01T08:00:00.000Z",
		tracking: "۱۴۰۵۰۶۰۱۰۰۱۱۱۱",
		read: true
	}
];
var sulhSessions = [{
	id: "su-mahr",
	caseId: "c-mahr",
	elderId: "el-nouri",
	title: "سازش مهریه و نفقه",
	domain: "family",
	status: "scheduled",
	scheduledAt: "2026-09-18T12:00:00.000Z",
	city: "تهران",
	notes: "توافق اولیه بر تقسیط مهریه. نفقه هنوز محل نزاع است."
}, {
	id: "su-wall",
	caseId: "c-wall",
	elderId: "el-rezaei",
	title: "سازش دیوار مشاع — در انتظار تأیید طرف مقابل",
	domain: "neighbor",
	status: "requested",
	city: "تهران",
	notes: "پیشنهاد ارجاع به ریش‌سفید حوزه همسایگی. طرف مقابل هنوز پاسخ نداده."
}];
var disputes = [{
	id: "dr-check",
	caseId: "c-check",
	officeId: "off-teh",
	branchLabel: "شعبه خصوصی ۲ تهران",
	city: "تهران",
	status: "notified",
	sanaTracking: "۱۴۰۵۰۸۲۲۰۰۸۴۱۲",
	createdAt: "2026-08-19T11:20:00.000Z",
	sessionAt: "2026-09-12T09:00:00.000Z"
}];
var committeeItems = [
	{
		id: "ci-1",
		title: "صلاحیت شعبه خصوصی در دعاوی چک پس از اصلاح قانون صدور چک",
		body: "با توجه به مسائل مستحدثه ناشی از سامانه صیاد و تغییرات صلاحیت، کمیته باید رویه واحد برای ارجاع به شعبه خصوصی تدوین کند.",
		status: "review",
		domain: "check",
		raisedAt: "2026-08-30T10:00:00.000Z",
		from: "دفتر تهران"
	},
	{
		id: "ci-2",
		title: "تفکیک حقوقی صلح و سازش از مشاوره و وکالت",
		body: "ضرورت آیین‌نامه داخلی: ریش‌سفید حق تنظیم دادخواست و دریافت حق‌الوکاله ندارد؛ خروجی صرفاً سازش‌نامه است.",
		status: "opinion",
		domain: "other",
		raisedAt: "2026-08-12T10:00:00.000Z",
		from: "ریاست پروژه",
		opinion: "سه مسیر باید در رابط کاربری و قراردادها کاملاً جدا بماند. صلح و سازش با هماهنگی معاونت حل اختلاف استان ضمانت اجرایی می‌گیرد و نباید با وکالت خلط شود."
	},
	{
		id: "ci-3",
		title: "اتصال API ثنا برای ابلاغ شعبه بخش خصوصی",
		body: "مدل داده ابلاغ «تعیین شعبه خصوصی» هنوز در سند تحول به‌صورت سکو تعریف شده؛ کمیته باید فیلدهای الزامی را نهایی کند.",
		status: "open",
		domain: "other",
		raisedAt: "2026-09-03T08:00:00.000Z",
		from: "تیم فنی"
	},
	{
		id: "ci-4",
		title: "مسائل مستحدثه داوری آنلاین در قراردادهای مصرف",
		body: "موقعیت زمانی و مکانی قراردادهای الکترونیک، صلاحیت و نحوه ابلاغ را تغییر می‌دهد.",
		status: "open",
		domain: "contract",
		raisedAt: "2026-09-04T11:00:00.000Z",
		from: "کمیته حقوقی"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/cn-Ccejyh36.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DEGNaH46.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CEyQqH-k.css";
var APP_NAME = "داشبورد زندگی";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#101c2c"
			},
			{
				name: "description",
				content: "داشبورد حقوقی شهروند — مشاوره هوشمند، صلح و سازش، حل اختلاف بخش خصوصی و اتصال ثنا"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fa",
		dir: "rtl",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-CD99Bu7s.mjs");
var Route$14 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./app-DcWBgY5Z.mjs");
var Route$13 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./app-D455oy8U.mjs");
var Route$12 = createFileRoute("/app/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./cases-B7uzHNI2.mjs");
var Route$11 = createFileRoute("/app/cases")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./committee-Db29M5XK.mjs");
var Route$10 = createFileRoute("/app/committee")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./company-DMb6ok-_.mjs");
var Route$9 = createFileRoute("/app/company")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./consult-CNCSCHtD.mjs");
var Route$8 = createFileRoute("/app/consult")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
function PageHeader({ kicker, title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-medium tracking-wide text-teal",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight text-ink",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-2xl text-sm leading-6 text-muted",
				children: description
			})
		] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: actions
		})]
	});
}
var tones = {
	teal: "bg-teal/12 text-teal",
	navy: "bg-navy/10 text-navy",
	warn: "bg-warn/12 text-warn",
	danger: "bg-danger/12 text-danger",
	ok: "bg-ok/12 text-ok",
	muted: "bg-paper-3 text-muted",
	inverse: "bg-paper/12 text-paper"
};
function Badge({ children, tone = "muted", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone], className),
		children
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal", {
	variants: {
		variant: {
			primary: "bg-teal text-teal-fg hover:bg-teal-2",
			navy: "bg-navy text-paper hover:bg-navy-2",
			outline: "border border-line-strong bg-paper-2 text-ink hover:bg-cream",
			ghost: "text-ink hover:bg-paper-3",
			danger: "bg-danger text-paper hover:opacity-90",
			inverse: "bg-paper text-navy hover:bg-cream"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
var MONTHS = [
	"فروردین",
	"اردیبهشت",
	"خرداد",
	"تیر",
	"مرداد",
	"شهریور",
	"مهر",
	"آبان",
	"آذر",
	"دی",
	"بهمن",
	"اسفند"
];
var WEEKDAYS = [
	"یکشنبه",
	"دوشنبه",
	"سه‌شنبه",
	"چهارشنبه",
	"پنجشنبه",
	"جمعه",
	"شنبه"
];
function toFaDigits(value) {
	return String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)] ?? d);
}
function gregorianToJalali(gy, gm, gd) {
	const g_d_n = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	];
	const gy2 = gm > 2 ? gy + 1 : gy;
	let days = 355666 + 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd + g_d_n[gm - 1];
	let jy = -1595 + 33 * Math.floor(days / 12053);
	days %= 12053;
	jy += 4 * Math.floor(days / 1461);
	days %= 1461;
	if (days > 365) {
		jy += Math.floor((days - 1) / 365);
		days = (days - 1) % 365;
	}
	const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
	const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
	return {
		jy,
		jm,
		jd
	};
}
function asDate(input) {
	return input instanceof Date ? input : new Date(input);
}
function formatJalali(input, withWeekday = false) {
	const d = asDate(input);
	const { jy, jm, jd } = gregorianToJalali(d.getFullYear(), d.getMonth() + 1, d.getDate());
	const date = `${toFaDigits(jy)}/${toFaDigits(String(jm).padStart(2, "0"))}/${toFaDigits(String(jd).padStart(2, "0"))}`;
	if (!withWeekday) return date;
	return `${WEEKDAYS[d.getDay()]} ${toFaDigits(jd)} ${MONTHS[jm - 1]} ${toFaDigits(jy)}`;
}
function formatJalaliLong(input) {
	const d = asDate(input);
	const { jy, jm, jd } = gregorianToJalali(d.getFullYear(), d.getMonth() + 1, d.getDate());
	return `${toFaDigits(jd)} ${MONTHS[jm - 1]} ${toFaDigits(jy)}`;
}
function daysUntil(input) {
	const d = asDate(input);
	const now = /* @__PURE__ */ new Date();
	const a = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	const b = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
	return Math.round((b - a) / 864e5);
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
}
function sanaCode() {
	return `۱۴۰۵۰۹۰${Math.floor(1e5 + Math.random() * 9e5)}`;
}
var officeByCity = {
	تهران: "off-teh",
	مشهد: "off-msh",
	اصفهان: "off-esf",
	شیراز: "off-shr",
	تبریز: "off-tbz"
};
var useAppStore = create((set, get) => ({
	role: "citizen",
	cases,
	documents,
	sana: sanaNotices,
	sulh: sulhSessions,
	disputes,
	committee: committeeItems,
	chats: [{
		id: "intro",
		role: "assistant",
		content: "سلام. من دستیار حقوقی داشبورد زندگی هستم. موضوع را به زبان ساده بگویید تا مسیر مناسب — مشاوره، صلح و سازش، حل اختلاف خصوصی یا وکالت — مشخص شود. این گفتگو وکالت نیست و نظر مشورتی است.",
		at: (/* @__PURE__ */ new Date()).toISOString()
	}],
	setRole: (role) => set({ role }),
	markSanaRead: (id) => set({ sana: get().sana.map((n) => n.id === id ? {
		...n,
		read: true
	} : n) }),
	addChat: (role, content) => set({ chats: [...get().chats, {
		id: uid("msg"),
		role,
		content,
		at: (/* @__PURE__ */ new Date()).toISOString()
	}] }),
	clearChat: () => set({ chats: [{
		id: uid("intro"),
		role: "assistant",
		content: "گفتگو از نو شروع شد. موضوع را بگویید. یادآوری: مشاوره جایگزین وکالت و رأی مرجع صالح نیست.",
		at: (/* @__PURE__ */ new Date()).toISOString()
	}] }),
	createFromAnalysis: ({ title, summary, city, analysis, track, elderId }) => {
		const caseId = uid("c");
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const statusMap = {
			consult: "consult",
			sulh: "sulh",
			dispute: "dispute",
			advocacy: "advocacy"
		};
		const events = [{
			id: uid("ev"),
			at: now,
			kind: "created",
			title: "ثبت موضوع در داشبورد",
			detail: summary
		}, {
			id: uid("ev"),
			at: now,
			kind: "ai",
			title: "تحلیل هوشمند مسیر",
			detail: analysis.reason
		}];
		let sanaTracking;
		let branchId;
		let officeId = officeByCity[city] ?? "off-teh";
		const nextSulh = [...get().sulh];
		const nextDisputes = [...get().disputes];
		const nextSana = [...get().sana];
		if (track === "sulh") {
			const chosen = elderId ?? elders.find((e) => e.domain === analysis.domain)?.id ?? elders[0].id;
			nextSulh.unshift({
				id: uid("su"),
				caseId,
				elderId: chosen,
				title,
				domain: analysis.domain,
				status: "requested",
				city,
				notes: "درخواست صلح و سازش ثبت شد. ریش‌سفید وکیل نیست؛ خروجی سازش‌نامه است."
			});
			events.push({
				id: uid("ev"),
				at: now,
				kind: "sulh",
				title: "ارجاع به صلح و سازش",
				detail: "مطابق آیین‌نامه داخلی، این مسیر از مشاوره و وکالت جدا است."
			});
			officeId = officeByCity[city] ?? officeId;
		}
		if (track === "dispute") {
			sanaTracking = sanaCode();
			const office = offices.find((o) => o.id === officeId) ?? offices[0];
			branchId = `شعبه خصوصی ${office.active + 1} ${office.city}`;
			nextDisputes.unshift({
				id: uid("dr"),
				caseId,
				officeId: office.id,
				branchLabel: branchId,
				city,
				status: "notified",
				sanaTracking,
				createdAt: now
			});
			nextSana.unshift({
				id: uid("s"),
				title: "ابلاغ تعیین شعبه حل اختلاف بخش خصوصی",
				kind: "branch",
				body: `موضوع «${title}» به ${branchId} در ${office.title} ارجاع شد. این ابلاغ از مسیر ثنا صادر شده است.`,
				at: now,
				caseId,
				tracking: sanaTracking,
				read: false
			});
			events.push({
				id: uid("ev"),
				at: now,
				kind: "branch",
				title: "درخواست شعبه از بخش خصوصی",
				detail: branchId
			}, {
				id: uid("ev"),
				at: now,
				kind: "sana",
				title: "ابلاغ از طریق ثنا",
				detail: sanaTracking
			});
		}
		set({
			cases: [{
				id: caseId,
				title,
				summary,
				domain: analysis.domain,
				track,
				status: statusMap[track],
				city,
				parties: ["سارا احمدی"],
				createdAt: now,
				sanaTracking,
				branchId,
				officeId,
				elderId: track === "sulh" ? elderId : void 0,
				events,
				documentIds: []
			}, ...get().cases],
			sulh: nextSulh,
			disputes: nextDisputes,
			sana: nextSana
		});
		return { caseId };
	}
}));
function matchElders(domain, city) {
	return [...elders].sort((a, b) => {
		const aScore = (a.domain === domain ? 4 : 0) + (a.city === city ? 2 : 0);
		return (b.domain === domain ? 4 : 0) + (b.city === city ? 2 : 0) - aScore || b.settlementRate - a.settlementRate;
	});
}
var Route$7 = createFileRoute("/app/dispute")({ component: DisputePage });
var ST = {
	queued: "در صف تخصیص",
	assigned: "شعبه تعیین شد",
	notified: "ابلاغ ثنا صادر شد",
	session: "جلسه شعبه",
	decided: "تصمیم صادر شد"
};
function DisputePage() {
	const items = useAppStore((s) => s.disputes);
	const cases = useAppStore((s) => s.cases);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "بخش خصوصی × ثنا",
				title: "حل اختلاف هوشمند",
				description: "سامانه از شبکه دفاتر شعبه می‌خواهد و ابلاغ را از ثنا صادر می‌کند. این مسیر جایگزین شورای دولتی نیست؛ شریک خصوصی با قابلیت ابلاغ رسمی است.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/new",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "درخواست شعبه تازه" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mb-8 grid gap-3 md:grid-cols-4",
				children: [
					"شرح موضوع و مدارک",
					"تحلیل هوش مصنوعی",
					"تخصیص شعبه دفتر خصوصی",
					"ابلاغ طرفین از ثنا"
				].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-paper-2 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-teal",
						children: ["گام ", [
							"یک",
							"دو",
							"سه",
							"چهار"
						][i]]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [items.map((d) => {
					const office = offices.find((o) => o.id === d.officeId);
					const c = cases.find((x) => x.id === d.caseId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: c?.title ?? d.branchLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "warn",
									children: ST[d.status]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-2 text-sm sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "شعبه"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: d.branchLabel })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "دفتر"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: office?.title })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "شماره پیگیری ثنا"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium tabular-nums",
										children: d.sanaTracking
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "ثبت"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatJalali(d.createdAt) })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/cases/$id",
								params: { id: d.caseId },
								className: "mt-3 inline-block text-sm text-teal",
								children: "خط زمان پرونده"
							})
						]
					}, d.id);
				}), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "هنوز شعبه خصوصی درخواست نشده است."
				})]
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./documents-BUqxv9Fy.mjs");
var Route$6 = createFileRoute("/app/documents")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./draft-N-HHZJRI.mjs");
var Route$5 = createFileRoute("/app/draft")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./new-xdsHpcxv.mjs");
var Route$4 = createFileRoute("/app/new")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./offices-BbrAY2Nl.mjs");
var Route$3 = createFileRoute("/app/offices")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./sana-Br0k1S_S.mjs");
var Route$2 = createFileRoute("/app/sana")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var ROLE_LABEL = {
	citizen: "شهروند",
	office: "دفتر نمایندگی",
	mediator: "ریش‌سفید / میانجی",
	committee: "کمیته حقوقی",
	judiciary: "شریک قضایی"
};
var TRACK_LABEL = {
	consult: "مشاوره حقوقی",
	sulh: "صلح و سازش",
	dispute: "حل اختلاف خصوصی",
	advocacy: "وکالت"
};
var TRACK_RULE = {
	consult: "نظر مشورتی است؛ ایجاد رابطه وکالت نمی‌کند و جایگزین رأی مرجع صالح نیست.",
	sulh: "میانجی‌گری با ریش‌سفید است؛ نه مشاوره است و نه وکالت. خروجی سازش‌نامه است و با هماهنگی معاونت حل اختلاف استان قابلیت ضمانت اجرایی قضایی دارد.",
	dispute: "ارجاع به شعبه حل اختلاف بخش خصوصی از طریق ثنا؛ رسیدگی شبه قضایی با قابلیت ابلاغ رسمی.",
	advocacy: "اقدام توسط وکیل دادگستری دارای پروانه؛ تنظیم دادخواست و پیگیری در مراجع قضایی."
};
var DOMAIN_LABEL = {
	family: "خانواده",
	inheritance: "ارث و انحصار وراثت",
	commercial: "تجاری",
	labor: "کار و تأمین اجتماعی",
	property: "املاک",
	neighbor: "همسایگی و مشاع",
	contract: "قرارداد",
	check: "اسناد تجاری و چک",
	other: "سایر"
};
var STATUS_LABEL = {
	intake: "پذیرش",
	consult: "مشاوره",
	sulh: "صلح و سازش",
	dispute: "حل اختلاف",
	advocacy: "وکالت",
	closed: "مختومه",
	enforced: "اجرای سازش"
};
var CITIES = [
	"تهران",
	"مشهد",
	"اصفهان",
	"شیراز",
	"تبریز"
];
var Route$1 = createFileRoute("/app/sulh")({ component: SulhPage });
var SULH_STATUS = {
	requested: "درخواست‌شده",
	scheduled: "زمان‌بندی‌شده",
	held: "برگزارشده",
	settled: "منجر به سازش",
	failed: "عدم سازش",
	enforcement: "ارسال برای اجرا"
};
function SulhPage() {
	const sessions = useAppStore((s) => s.sulh);
	const role = useAppStore((s) => s.role);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "مسیر مستقل — نه مشاوره، نه وکالت",
				title: "صلح و سازش",
				description: "ریش‌سفید میانجی است. خروجی سازش‌نامه است و با هماهنگی معاونت حل اختلاف استان ضمانت اجرایی قضایی پیدا می‌کند.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/new",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "درخواست سازش تازه" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-6 grid gap-3 rounded-xl border border-teal/25 bg-teal/6 p-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
						title: "چه هست",
						text: "میانجی‌گری محرمانه با ریش‌سفید حوزه‌ای. هدف، توافق طرفین و کاهش ورود به دادگاه است."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
						title: "چه نیست",
						text: "مشاوره حقوقی، تنظیم دادخواست، و دفاع در مرجع قضایی در این مسیر ممنوع است و به وکالت سپرده می‌شود."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
						title: "اجرا",
						text: "سازش‌نامه پس از تأیید معاونت حل اختلاف استان قابلیت اجرا می‌گیرد. هماهنگی استانی در فاز یک پیش‌بینی شده است."
					})
				]
			}),
			role === "mediator" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 rounded-md bg-cream px-4 py-3 text-sm",
				children: "نمای ریش‌سفید: فقط جلسات ارجاع‌شده به شما نمایش داده می‌شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-semibold",
				children: "جلسات"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: sessions.map((s) => {
					const elder = elders.find((e) => e.id === s.elderId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-medium",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "teal",
										children: SULH_STATUS[s.status]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: DOMAIN_LABEL[s.domain] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									elder?.name,
									" · ",
									s.city,
									s.scheduledAt ? ` · ${formatJalali(s.scheduledAt)}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7",
								children: s.notes
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/cases/$id",
								params: { id: s.caseId },
								className: "mt-2 inline-block text-sm text-teal",
								children: "پرونده مرتبط"
							})
						]
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 mt-10 font-semibold",
				children: "شبکه ریش‌سفیدان"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: elders.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: el.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-teal",
							children: el.domainsLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-muted",
							children: el.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: [
								el.city,
								" · ",
								toFaDigits(el.years),
								" سال · نرخ سازش ",
								toFaDigits(el.settlementRate),
								"٪"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[11px] text-muted",
							children: ["تأیید: ", el.approvedBy]
						})
					]
				}, el.id))
			})
		]
	});
}
function Rule({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm leading-7 text-muted",
		children: text
	})] });
}
var $$splitComponentImporter = () => import("./cases._id-BtkYsmHC.mjs");
var Route = createFileRoute("/app/cases/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AppRoute = Route$13.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$15
});
var AppIndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppCasesRoute = Route$11.update({
	id: "/cases",
	path: "/cases",
	getParentRoute: () => AppRoute
});
var AppCommitteeRoute = Route$10.update({
	id: "/committee",
	path: "/committee",
	getParentRoute: () => AppRoute
});
var AppCompanyRoute = Route$9.update({
	id: "/company",
	path: "/company",
	getParentRoute: () => AppRoute
});
var AppConsultRoute = Route$8.update({
	id: "/consult",
	path: "/consult",
	getParentRoute: () => AppRoute
});
var AppDisputeRoute = Route$7.update({
	id: "/dispute",
	path: "/dispute",
	getParentRoute: () => AppRoute
});
var AppDocumentsRoute = Route$6.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AppRoute
});
var AppDraftRoute = Route$5.update({
	id: "/draft",
	path: "/draft",
	getParentRoute: () => AppRoute
});
var AppNewRoute = Route$4.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppRoute
});
var AppOfficesRoute = Route$3.update({
	id: "/offices",
	path: "/offices",
	getParentRoute: () => AppRoute
});
var AppSanaRoute = Route$2.update({
	id: "/sana",
	path: "/sana",
	getParentRoute: () => AppRoute
});
var AppSulhRoute = Route$1.update({
	id: "/sulh",
	path: "/sulh",
	getParentRoute: () => AppRoute
});
var AppCasesRouteChildren = { AppCasesIdRoute: Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AppCasesRoute
}) };
var AppRouteChildren = {
	AppCasesRoute: AppCasesRoute._addFileChildren(AppCasesRouteChildren),
	AppCommitteeRoute,
	AppCompanyRoute,
	AppConsultRoute,
	AppDisputeRoute,
	AppDocumentsRoute,
	AppDraftRoute,
	AppNewRoute,
	AppOfficesRoute,
	AppSanaRoute,
	AppSulhRoute,
	AppIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren)
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PageHeader as _, ROLE_LABEL as a, elders as b, TRACK_RULE as c, daysUntil as d, formatJalali as f, Badge as g, Button as h, DOMAIN_LABEL as i, matchElders as l, toFaDigits as m, Route as n, STATUS_LABEL as o, formatJalaliLong as p, CITIES as r, TRACK_LABEL as s, router_exports as t, useAppStore as u, cn as v, offices as x, citizen as y };
