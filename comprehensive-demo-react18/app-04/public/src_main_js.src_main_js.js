"use strict";
(self["webpackChunk_comprehensive_demo_react18_app_04"] = self["webpackChunk_comprehensive_demo_react18_app_04"] || []).push([["src_main_js"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadApp": () => (/* binding */ loadApp)
/* harmony export */ });
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");


const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.querySelector('#app_04'),
  props: {
    name: 'world',
  },
});

const loadApp = id => {
  return new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
    target: document.querySelector('#app_04'),
    props: { name: 'world' },
  });
};

window.app = app;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1.svelte-1ucbz36{color:purple}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnN2ZWx0ZSIsInNvdXJjZXMiOlsiQXBwLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IG5hbWU7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2UtbmFtZVwiLCBlID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAodHlwZW9mIGUuZGV0YWlsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBuYW1lID0gZS5kZXRhaWwubmFtZTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgaDEge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbjwvc3R5bGU+XG5cbjxoMT5IZWxsbyBGcm9tIFN2ZWx0ZSB7bmFtZX0hPC9oMT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZRSxFQUFFLGVBQUMsQ0FBQyxBQUNGLEtBQUssQ0FBRSxNQUFNLEFBQ2YsQ0FBQyJ9*/", "",{"version":3,"sources":["webpack://./src/App.svelte"],"names":[],"mappings":"AAYE,kBAAI,YACW;AAZjB,ypBAAypB","sourcesContent":["<script>\n  export let name;\n\n  window.addEventListener(\"change-name\", e => {\n    console.log(e);\n    if (typeof e.detail !== \"undefined\") {\n      name = e.detail.name;\n    }\n  });\n</script>\n\n<style>\n  h1 {\n    color: purple;\n  }\n</style>\n\n<h1>Hello From Svelte {name}!</h1>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.svelte.0.css!=!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./src/App.svelte.0.css!=!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_svelte_loader_index_js_cssPath_Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte_0_css_App_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./App.svelte */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_svelte_loader_index_js_cssPath_Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte_0_css_App_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_svelte_loader_index_js_cssPath_Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte_0_css_App_svelte__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/App.svelte":
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Users_peacedate_Projects_module_federation_examples_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svelte-loader/lib/hot-api.js */ "../../node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var _Users_peacedate_Projects_module_federation_examples_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "../../node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* harmony import */ var _Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte_0_css_svelte_loader_cssPath_Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte_0_css_Users_peacedate_Projects_module_federation_examples_comprehensive_demo_react18_app_04_src_App_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/App.svelte.0.css!=!svelte-loader?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte */ "./src/App.svelte.0.css!=!../../node_modules/svelte-loader/index.js?cssPath=/Users/peacedate/Projects/module-federation-examples/comprehensive-demo-react18/app-04/src/App.svelte.0.css!./src/App.svelte");
/* module decorator */ module = __webpack_require__.hmd(module);
/* src/App.svelte generated by Svelte v3.49.0 */


function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;

	return {
		c() {
			h1 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h1");
			t0 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Hello From Svelte ");
			t1 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(/*name*/ ctx[0]);
			t2 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("!");
			Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(h1, "class", "svelte-1ucbz36");
		},
		m(target, anchor) {
			Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(target, h1, anchor);
			Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(h1, t0);
			Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(h1, t1);
			Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(h1, t2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1) Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(t1, /*name*/ ctx[0]);
		},
		i: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
		o: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
		d(detaching) {
			if (detaching) Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(h1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	window.addEventListener("change-name", e => {
		console.log(e);

		if (typeof e.detail !== "undefined") {
			$$invalidate(0, name = e.detail.name);
		}
	});

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
	};

	return [name];
}

class App extends Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {
	constructor(options) {
		super();
		Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, options, instance, create_fragment, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'svelte/internal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { name: 0 });
	}
}

if (module && module.hot) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);




/***/ })

}]);
//# sourceMappingURL=src_main_js.src_main_js.js.map