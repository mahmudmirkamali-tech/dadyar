import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, b as elders, c as TRACK_RULE, f as formatJalali, i as DOMAIN_LABEL, n as Route, u as useAppStore, x as offices } from "./router-DEGNaH46.mjs";
import { n as TrackBadge, t as StatusBadge } from "./status-badge-C3-7jeez.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases._id-BtkYsmHC.js
var import_jsx_runtime = require_jsx_runtime();
var KIND = {
	created: "ثبت",
	ai: "هوش مصنوعی",
	document: "سند",
	sana: "ثنا",
	sulh: "سازش",
	branch: "شعبه",
	session: "جلسه",
	enforcement: "اجرا",
	note: "یادداشت"
};
function Timeline({ events }) {
	const ordered = [...events].sort((a, b) => +new Date(b.at) - +new Date(a.at));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-4 border-r border-line pr-5",
		children: ordered.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -right-[23px] size-2.5 rounded-full bg-teal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted",
					children: [
						KIND[ev.kind],
						" · ",
						formatJalali(ev.at)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: ev.title
				}),
				ev.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm leading-6 text-muted",
					children: ev.detail
				})
			]
		}, ev.id))
	});
}
function CaseDetail() {
	const { id } = Route.useParams();
	const legalCase = useAppStore((s) => s.cases.find((c) => c.id === id));
	const docs = useAppStore((s) => s.documents.filter((d) => d.caseId === id));
	if (!legalCase) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "پرونده یافت نشد." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/app/cases",
		className: "text-sm text-teal",
		children: "بازگشت"
	})] });
	const elder = elders.find((e) => e.id === legalCase.elderId);
	const office = offices.find((o) => o.id === legalCase.officeId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: DOMAIN_LABEL[legalCase.domain],
				title: legalCase.title,
				description: legalCase.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackBadge, { track: legalCase.track }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: legalCase.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 max-w-2xl text-sm leading-7 text-muted",
				children: TRACK_RULE[legalCase.track]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold",
						children: "خط زمان"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { events: legalCase.events })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper-2 p-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-3 font-semibold",
								children: "مشخصات"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["شهر: ", legalCase.city] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["طرفین: ", legalCase.parties.join("، ")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["ثبت: ", formatJalali(legalCase.createdAt)]
							}),
							legalCase.sanaTracking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["ثنا: ", legalCase.sanaTracking]
							}),
							legalCase.branchId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["شعبه: ", legalCase.branchId]
							}),
							office && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["دفتر: ", office.title]
							}),
							elder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: ["ریش‌سفید: ", elder.name]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper-2 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 font-semibold",
							children: "مدارک"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d.title }, d.id)), docs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: "سندی پیوست نشده."
							})]
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { CaseDetail as component };
