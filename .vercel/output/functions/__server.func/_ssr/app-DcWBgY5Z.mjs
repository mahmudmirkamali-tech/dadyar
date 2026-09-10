import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, d as useRouterState, m as Outlet, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, d as FileText, l as Gavel, s as Menu, t as X, u as FolderOpen } from "../_libs/lucide-react.mjs";
import { a as ROLE_LABEL, g as Badge, h as Button, m as toFaDigits, u as useAppStore, v as cn, y as citizen } from "./router-DEGNaH46.mjs";
import { n as Wordmark } from "./logo-UFV7CcP6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-DcWBgY5Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CommandSearch({ onClose }) {
	const [q, setQ] = (0, import_react.useState)("");
	const cases = useAppStore((s) => s.cases);
	const docs = useAppStore((s) => s.documents);
	const sana = useAppStore((s) => s.sana);
	const results = (0, import_react.useMemo)(() => {
		const n = q.trim();
		if (!n) return {
			cases: cases.slice(0, 3),
			docs: docs.slice(0, 3),
			sana: sana.slice(0, 3)
		};
		return {
			cases: cases.filter((c) => c.title.includes(n) || c.summary.includes(n)),
			docs: docs.filter((d) => d.title.includes(n) || d.summary.includes(n) || d.kind.includes(n)),
			sana: sana.filter((s) => s.title.includes(n) || s.body.includes(n) || s.tracking.includes(n))
		};
	}, [
		q,
		cases,
		docs,
		sana
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-navy/40 p-4 pt-[12vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0",
			onClick: onClose,
			"aria-label": "بستن جستجو"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-xl overflow-hidden rounded-xl bg-paper-2 shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "یک دستور ساده: چک، مهریه، ابلاغ، دیوار…",
					className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[50vh] overflow-y-auto p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
						icon: FolderOpen,
						title: "پرونده‌ها",
						children: [results.cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/cases/$id",
							params: { id: c.id },
							onClick: onClose,
							className: "block rounded-md px-3 py-2 hover:bg-paper-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: c.summary
							})]
						}, c.id)), results.cases.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
						icon: FileText,
						title: "اسناد",
						children: [results.docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/documents",
							onClick: onClose,
							className: "block rounded-md px-3 py-2 hover:bg-paper-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: d.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									d.kind,
									" — ",
									d.summary
								]
							})]
						}, d.id)), results.docs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
						icon: Gavel,
						title: "ثنا",
						children: [results.sana.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/sana",
							onClick: onClose,
							className: "block rounded-md px-3 py-2 hover:bg-paper-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: s.tracking
							})]
						}, s.id)), results.sana.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})]
					})
				]
			})]
		})]
	});
}
function Group({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), title]
		}), children]
	});
}
function Empty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-3 py-2 text-xs text-muted",
		children: "موردی یافت نشد."
	});
}
var NAV = [
	{
		to: "/app",
		label: "خانه",
		hint: "نمای کلی امور"
	},
	{
		to: "/app/new",
		label: "موضوع تازه",
		hint: "تحلیل مسیر با هوش مصنوعی"
	},
	{
		to: "/app/consult",
		label: "مشاوره هوشمند",
		hint: "نظر مشورتی؛ وکالت نیست"
	},
	{
		to: "/app/sulh",
		label: "صلح و سازش",
		hint: "ریش‌سفید؛ جدا از وکالت"
	},
	{
		to: "/app/dispute",
		label: "حل اختلاف",
		hint: "شعبه خصوصی + ثنا"
	},
	{
		to: "/app/cases",
		label: "پرونده‌ها",
		hint: "خط زمان و مهلت"
	},
	{
		to: "/app/documents",
		label: "اسناد",
		hint: "جستجوی یکپارچه"
	},
	{
		to: "/app/sana",
		label: "ثنا و مهلت‌ها",
		hint: "ابلاغ الکترونیک"
	},
	{
		to: "/app/draft",
		label: "پیش‌نویس",
		hint: "تولید سند حقوقی"
	},
	{
		to: "/app/offices",
		label: "شبکه دفاتر",
		hint: "فرانشیز آزمایشی"
	},
	{
		to: "/app/committee",
		label: "کمیته حقوقی",
		hint: "مسائل مستحدثه"
	},
	{
		to: "/app/company",
		label: "اساسنامه",
		hint: "ثبت مؤسسه"
	}
];
var MOBILE_NAV = [
	{
		to: "/app",
		label: "خانه"
	},
	{
		to: "/app/new",
		label: "تازه"
	},
	{
		to: "/app/sulh",
		label: "سازش"
	},
	{
		to: "/app/dispute",
		label: "اختلاف"
	},
	{
		to: "/app/sana",
		label: "ثنا"
	}
];
var ROLES = [
	"citizen",
	"office",
	"mediator",
	"committee",
	"judiciary"
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const role = useAppStore((s) => s.role);
	const setRole = useAppStore((s) => s.setRole);
	const unread = useAppStore((s) => s.sana.filter((n) => !n.read).length);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	const items = (0, import_react.useMemo)(() => NAV.filter((i) => !i.roles || i.roles.includes(role)), [role]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "navy-rail fixed inset-y-0 right-0 z-30 hidden w-64 flex-col lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-paper/10 px-5 py-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { inverse: true })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-0.5 overflow-y-auto px-3 py-4",
						children: items.map((item) => {
							const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex flex-col rounded-md px-3 py-2.5 transition-colors duration-150", active ? "bg-paper/10 text-paper" : "text-paper/70 hover:bg-paper/10 hover:text-paper"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-paper/40",
									children: item.hint
								})]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-paper/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[11px] text-paper/40",
							children: "نمای آزمایشی نقش"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: role,
							onChange: (e) => setRole(e.target.value),
							className: "h-10 w-full rounded-sm border border-paper/15 bg-navy-3 px-2 text-xs text-paper outline-none",
							children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r,
								children: ROLE_LABEL[r]
							}, r))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pr-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-paper-2/90 px-4 backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setOpen(true),
							"aria-label": "منو",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSearch(true),
							className: "flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-paper px-3 text-right text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "جستجوی فرمان در اسناد، پرونده و ثنا"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/sana",
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: unread ? "warn" : "muted",
								children: ["ثنا ", toFaDigits(unread)]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden text-left sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium leading-none",
								children: citizen.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted",
								children: ROLE_LABEL[role]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "px-4 py-6 pb-24 lg:px-8 lg:pb-10",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-paper-2 lg:hidden",
				children: MOBILE_NAV.map((item) => {
					const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("flex h-14 items-center justify-center text-xs font-medium", active ? "text-teal" : "text-muted"),
						children: item.label
					}, item.to);
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-navy/50",
					onClick: () => setOpen(false),
					"aria-label": "بستن"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "navy-rail absolute inset-y-0 right-0 flex w-72 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
							inverse: true,
							compact: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "text-paper hover:bg-paper/10",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto px-3 pb-6",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "block rounded-md px-3 py-2.5 text-sm text-paper/80 hover:bg-paper/10 hover:text-paper",
							children: item.label
						}, item.to))
					})]
				})]
			}),
			search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, { onClose: () => setSearch(false) })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
//#endregion
export { SplitComponent as component };
