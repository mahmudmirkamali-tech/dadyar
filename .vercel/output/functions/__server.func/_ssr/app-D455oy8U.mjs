import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Bell, n as Waypoints, o as Scale, p as ArrowLeft, u as FolderOpen } from "../_libs/lucide-react.mjs";
import { _ as PageHeader, a as ROLE_LABEL, d as daysUntil, f as formatJalali, h as Button, m as toFaDigits, p as formatJalaliLong, u as useAppStore, y as citizen } from "./router-DEGNaH46.mjs";
import { n as TrackBadge, t as StatusBadge } from "./status-badge-C3-7jeez.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-D455oy8U.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const role = useAppStore((s) => s.role);
	const cases = useAppStore((s) => s.cases);
	const sana = useAppStore((s) => s.sana);
	const sulh = useAppStore((s) => s.sulh);
	const disputes = useAppStore((s) => s.disputes);
	const unread = sana.filter((n) => !n.read).length;
	const deadlines = sana.filter((n) => n.deadline).sort((a, b) => +new Date(a.deadline) - +new Date(b.deadline));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: formatJalaliLong(/* @__PURE__ */ new Date()),
				title: `سلام ${citizen.name}`,
				description: `نمای ${ROLE_LABEL[role]} — امور محرمانه و اولویت‌دار در یک نقطه ورود.`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/new",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: ["طرح موضوع تازه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: FolderOpen,
						label: "پرونده فعال",
						value: toFaDigits(cases.filter((c) => c.status !== "closed").length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: Bell,
						label: "ابلاغ نخوانده ثنا",
						value: toFaDigits(unread)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: Waypoints,
						label: "جلسه سازش",
						value: toFaDigits(sulh.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: Scale,
						label: "شعبه خصوصی",
						value: toFaDigits(disputes.length)
					})
				]
			}),
			role === "judiciary" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JudiciaryStrip, {}),
			role === "office" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeStrip, {}),
			role === "mediator" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediatorStrip, {}),
			role === "committee" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommitteeStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "پرونده‌های جاری"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/cases",
							className: "text-sm text-teal",
							children: "همه"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/cases/$id",
								params: { id: c.id },
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackBadge, { track: c.track }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: c.summary
								})]
							})
						}, c.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "مهلت‌های نزدیک"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: deadlines.map((n) => {
								const d = daysUntil(n.deadline);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md bg-paper p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted",
										children: [
											formatJalali(n.deadline),
											" · ",
											d < 0 ? "گذشته" : `${toFaDigits(d)} روز مانده`
										]
									})]
								}, n.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/sana",
							className: "mt-4 inline-block text-sm text-teal",
							children: "صندوق ثنا"
						})
					]
				})]
			})
		]
	});
}
function Kpi({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg border border-line bg-paper-2 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl font-semibold leading-none tabular-nums",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 truncate text-xs text-muted",
				children: label
			})]
		})]
	});
}
function JudiciaryStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-lg bg-navy p-5 text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-paper/50",
			children: "نمای شریک قضایی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-7 text-paper/85",
			children: "درخواست شعبه خصوصی از شبکه دفاتر ثبت می‌شود و ابلاغ از کانال ثنا به طرفین می‌رسد. صلح و سازش با هماهنگی معاونت حل اختلاف استان قابلیت ضمانت اجرایی دارد."
		})]
	});
}
function OfficeStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-lg border border-line bg-cream p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "نمای دفتر نمایندگی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-7",
			children: "سهم مؤسسه مرکزی از درآمد دفتر ۴۰٪ و سهم دفتر ۶۰٪ است. هر دفتر شخصیت حقوقی مستقل، بیمه مسئولیت حرفه‌ای و نظارت مستمر دارد."
		})]
	});
}
function MediatorStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-lg border border-teal/25 bg-teal/8 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-teal",
			children: "نمای ریش‌سفید"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-7 text-ink",
			children: "شما وکیل نیستید و مشاوره حقوقی رسمی ارائه نمی‌کنید. کار شما میانجی‌گری برای سازش‌نامه است."
		})]
	});
}
function CommitteeStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-lg border border-line bg-paper-2 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "نمای کمیته حقوقی"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-7",
			children: "مسائل مستحدثه حسب مورد و موقعیت زمانی و مکانی به کمیته ارجاع می‌شود تا رویه واحد برای دفاتر صادر گردد."
		})]
	});
}
//#endregion
export { Home as component };
