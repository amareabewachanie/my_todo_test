"use strict";
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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n            url: 'http://localhost:5000/api/todos',\n            method: req.method,\n            data: req.body,\n            params: req.params\n        });\n        res.status(200).json({\n            todos: response.data\n        });\n    } catch (error) {\n        res.status(500).json(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRVYsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDSiw0Q0FBSyxDQUFDLENBQUM7WUFDNUJLLEdBQUcsRUFBRSxDQUFpQztZQUN0Q0MsTUFBTSxFQUFFSixHQUFHLENBQUNJLE1BQU07WUFDbEJDLElBQUksRUFBRUwsR0FBRyxDQUFDTSxJQUFJO1lBQ2RDLE1BQU0sRUFBRVAsR0FBRyxDQUFDTyxNQUFNO1FBQ3BCLENBQUM7UUFDRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ0csSUFBSTtRQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBRU0sS0FBSyxFQUFFLENBQUM7UUFDZlYsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNFLEtBQUs7SUFDNUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy1uZXh0anMtYXBwLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzAyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90b2RvcycsXHJcbiAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcclxuICAgICAgZGF0YTogcmVxLmJvZHksXHJcbiAgICAgIHBhcmFtczogcmVxLnBhcmFtcyxcclxuICAgIH0pXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvZG9zOiByZXNwb25zZS5kYXRhIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInBhcmFtcyIsInN0YXR1cyIsImpzb24iLCJ0b2RvcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();