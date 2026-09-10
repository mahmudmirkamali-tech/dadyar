import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as cn } from "./router-DEGNaH46.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-Ci6cH19-.js
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-ink", className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-line bg-paper-2 px-3 text-sm text-ink outline-none", "placeholder:text-muted/80 focus:border-teal focus:ring-2 focus:ring-teal/20", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg border border-line bg-paper-2 px-3 py-2.5 text-sm leading-6 text-ink outline-none", "placeholder:text-muted/80 focus:border-teal focus:ring-2 focus:ring-teal/20", className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full rounded-md border border-line bg-paper-2 px-3 text-sm text-ink outline-none", "focus:border-teal focus:ring-2 focus:ring-teal/20", className),
		...props,
		children
	});
}
//#endregion
export { Textarea as i, Label as n, Select as r, Input as t };
