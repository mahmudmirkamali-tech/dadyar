import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, f as formatJalali, m as toFaDigits, u as useAppStore } from "./router-DEGNaH46.mjs";
import { t as Input } from "./field-Ci6cH19-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-BUqxv9Fy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DocsPage() {
	const docs = useAppStore((s) => s.documents);
	const [q, setQ] = (0, import_react.useState)("");
	const { filtered, ms } = (0, import_react.useMemo)(() => {
		const t0 = performance.now();
		const n = q.trim();
		return {
			filtered: n ? docs.filter((d) => d.title.includes(n) || d.summary.includes(n) || d.kind.includes(n)) : docs,
			ms: n ? Math.max(1, Math.round(performance.now() - t0)) : null
		};
	}, [q, docs]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "فرمان جستجوی یکپارچه",
				title: "اسناد و مدارک",
				description: "تمام مدارک مرتبط با یک دستور ساده جمع می‌شود؛ هدف زیر شصت ثانیه است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "چک، عقدنامه، اساسنامه، دیوار…"
			}),
			ms !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					toFaDigits(filtered.length),
					" سند در ",
					toFaDigits(ms),
					" میلی‌ثانیه"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-3 md:grid-cols-2",
				children: filtered.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-paper-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-teal",
							children: d.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-medium",
							children: d.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-6 text-muted",
							children: d.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-[11px] text-muted",
							children: [
								toFaDigits(d.pages),
								" صفحه · ",
								formatJalali(d.addedAt)
							]
						})
					]
				}, d.id))
			})
		]
	});
}
//#endregion
export { DocsPage as component };
