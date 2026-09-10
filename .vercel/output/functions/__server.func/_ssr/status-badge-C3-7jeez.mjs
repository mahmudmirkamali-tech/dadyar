import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Badge, o as STATUS_LABEL, s as TRACK_LABEL } from "./router-DEGNaH46.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-C3-7jeez.js
var import_jsx_runtime = require_jsx_runtime();
var statusTone = {
	intake: "muted",
	consult: "navy",
	sulh: "teal",
	dispute: "warn",
	advocacy: "navy",
	closed: "ok",
	enforced: "ok"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: statusTone[status],
		children: STATUS_LABEL[status]
	});
}
function TrackBadge({ track }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: track === "sulh" ? "teal" : track === "dispute" ? "warn" : track === "advocacy" ? "navy" : "muted",
		children: TRACK_LABEL[track]
	});
}
//#endregion
export { TrackBadge as n, StatusBadge as t };
