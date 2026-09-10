import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, g as Badge, m as toFaDigits, x as offices } from "./router-DEGNaH46.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offices-BbrAY2Nl.js
var import_jsx_runtime = require_jsx_runtime();
function OfficesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "فرانشیز — فاز یک",
				title: "شبکه دفاتر نمایندگی",
				description: "پوشش سراسری بدون سرمایه‌گذاری سنگین مرکزی. هر دفتر شخصیت حقوقی مستقل است، قرارداد فرانشیز محدوده جغرافیایی و فسخ دارد، و بیمه مسئولیت حرفه‌ای الزامی است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 grid gap-3 rounded-xl bg-navy p-5 text-paper sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-paper/50",
						children: "سهم مؤسسه مرکزی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold",
						children: "۴۰٪"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-paper/50",
						children: "سهم دفتر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold",
						children: "۶۰٪"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-paper/50",
						children: "شهرهای آزمایشی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold",
						children: toFaDigits(offices.length)
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: offices.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-medium",
								children: o.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "teal",
								children: "آزمایشی"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: o.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm",
							children: ["مدیر: ", o.manager]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: [
								"ظرفیت ",
								toFaDigits(o.capacity),
								" · فعال ",
								toFaDigits(o.active),
								" · ",
								o.phone
							]
						})
					]
				}, o.id))
			})
		]
	});
}
//#endregion
export { OfficesPage as component };
