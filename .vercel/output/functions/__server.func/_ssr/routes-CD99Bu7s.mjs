import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Landmark, i as Shield, n as Waypoints, o as Scale, p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { h as Button } from "./router-DEGNaH46.mjs";
import { t as Mark } from "./logo-UFV7CcP6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CD99Bu7s.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grid min-h-dvh text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "زندگی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted",
					children: "فاز پرواز حقوقی"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					children: "ورود به داشبورد"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise mb-4 inline-flex rounded-full border border-line bg-paper-2 px-3 py-1 text-xs text-muted",
					children: "همسو با سند تحول و تعالی قوه قضائیه — سکوهای خصوصی و هوش مصنوعی"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "rise max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl",
					children: "داشبورد امور محرمانه و اولویت‌دار زندگی"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise mt-5 max-w-2xl text-base leading-8 text-muted",
					children: "شهروند موضوع را به زبان طبیعی می‌گوید؛ سامانه مسیر حل، مدارک لازم و مهلت قانونی را مرحله‌به‌مرحله نشان می‌دهد. فاز اول حقوقی است: مشاوره هوشمند، صلح و سازش با ریش‌سفید، و حل اختلاف بخش خصوصی با ابلاغ از ثنا."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/new",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							children: ["طرح موضوع تازه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/company",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							children: "پیش‌نویس اساسنامه"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14 grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
							icon: Scale,
							title: "مشاوره حقوقی",
							text: "نظر مشورتی ارزان و هوشمند. رابطه وکالت ایجاد نمی‌کند و جایگزین رأی مرجع صالح نیست."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
							icon: Waypoints,
							title: "صلح و سازش",
							text: "ظرفیت ریش‌سفیدان حوزه‌های خانواده، همسایگی، کار و قرارداد. آیین جدا از مشاوره و وکالت؛ سازش‌نامه با ضمانت اجرایی معاونت حل اختلاف استان."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
							icon: Landmark,
							title: "حل اختلاف بخش خصوصی",
							text: "درخواست شعبه از شبکه دفاتر؛ ابلاغ طرفین از ثنا. آغاز حضور بخش خصوصی در حل اختلاف با هوش مصنوعی."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
							icon: Shield,
							title: "وکالت",
							text: "فقط وقتی دادرسی رسمی لازم است. معرفی از دفتر نمایندگی دارای شخصیت حقوقی مستقل و بیمه مسئولیت حرفه‌ای."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14 grid gap-6 rounded-xl bg-navy p-8 text-paper md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "کاهش اطاله",
							v: "ارجاع پیش از دادگاه"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "پل ارتباطی",
							v: "شهروند و دستگاه قضایی"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "فاز یک",
							v: "پنج دفتر آزمایشی"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14 grid gap-8 md:grid-cols-[1.2fr_0.8fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper-2 p-6 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "جایگاه در نظام قضایی"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm leading-7 text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ارائه خدمت به قوه قضائیه به‌صورت API، مطابق سند تحول." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "هدایت اختلافات به داوری، صلح و سازش برای کاهش پرونده غیرضروری." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "مرکز ارجاع هوشمند به داوری و شعبه خصوصی." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "کمیته حقوقی برای مسائل مستحدثه حسب زمان و مکان." })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper-2 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "حضور رسمی"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-7 text-muted",
								children: "مدیریت ارشد پروژه: سید محمود میرکمالی. حضور رسمی در ساختار: خانم معین. سمت قضایی در عناوین رسمی درج نمی‌شود."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-muted",
								children: "هماهنگی با معاونت حل اختلاف استان برای ضمانت اجرایی سازش‌نامه‌ها در نقشه راه فاز یک پیش‌بینی شده است."
							})
						]
					})]
				})
			]
		})]
	});
}
function PathCard({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-3 size-5 text-teal" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-7 text-muted",
				children: text
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-paper/50",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-lg font-medium",
		children: v
	})] });
}
//#endregion
export { Landing as component };
