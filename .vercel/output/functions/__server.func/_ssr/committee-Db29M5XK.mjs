import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, f as formatJalali, g as Badge, h as Button, i as DOMAIN_LABEL, u as useAppStore } from "./router-DEGNaH46.mjs";
import { i as Textarea, n as Label } from "./field-Ci6cH19-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/committee-Db29M5XK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ST = {
	open: "باز",
	review: "در بررسی",
	opinion: "نظریه صادر شده",
	closed: "بایگانی"
};
function CommitteePage() {
	const items = useAppStore((s) => s.committee);
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	function add() {
		if (!title.trim()) return;
		useAppStore.setState({ committee: [{
			id: `ci-${Date.now()}`,
			title: title.trim(),
			body: body.trim() || "ارجاع برای بررسی مسائل مستحدثه.",
			status: "open",
			domain: "other",
			raisedAt: (/* @__PURE__ */ new Date()).toISOString(),
			from: "داشبورد"
		}, ...useAppStore.getState().committee] });
		setTitle("");
		setBody("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "رکن محتوایی مؤسسه",
				title: "کمیته حقوقی",
				description: "مسائل حقوقی گسترده‌اند و حسب مورد با موقعیت زمانی و مکانی مسائل مستحدثه حادث می‌شود. کمیته باید پای کار باشد تا رویه دفاتر یکسان بماند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 rounded-xl border border-line bg-paper-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "موضوع مستحدثه" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: title,
						onChange: (e) => setTitle(e.target.value),
						className: "h-11 w-full rounded-md border border-line bg-paper px-3 text-sm outline-none focus:border-teal",
						placeholder: "عنوان مسئله"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mt-3",
						children: "شرح"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: body,
						onChange: (e) => setBody(e.target.value),
						className: "min-h-24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						onClick: add,
						children: "ارجاع به کمیته"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-medium",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: it.status === "opinion" ? "ok" : "navy",
									children: ST[it.status]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: DOMAIN_LABEL[it.domain] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-muted",
							children: it.body
						}),
						it.opinion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 rounded-md bg-teal/8 p-3 text-sm leading-7",
							children: ["نظریه: ", it.opinion]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [
								it.from,
								" · ",
								formatJalali(it.raisedAt)
							]
						})
					]
				}, it.id))
			})
		]
	});
}
//#endregion
export { CommitteePage as component };
