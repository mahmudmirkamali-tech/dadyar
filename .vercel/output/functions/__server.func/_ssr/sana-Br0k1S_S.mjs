import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, d as daysUntil, f as formatJalali, g as Badge, m as toFaDigits, u as useAppStore } from "./router-DEGNaH46.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sana-Br0k1S_S.js
var import_jsx_runtime = require_jsx_runtime();
var KIND = {
	notice: "اطلاعیه",
	summons: "احضاریه",
	deadline: "مهلت",
	ruling: "رأی",
	branch: "تعیین شعبه"
};
function SanaPage() {
	const notices = useAppStore((s) => s.sana);
	const mark = useAppStore((s) => s.markSanaRead);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "اتصال سکو",
				title: "ثنا و مهلت‌های قانونی",
				description: "ابلاغ الکترونیک قضایی در داشبورد یکپارچه می‌شود تا مهلت احضاریه یا توقیف از دست نرود. تخصیص شعبه خصوصی نیز از همین کانال ابلاغ می‌گردد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 rounded-lg border border-line bg-navy p-4 text-sm leading-7 text-paper",
				children: "وضعیت اتصال: آزمایشی. در فاز ۲ اتصال عملیاتی به ثنا و ثبت اسناد تکمیل می‌شود. شماره‌های پیگیری در این نسخه نمونه عملیاتی برای نمایش جریان کار هستند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: notices.map((n) => {
					const d = n.deadline ? daysUntil(n.deadline) : null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-paper-2 p-4",
						onClick: () => mark(n.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-medium",
										children: n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: n.read ? "muted" : "warn",
										children: n.read ? "خوانده" : "جدید"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: KIND[n.kind] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-muted",
								children: n.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									"پیگیری ",
									n.tracking,
									" · ",
									formatJalali(n.at),
									n.deadline && ` · مهلت ${formatJalali(n.deadline)} (${d !== null && d >= 0 ? `${toFaDigits(d)} روز` : "گذشته"})`
								]
							}),
							n.caseId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/cases/$id",
								params: { id: n.caseId },
								className: "mt-2 inline-block text-sm text-teal",
								children: "پرونده"
							})
						]
					}, n.id);
				})
			})
		]
	});
}
//#endregion
export { SanaPage as component };
