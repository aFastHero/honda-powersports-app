/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./axios.js":
/*!******************!*\
  !*** ./axios.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// client/axios.js\n\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:3001\"\n});\ninstance.interceptors.request.use((config)=>{\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"token\");\n    if (token) {\n        config.headers[\"Authorization\"] = `Bearer ${token}`;\n    }\n    return config;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9heGlvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrQkFBa0I7QUFDUTtBQUNNO0FBRWhDLE1BQU1FLFdBQVdGLG9EQUFZLENBQUM7SUFDNUJJLFNBQVM7QUFDWDtBQUVBRixTQUFTRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFNBQVc7SUFDNUMsTUFBTUMsUUFBUVIscURBQVcsQ0FBQztJQUMxQixJQUFJUSxPQUFPO1FBQ1RELE9BQU9HLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRUYsTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxPQUFPRDtBQUNUO0FBRUEsaUVBQWVOLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9heGlvcy5qcz9iNGEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC9heGlvcy5qc1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScsXG59KTtcblxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./axios.js\n");

/***/ }),

/***/ "./hocs/withAuth.js":
/*!**************************!*\
  !*** ./hocs/withAuth.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios */ \"./axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__]);\n([_axios__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// client/hocs/withAuth.js\n\n\n\n\n\nconst withAuth = (Component)=>{\n    const AuthenticatedComponent = (props)=>{\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (!Component.publicRoute) {\n                (async ()=>{\n                    try {\n                        const token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"token\");\n                        if (!token) {\n                            router.push(\"/login\");\n                            return;\n                        }\n                        const response = await _axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/me\");\n                        console.log(\"Response:\", response);\n                        if (!response.data.user) {\n                            router.push(\"/login\");\n                        }\n                    } catch (error) {\n                        console.error(\"Error:\", error);\n                        router.push(\"/login\");\n                    }\n                })();\n            }\n        }, [\n            router\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/afast/projects/honda-powersports-app/client/hocs/withAuth.js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, undefined);\n    };\n    return AuthenticatedComponent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2NzL3dpdGhBdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7QUFDZTtBQUNEO0FBQ1g7QUFDRztBQUVoQyxNQUFNSyxXQUFXLENBQUNDLFlBQWM7SUFDOUIsTUFBTUMseUJBQXlCLENBQUNDLFFBQVU7UUFDeEMsTUFBTUMsU0FBU1Asc0RBQVNBO1FBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1lBQ2QsSUFBSSxDQUFDSyxVQUFVSSxXQUFXLEVBQUU7Z0JBQ3pCLFdBQVk7b0JBQ1gsSUFBSTt3QkFDRixNQUFNQyxRQUFRUCxxREFBVyxDQUFDO3dCQUMxQixJQUFJLENBQUNPLE9BQU87NEJBQ1ZGLE9BQU9JLElBQUksQ0FBQzs0QkFDWjt3QkFDRixDQUFDO3dCQUNELE1BQU1DLFdBQVcsTUFBTVgsa0RBQVMsQ0FBQzt3QkFDakNZLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRjt3QkFDekIsSUFBSSxDQUFDQSxTQUFTRyxJQUFJLENBQUNDLElBQUksRUFBRTs0QkFDdkJULE9BQU9JLElBQUksQ0FBQzt3QkFDZCxDQUFDO29CQUNILEVBQUUsT0FBT00sT0FBTzt3QkFDZEosUUFBUUksS0FBSyxDQUFDLFVBQVVBO3dCQUN4QlYsT0FBT0ksSUFBSSxDQUFDO29CQUNkO2dCQUNGO1lBQ0YsQ0FBQztRQUNILEdBQUc7WUFBQ0o7U0FBTztRQUVYLHFCQUFPLDhEQUFDSDtZQUFXLEdBQUdFLEtBQUs7Ozs7OztJQUM3QjtJQUVBLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZUYsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2hvY3Mvd2l0aEF1dGguanM/ZWU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQvaG9jcy93aXRoQXV0aC5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICcuLi9heGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCB3aXRoQXV0aCA9IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgQXV0aGVudGljYXRlZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghQ29tcG9uZW50LnB1YmxpY1JvdXRlKSB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbWUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEudXNlcikge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgfSwgW3JvdXRlcl0pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICByZXR1cm4gQXV0aGVudGljYXRlZENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJDb29raWVzIiwid2l0aEF1dGgiLCJDb21wb25lbnQiLCJBdXRoZW50aWNhdGVkQ29tcG9uZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJwdWJsaWNSb3V0ZSIsInRva2VuIiwiZ2V0IiwicHVzaCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hocs/withAuth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hocs/withAuth */ \"./hocs/withAuth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__]);\n_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// client/pages/_app.js\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction App({ Component , pageProps  }) {\n    const AuthComponent = (0,_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Component);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthComponent, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/afast/projects/honda-powersports-app/client/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/afast/projects/honda-powersports-app/client/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUN3QztBQUNqQztBQUNVO0FBRXhDLE1BQU1HLGNBQWMsSUFBSUgsb0RBQVdBO0FBRW5DLFNBQVNJLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNyQyxNQUFNQyxnQkFBZ0JMLDBEQUFRQSxDQUFDRztJQUUvQixxQkFDRSw4REFBQ0osNERBQW1CQTtRQUFDTyxRQUFRTDtrQkFDM0IsNEVBQUNJO1lBQWUsR0FBR0QsU0FBUzs7Ozs7Ozs7Ozs7QUFHbEM7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQvcGFnZXMvX2FwcC5qc1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9ob2NzL3dpdGhBdXRoJztcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBBdXRoQ29tcG9uZW50ID0gd2l0aEF1dGgoQ29tcG9uZW50KTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPEF1dGhDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ3aXRoQXV0aCIsInF1ZXJ5Q2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQXV0aENvbXBvbmVudCIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();