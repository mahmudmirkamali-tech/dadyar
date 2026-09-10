import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as cn } from "./router-DEGNaH46.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-UFV7CcP6.js
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "30",
				height: "30",
				rx: "8",
				fill: "currentColor",
				className: "text-teal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 21V12.5c0-.8.6-1.5 1.5-1.5H13M24 21V12.5c0-.8-.6-1.5-1.5-1.5H19M10.5 21h11",
				fill: "none",
				stroke: "#f3eee4",
				strokeWidth: "1.7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 7.5v4.2",
				stroke: "#f3eee4",
				strokeWidth: "1.7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "6.6",
				r: "1.15",
				fill: "#f3eee4"
			})
		]
	});
}
function Wordmark({ inverse = false, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: inverse ? "text-teal" : "text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("text-base font-semibold tracking-tight", inverse ? "text-paper" : "text-ink"),
				children: "زندگی"
			}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("text-[11px]", inverse ? "text-paper/55" : "text-muted"),
				children: "داشبورد حقوقی شهروند"
			})]
		})]
	});
}
//#endregion
export { Wordmark as n, Mark as t };
