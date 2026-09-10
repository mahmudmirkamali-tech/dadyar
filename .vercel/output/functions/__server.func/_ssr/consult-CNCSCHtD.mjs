import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as PageHeader, h as Button, u as useAppStore } from "./router-DEGNaH46.mjs";
import { i as Textarea } from "./field-Ci6cH19-.mjs";
import { n as consultChat } from "./legal-ai-BN46Euis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consult-CNCSCHtD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Consult() {
	const chats = useAppStore((s) => s.chats);
	const addChat = useAppStore((s) => s.addChat);
	const clearChat = useAppStore((s) => s.clearChat);
	const [text, setText] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function send() {
		const q = text.trim();
		if (!q) return;
		setText("");
		addChat("user", q);
		setLoading(true);
		setError(null);
		try {
			const history = [...useAppStore.getState().chats].filter((m) => m.id !== "intro").map((m) => ({
				role: m.role,
				content: m.content
			}));
			const res = await consultChat({ data: { messages: history } });
			if (!res.ok) setError(res.error);
			else addChat("assistant", res.text);
		} catch {
			setError("ارتباط با دستیار برقرار نشد.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise mx-auto max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "مسیر مشاوره — نه وکالت",
			title: "مشاوره هوشمند حقوقی",
			description: "پاسخ‌ها نظر مشورتی است. برای صلح و سازش یا شعبه خصوصی از مسیرهای جدا استفاده کنید.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				onClick: clearChat,
				children: "گفتگوی تازه"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-paper-2 shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[52vh] space-y-3 overflow-y-auto p-4",
				children: [chats.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: m.role === "user" ? "mr-8 rounded-lg bg-navy px-3 py-2 text-sm leading-7 text-paper" : "ml-8 rounded-lg bg-paper px-3 py-2 text-sm leading-7",
					children: m.content
				}, m.id)), loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "در حال بررسی موضوع…"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line p-3",
				children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm text-danger",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						className: "min-h-24",
						value: text,
						onChange: (e) => setText(e.target.value),
						placeholder: "سؤال حقوقی خود را بنویسید",
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send();
							}
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-2",
						onClick: send,
						disabled: loading,
						children: "ارسال"
					})
				]
			})]
		})]
	});
}
//#endregion
export { Consult as component };
