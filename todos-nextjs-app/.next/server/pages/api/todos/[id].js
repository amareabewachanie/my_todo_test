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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    console.log(req.data);\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n            url: 'http://localhost:5000/api/todos/' + req.query.id,\n            method: req.method,\n            data: req.body,\n            params: req.params\n        });\n        res.status(200).json({\n            todos: response.data\n        });\n    } catch (error) {\n        res.status(500).json(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFVixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUk7SUFDcEIsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNQLDRDQUFLLENBQUMsQ0FBQztZQUM1QlEsR0FBRyxFQUFFLENBQWtDLG9DQUFHTixHQUFHLENBQUNPLEtBQUssQ0FBQ0MsRUFBRTtZQUN0REMsTUFBTSxFQUFFVCxHQUFHLENBQUNTLE1BQU07WUFDbEJMLElBQUksRUFBRUosR0FBRyxDQUFDVSxJQUFJO1lBQ2RDLE1BQU0sRUFBRVgsR0FBRyxDQUFDVyxNQUFNO1FBQ3BCLENBQUM7UUFDRFYsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxLQUFLLEVBQUVULFFBQVEsQ0FBQ0QsSUFBSTtRQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBRVcsS0FBSyxFQUFFLENBQUM7UUFDZmQsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNFLEtBQUs7SUFDNUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy1uZXh0anMtYXBwLy4vcGFnZXMvYXBpL3RvZG9zL1tpZF0udHM/N2I5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc29sZS5sb2cocmVxLmRhdGEpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3RvZG9zLycgKyByZXEucXVlcnkuaWQsXHJcbiAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcclxuICAgICAgZGF0YTogcmVxLmJvZHksXHJcbiAgICAgIHBhcmFtczogcmVxLnBhcmFtcyxcclxuICAgIH0pXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvZG9zOiByZXNwb25zZS5kYXRhIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXNwb25zZSIsInVybCIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJib2R5IiwicGFyYW1zIiwic3RhdHVzIiwianNvbiIsInRvZG9zIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();