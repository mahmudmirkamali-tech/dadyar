import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-ai-BN46Euis.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var analyzeMatter = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("1b2161ab14979aa152ad18e900d119f3f6e758eae6c730d93b8f206cee0ad40d"));
var consultChat = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("61ba1250a496ebd3a1443c7e66563a6e16f0742d4bdc133f861b793ac283b83d"));
var draftDocument = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("78b18d8949e4fc93b1dc3951f8c9f60881289c9c912dc26c7fe30f766c3b72c6"));
//#endregion
export { consultChat as n, draftDocument as r, analyzeMatter as t };
