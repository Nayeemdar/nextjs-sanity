"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"clientConfig\": function() { return /* binding */ clientConfig; },\n/* harmony export */   \"urlFor\": function() { return /* binding */ urlFor; }\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"./node_modules/@sanity/client/lib/sanityClient.js\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar clientConfig = {\n    projectId: \"xeej86go\",\n    dataset: \"production1\"\n};\nvar client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: clientConfig.projectId,\n    dataset: clientConfig.dataset,\n    apiVersion: \"2022-10-09\",\n    useCdn: true\n});\nvar builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nvar urlFor = function(source) {\n    return builder.image(source);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDTTtBQUV6QyxJQUFNRSxZQUFZLEdBQUc7SUFDMUJDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxPQUFPLEVBQUUsYUFBYTtDQUN2QjtBQUtNLElBQU1DLE1BQU0sR0FBR0wscURBQVksQ0FBQztJQUNqQ0csU0FBUyxFQUFFRCxZQUFZLENBQUNDLFNBQVM7SUFDakNDLE9BQU8sRUFBRUYsWUFBWSxDQUFDRSxPQUFPO0lBQzdCRSxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUM7QUFFSCxJQUFNQyxPQUFPLEdBQUdQLHdEQUFlLENBQUNJLE1BQU0sQ0FBQztBQUVoQyxJQUFNSSxNQUFNLEdBQUcsU0FBQ0MsTUFBTTtXQUFLRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50LmpzP2U2OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcblxuZXhwb3J0IGNvbnN0IGNsaWVudENvbmZpZyA9IHtcbiAgcHJvamVjdElkOiAneGVlajg2Z28nLFxuICBkYXRhc2V0OiAncHJvZHVjdGlvbjEnLFxufVxuXG5cblxuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBjbGllbnRDb25maWcucHJvamVjdElkLFxuICBkYXRhc2V0OiBjbGllbnRDb25maWcuZGF0YXNldCxcbiAgYXBpVmVyc2lvbjogJzIwMjItMTAtMDknLFxuICB1c2VDZG46IHRydWUsXG59KTtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gYnVpbGRlci5pbWFnZShzb3VyY2UpOyJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnRDb25maWciLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiY2xpZW50IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client.js\n"));

/***/ })

});