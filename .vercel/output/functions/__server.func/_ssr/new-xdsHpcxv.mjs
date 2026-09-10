import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, c as TRACK_RULE, h as Button, i as DOMAIN_LABEL, l as matchElders, r as CITIES, s as TRACK_LABEL, u as useAppStore, v as cn } from "./router-DEGNaH46.mjs";
import { i as Textarea, n as Label, r as Select } from "./field-Ci6cH19-.mjs";
import { t as analyzeMatter } from "./legal-ai-BN46Euis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-xdsHpcxv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ORDER = [
	"consult",
	"sulh",
	"dispute",
	"advocacy"
];
function TrackPanel({ active, recommended, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 md:grid-cols-2",
		children: ORDER.map((track) => {
			const selected = active === track;
			const rec = recommended === track;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect?.(track),
				className: cn("rounded-lg border p-4 text-right transition-colors duration-150", selected ? "border-teal bg-teal/8" : "border-line bg-paper-2 hover:border-line-strong"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: TRACK_LABEL[track]
					}), rec && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-teal px-2 py-0.5 text-[11px] text-teal-fg",
						children: "پیشنهاد سامانه"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-6 text-muted",
					children: TRACK_RULE[track]
				})]
			}, track);
		})
	});
}
function NewMatter() {
	const navigate = useNavigate();
	const createFromAnalysis = useAppStore((s) => s.createFromAnalysis);
	const [text, setText] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("تهران");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [track, setTrack] = (0, import_react.useState)();
	const [elderId, setElderId] = (0, import_react.useState)();
	async function analyze() {
		if (text.trim().length < 8) {
			setError("موضوع را کمی کامل‌تر بنویسید.");
			return;
		}
		setError(null);
		setLoading(true);
		try {
			const res = await analyzeMatter({ data: { text } });
			if (!res.ok) {
				setError("warning" in res ? String(res.warning) : "تحلیل انجام نشد.");
				return;
			}
			setAnalysis(res.analysis);
			setTrack(res.analysis.track);
			const ranked = matchElders(res.analysis.domain, city);
			setElderId(ranked[0]?.id);
		} catch {
			setError("ارتباط با دستیار هوشمند برقرار نشد.");
		} finally {
			setLoading(false);
		}
	}
	function submit() {
		if (!analysis || !track) return;
		const { caseId } = createFromAnalysis({
			title: text.trim().slice(0, 72),
			summary: analysis.summary || text.trim(),
			city,
			analysis,
			track,
			elderId
		});
		if (track === "consult") navigate({ to: "/app/consult" });
		else if (track === "sulh") navigate({ to: "/app/sulh" });
		else if (track === "dispute") navigate({ to: "/app/dispute" });
		else navigate({
			to: "/app/cases/$id",
			params: { id: caseId }
		});
	}
	const elders = analysis ? matchElders(analysis.domain, city) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "پذیرش موضوع",
				title: "موضوع را به زبان خودتان بگویید",
				description: "سامانه تشخیص می‌دهد مسیر مناسب مشاوره است، صلح و سازش، شعبه حل اختلاف خصوصی، یا وکالت. این چهار مسیر مخلوط نمی‌شوند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper-2 p-5 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "matter",
						children: "شرح موضوع"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "matter",
						value: text,
						onChange: (e) => setText(e.target.value),
						placeholder: "مثلاً: همسایه دیوار مشاع را خراب کرده… یا چک شرکت برگشت خورده…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "city",
							children: "شهر"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "city",
							value: city,
							onChange: (e) => setCity(e.target.value),
							children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})] })
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: analyze,
						disabled: loading,
						children: loading ? "در حال تحلیل…" : "تحلیل هوشمند مسیر"
					})
				]
			}),
			analysis && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper-2 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-teal",
								children: ["تشخیص موضوع: ", DOMAIN_LABEL[analysis.domain]]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7",
								children: analysis.reason
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 list-disc pr-5 text-sm leading-7 text-muted",
								children: analysis.nextSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted",
								children: ["مدارک پیشنهادی: ", analysis.documents.join("، ")]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackPanel, {
						active: track,
						recommended: analysis.track,
						onSelect: setTrack
					}),
					track === "sulh" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-teal/30 bg-teal/5 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "انتخاب ریش‌سفید"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted",
								children: "ریش‌سفید وکیل نیست و حق‌الوکاله نمی‌گیرد. خروجی جلسه سازش‌نامه است."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-2",
								children: elders.slice(0, 4).map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-md border border-line bg-paper-2 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "elder",
										checked: elderId === el.id,
										onChange: () => setElderId(el.id),
										className: "mt-1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: el.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted",
										children: [
											el.domainsLabel,
											" · ",
											el.city,
											" · تأیید: ",
											el.approvedBy
										]
									})] })]
								}, el.id))
							})
						]
					}),
					track === "dispute" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-cream p-5 text-sm leading-7",
						children: [
							"با تأیید شما، از دفتر نمایندگی ",
							city,
							" شعبه حل اختلاف بخش خصوصی درخواست می‌شود و ابلاغ طرفین از مسیر ثنا صادر می‌گردد. این آغاز ورود بخش خصوصی به حل اختلاف است."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: !track,
						children: ["ثبت در مسیر ", track ? TRACK_LABEL[track] : "انتخاب‌شده"]
					})
				]
			})
		]
	});
}
//#endregion
export { NewMatter as component };
