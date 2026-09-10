import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, h as Button } from "./router-DEGNaH46.mjs";
import { i as Textarea, n as Label, r as Select } from "./field-Ci6cH19-.mjs";
import { r as draftDocument } from "./legal-ai-BN46Euis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/draft-N-HHZJRI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	"اظهارنامه",
	"سازش‌نامه",
	"دادخواست",
	"لایحه",
	"قرارداد ساده",
	"وکالتنامه داخلی دفتر"
];
function DraftPage() {
	const [kind, setKind] = (0, import_react.useState)(KINDS[0]);
	const [facts, setFacts] = (0, import_react.useState)("");
	const [out, setOut] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function run() {
		if (facts.trim().length < 8) {
			setError("وقایع را کامل‌تر بنویسید.");
			return;
		}
		setError(null);
		setLoading(true);
		try {
			const res = await draftDocument({ data: {
				kind,
				facts
			} });
			if (!res.ok) setError(res.error);
			else setOut(res.text);
		} catch {
			setError("تولید پیش‌نویس ممکن نشد.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "تولید سند",
				title: "پیش‌نویس هوشمند",
				description: "خروجی پیش‌نویس غیررسمی است و باید توسط کمیته حقوقی یا وکیل واجد صلاحیت بازبینی شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "نوع سند" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: kind,
						onChange: (e) => setKind(e.target.value),
						children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: k }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mt-4",
						children: "وقایع"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: facts,
						onChange: (e) => setFacts(e.target.value),
						placeholder: "طرفین، خواسته، مستندات…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-danger",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: run,
						disabled: loading,
						children: loading ? "در حال تنظیم…" : "تولید پیش‌نویس"
					})
				]
			}),
			out && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "mt-5 whitespace-pre-wrap rounded-xl border border-line bg-paper-2 p-5 text-sm leading-7",
				children: out
			})
		]
	});
}
//#endregion
export { DraftPage as component };
