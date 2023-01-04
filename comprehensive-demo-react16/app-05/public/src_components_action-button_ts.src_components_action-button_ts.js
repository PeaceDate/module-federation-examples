"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_comprehensive_demo_react16_app_05"] = self["webpackChunk_comprehensive_demo_react16_app_05"] || []).push([["src_components_action-button_ts"],{

/***/ "./src/components/action-button.ts":
/*!*****************************************!*\
  !*** ./src/components/action-button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionButton\": () => (/* binding */ ActionButton)\n/* harmony export */ });\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"../../node_modules/lit-element/lit-element.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nlet ActionButton = class ActionButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n    static get styles() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__.css `\n      button {\n        display: inline-block;\n        border-radius: 3px;\n        padding: 0.5rem 0;\n        margin: 0.5rem 1rem;\n        width: 11rem;\n        background: palevioletred;\n        color: white;\n        font-size: 1rem;\n        font-family: sans-serif;\n      }\n    `;\n    }\n    alert() {\n        alert('You have pressed a button.');\n    }\n    render() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__.html ` <button @click=\"${this.alert}\">${this.foo}</button> `;\n    }\n};\n__decorate([\n    (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.property)({ type: String })\n], ActionButton.prototype, \"foo\", void 0);\nActionButton = __decorate([\n    (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.customElement)('action-button')\n], ActionButton);\n\n\n\n//# sourceURL=webpack://@comprehensive-demo-react16/app-05/./src/components/action-button.ts?");

/***/ })

}]);