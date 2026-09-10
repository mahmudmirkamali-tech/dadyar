import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, f as formatJalali, h as Button, i as DOMAIN_LABEL, u as useAppStore } from "./router-DEGNaH46.mjs";
import { n as TrackBadge, t as StatusBadge } from "./status-badge-C3-7jeez.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-B7uzHNI2.js
var import_jsx_runtime = require_jsx_runtime();
function CasesPage() {
	const cases = useAppStore((s) => s.cases);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "خط زمان یکپارچه",
			title: "پرونده‌ها",
			description: "هر موضوع یک پرونده با مسیر مشخص، مدارک و مهلت دارد.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app/new",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "موضوع تازه" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl border border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line",
				children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/app/cases/$id",
					params: { id: c.id },
					className: "block p-4 hover:bg-paper-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-medium",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackBadge, { track: c.track }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							DOMAIN_LABEL[c.domain],
							" · ",
							c.city,
							" · ",
							formatJalali(c.createdAt)
						]
					})]
				}) }, c.id))
			})
		})]
	});
}
//#endregion
export { CasesPage as component };
