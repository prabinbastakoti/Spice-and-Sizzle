/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/homepage.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/homepage.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.navbar {
    height: 23vh;
    background-color: #FFD700;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.heading img {
    width: 350px;
    cursor: pointer;
    margin: 25px 0px 12px 0px;
}

.menus ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menus ul li {
    list-style-type: none;
    margin-right: 5px;
    font-weight: bolder;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.4s;
    position: relative;
    padding: 5px 12px;
    color: #000;
    text-shadow: 0.8px 0 #000;
    letter-spacing: 2px;
    font-weight: bold;
}

.menus ul li:hover {
    transform: scaleX(1);
    color: #FFD700;
}


.menus ul li::before {

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    transition: 0.4s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
}

.menus ul li:hover::before {
    transition: transform 0.4s;
    transform-origin: left;
    transform: scaleX(1);
}

.menus ul li.active {
    background-color: #000;
    color: #FFD700;
    transform: none;
}

.container {
    height: 77vh;
    /* The image used */
    background-color: #FFD700;

    /* Full height */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    display: flex;
    justify-content: center;
    align-items: center;
}

.container-heading {
    font-size: 6rem;
    font-weight: bolder;
    color: white;
}

.container-text {
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
    letter-spacing: 1px;
    color: white;
}

button {
    display: block;
    margin: 35px auto 0px auto;
    border: 2px solid #FFD700;
    padding: 10px 20px;
    background: transparent;
    font-size: 0.8rem;
    cursor: pointer;
    color: #FFD700;
    text-shadow: 0.8px 0 #FFD700;
    letter-spacing: 2px;
    font-weight: bold;
    transition: background .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

button:hover {
    background-color: #FFD700;
    color: black;
    text-shadow: 0.8px 0 black;
}

.footer {
    height: 10vh;
    background-color: #000;
}

`, "",{"version":3,"sources":["webpack://./src/styles/homepage.css"],"names":[],"mappings":";AAGA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,cAAc;AAClB;;;AAGA;;IAEI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;;IAEzB,gBAAgB;;IAEhB,sCAAsC;IACtC,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;;;IAGtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,yBAAyB;IACzB,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,4BAA4B;IAC5B,mBAAmB;IACnB,iBAAiB;IACjB,kEAAkE;AACtE;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Poppins&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\n.navbar {\n    height: 23vh;\n    background-color: #FFD700;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n.heading img {\n    width: 350px;\n    cursor: pointer;\n    margin: 25px 0px 12px 0px;\n}\n\n.menus ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menus ul li {\n    list-style-type: none;\n    margin-right: 5px;\n    font-weight: bolder;\n    font-size: 0.8rem;\n    cursor: pointer;\n    transition: 0.4s;\n    position: relative;\n    padding: 5px 12px;\n    color: #000;\n    text-shadow: 0.8px 0 #000;\n    letter-spacing: 2px;\n    font-weight: bold;\n}\n\n.menus ul li:hover {\n    transform: scaleX(1);\n    color: #FFD700;\n}\n\n\n.menus ul li::before {\n\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: black;\n    transition: 0.4s;\n    transform-origin: right;\n    transform: scaleX(0);\n    z-index: -1;\n}\n\n.menus ul li:hover::before {\n    transition: transform 0.4s;\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n.menus ul li.active {\n    background-color: #000;\n    color: #FFD700;\n    transform: none;\n}\n\n.container {\n    height: 77vh;\n    /* The image used */\n    background-color: #FFD700;\n\n    /* Full height */\n\n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container-heading {\n    font-size: 6rem;\n    font-weight: bolder;\n    color: white;\n}\n\n.container-text {\n    display: block;\n    text-align: center;\n    font-size: 1rem;\n    font-weight: bolder;\n    letter-spacing: 1px;\n    color: white;\n}\n\nbutton {\n    display: block;\n    margin: 35px auto 0px auto;\n    border: 2px solid #FFD700;\n    padding: 10px 20px;\n    background: transparent;\n    font-size: 0.8rem;\n    cursor: pointer;\n    color: #FFD700;\n    text-shadow: 0.8px 0 #FFD700;\n    letter-spacing: 2px;\n    font-weight: bold;\n    transition: background .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n\nbutton:hover {\n    background-color: #FFD700;\n    color: black;\n    text-shadow: 0.8px 0 black;\n}\n\n.footer {\n    height: 10vh;\n    background-color: #000;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/AgentOrange.ttf */ "./src/assets/fonts/AgentOrange.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: spice;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.dark-navbar {
    height: 23vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
}



.menus-dark ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menus-dark ul li {
    list-style-type: none;
    margin-right: 5px;
    font-weight: bolder;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.4s;
    position: relative;
    padding: 5px 12px;
    color: #FFD700;
    text-shadow: 0.8px 0 #FFD700;
    letter-spacing: 2px;
    font-weight: bold;
}



.menus-dark ul li:hover {
    transform: scaleX(1);
    color: #000;
}


.menus-dark ul li::before {

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFD700;
    transition: 0.4s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
}

.menus-dark ul li:hover::before {
    transition: transform 0.4s;
    transform-origin: left;
    transform: scaleX(1);
}


.menus-dark ul li.active {
    background-color: #FFD700;
    color: #000;
    transform: none;
}

h1{
    font-family: spice;
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 600;
    margin-bottom: 25px;
}

p {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 15px;
    text-transform: capitalize;
}

h3 {
    font-weight: 600;
    text-shadow: 0.8px 0 #000;
    letter-spacing: 2px;
    font-size: 1.3rem;
    letter-spacing: 2px;
    margin-bottom: 15px;
    text-transform: uppercase;
}

.menuContainer {
    background-color: #FFD700;
    color: #000;
    min-height: 77vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 300px 200px 150px 200px;
    gap: 60px;
}

.menuContainer img {
    width: 100%;
    margin-bottom: 15px;
}

hr {
    margin-top: 25px;
    border: solid 1px black;
}`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,4CAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,UAAU;AACd;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,4BAA4B;IAC5B,mBAAmB;IACnB,iBAAiB;AACrB;;;;AAIA;IACI,oBAAoB;IACpB,WAAW;AACf;;;AAGA;;IAEI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,sBAAsB;IACtB,oBAAoB;AACxB;;;AAGA;IACI,yBAAyB;IACzB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,gCAAgC;IAChC,SAAS;AACb;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: spice;\n    src: url(../assets/fonts/AgentOrange.ttf);\n}\n\n.dark-navbar {\n    height: 23vh;\n    background-color: #000;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n}\n\n\n\n.menus-dark ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menus-dark ul li {\n    list-style-type: none;\n    margin-right: 5px;\n    font-weight: bolder;\n    font-size: 0.8rem;\n    cursor: pointer;\n    transition: 0.4s;\n    position: relative;\n    padding: 5px 12px;\n    color: #FFD700;\n    text-shadow: 0.8px 0 #FFD700;\n    letter-spacing: 2px;\n    font-weight: bold;\n}\n\n\n\n.menus-dark ul li:hover {\n    transform: scaleX(1);\n    color: #000;\n}\n\n\n.menus-dark ul li::before {\n\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #FFD700;\n    transition: 0.4s;\n    transform-origin: right;\n    transform: scaleX(0);\n    z-index: -1;\n}\n\n.menus-dark ul li:hover::before {\n    transition: transform 0.4s;\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n\n.menus-dark ul li.active {\n    background-color: #FFD700;\n    color: #000;\n    transform: none;\n}\n\nh1{\n    font-family: spice;\n    font-size: 2rem;\n    letter-spacing: 3px;\n    font-weight: 600;\n    margin-bottom: 25px;\n}\n\np {\n    font-size: 0.85rem;\n    font-weight: 600;\n    letter-spacing: 1px;\n    margin-bottom: 15px;\n    text-transform: capitalize;\n}\n\nh3 {\n    font-weight: 600;\n    text-shadow: 0.8px 0 #000;\n    letter-spacing: 2px;\n    font-size: 1.3rem;\n    letter-spacing: 2px;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n}\n\n.menuContainer {\n    background-color: #FFD700;\n    color: #000;\n    min-height: 77vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 300px 200px 150px 200px;\n    gap: 60px;\n}\n\n.menuContainer img {\n    width: 100%;\n    margin-bottom: 15px;\n}\n\nhr {\n    margin-top: 25px;\n    border: solid 1px black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/homepage.css":
/*!*********************************!*\
  !*** ./src/styles/homepage.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./homepage.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/homepage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/cleanDOM.js":
/*!***********************************!*\
  !*** ./src/functions/cleanDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
 const cleanDOM = () => {
    const content = document.querySelector('.content');
    content.innerHTML = "";
 }

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanDOM);

/***/ }),

/***/ "./src/functions/initialLoad.js":
/*!**************************************!*\
  !*** ./src/functions/initialLoad.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/favicon.png */ "./src/assets/favicon.png");



const initialLoad = () => {

    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__;

    document.head.appendChild(faviconLink);

    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg");



const homepage = function() {

    const content = document.querySelector('.content');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const headingLogo = document.createElement('img');
    headingLogo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

    heading.appendChild(headingLogo);
    navbar.appendChild(heading);

    const menus = document.createElement('div');
    menus.classList.add('menus');

    const ul = document.createElement('ul');


    const menuList = ['HOME', 'MENUS','ABOUT US'];

    for (let i = 0; i < menuList.length; i++) {
        const li = document.createElement('li');
        if (i == 0) {
            li.setAttribute('class', 'active');
        }
        li.setAttribute('id', `${menuList[i]}`);
        li.innerText = menuList[i];
        ul.appendChild(li);
    }

    menus.appendChild(ul);
    navbar.appendChild(menus);

    content.appendChild(navbar);

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.backgroundImage = `url(${_assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__})`;


    const containerContents = document.createElement('div');
    containerContents.classList.add('container-contents');


    const containerHeading = document.createElement('div');
    containerHeading.classList.add('container-heading');
    containerHeading.innerText = "Spice & Sizzle Supper Club";


    const containerText = document.createElement('div');
    containerText.classList.add('container-text');
    containerText.innerText = 'A fancy 4-course Spice & Sizzle dine-in experience that will leave you in smoke. \
                                Get your tickets now for July, August & September.'


    const button = document.createElement('button');
    button.setAttribute("type", "button");
    button.innerText ="GET YOUR TICKET";


    containerContents.appendChild(containerHeading);
    containerContents.appendChild(containerText);
    containerContents.appendChild(button);

    container.appendChild(containerContents);

    content.appendChild(container);

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo-dark.svg */ "./src/assets/logo-dark.svg");
/* harmony import */ var _assets_bbq_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/bbq.jpg */ "./src/assets/bbq.jpg");
/* harmony import */ var _assets_wings_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/wings.jpg */ "./src/assets/wings.jpg");
/* harmony import */ var _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sandwich.jpg */ "./src/assets/sandwich.jpg");





const menuPage = function() {

    const content = document.querySelector(".content");

    const navbar = document.createElement('div');
    navbar.classList.add('dark-navbar');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const headingLogo = document.createElement('img');
    headingLogo.src = _assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_0__;

    heading.appendChild(headingLogo);
    navbar.appendChild(heading);

    const menus = document.createElement('div');
    menus.classList.add('menus-dark');

    const ul = document.createElement('ul');


    const menuList = ['HOME', 'MENUS', 'ABOUT US'];

    for (let i = 0; i < menuList.length; i++) {
        const li = document.createElement('li');
        if (i == 1) {
            li.setAttribute('class', 'active');
        }
        li.setAttribute('id', `${menuList[i]}`);
        li.innerText = menuList[i];
        ul.appendChild(li);
    }

    menus.appendChild(ul);
    navbar.appendChild(menus);

    content.appendChild(navbar);

    // Container Starts here

    const container = document.createElement('div');
    container.classList.add('menuContainer');

    const barbeque = document.createElement('div');
    barbeque.classList.add('barbeque');

    const barbequeHeading = document.createElement('h1');
    barbequeHeading.innerHTML = 'Barbeque';

    const headingParagraph = document.createElement('p');
    headingParagraph.innerHTML = 'Smoked daily, all served with Texas toast & pickles. Sold by the 1/2 lb.'

    const barbequeImage = document.createElement('img');
    barbequeImage.src = _assets_bbq_jpg__WEBPACK_IMPORTED_MODULE_1__;
    
    const brisketHeading = document.createElement('h3');
    brisketHeading.innerHTML = 'Brisket';

    const brisketParagraph = document.createElement('p');
    brisketParagraph.innerHTML = 'chopped or sliced';

    const porkRibTips = document.createElement('h3');
    porkRibTips.innerHTML = 'Pork rib tips';

    const porkSpareRibs = document.createElement('h3');
    porkSpareRibs.innerHTML = 'Pork spare ribs';

    const pulledPorkShoulder = document.createElement('h3');
    pulledPorkShoulder.innerHTML = 'Pulled Pork Shoulder';

    const porkBelly = document.createElement('h3');
    porkBelly.innerHTML = 'Pork Belly';

    const turkeyBreast = document.createElement('h3');
    turkeyBreast.innerHTML = 'Turkey Breast';

    const chickenHeading = document.createElement('h3');
    chickenHeading.innerHTML = 'Chicken';

    const chickenImg = document.createElement('img');
    chickenImg.src = _assets_wings_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const chickenWings = document.createElement('h3');
    chickenWings.innerHTML = 'Chicken Wings';

    const JalapenoCheeseSausage = document.createElement('h3');
    JalapenoCheeseSausage.innerHTML = 'JALAPEÑO CHEESE SAUSAGE';

    const hr = document.createElement('hr');

    barbeque.appendChild(barbequeHeading)
    barbeque.appendChild(headingParagraph)
    barbeque.appendChild(barbequeImage)
    barbeque.appendChild(brisketHeading)
    barbeque.appendChild(brisketParagraph)
    barbeque.appendChild(porkRibTips)
    barbeque.appendChild(porkSpareRibs)
    barbeque.appendChild(pulledPorkShoulder)
    barbeque.appendChild(porkBelly)
    barbeque.appendChild(turkeyBreast)
    barbeque.appendChild(chickenHeading)
    barbeque.appendChild(chickenImg)
    barbeque.appendChild(chickenWings)
    barbeque.appendChild(JalapenoCheeseSausage)
    barbeque.appendChild(hr);

    container.appendChild(barbeque);

    const signatureSandwiches = document.createElement('div');
    signatureSandwiches.classList.add('signatureSandwiches');

    const signatureSandwichesHeading = document.createElement('h1');
    signatureSandwichesHeading.innerHTML = 'SIGNATURE SANDWICHES';

    const signatureSandwichesParagraph = document.createElement('p');
    signatureSandwichesParagraph.innerHTML = 'When bread meets what could go between bread, there\'s no end to the culinary possibilities.';

    const carolinaHeading = document.createElement('h3');
    carolinaHeading.innerHTML = 'CAROLINA ON MY MIND';

    const carolinaParagraph = document.createElement('p');
    carolinaParagraph.innerHTML = 'pulled pork, crispy skin, coleslaw, spicy vinegar sauce, sesame bun';

    const musicCity = document.createElement('h3');
    musicCity.innerHTML = 'MUSIC CITY';

    const musicCityParagraph = document.createElement('p');
    musicCityParagraph.innerHTML = 'spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun';

    const bigCheese = document.createElement('h3');
    bigCheese.innerHTML = "BIG CHEESE";

    const bigCheeseParagraph = document.createElement('p');
    bigCheeseParagraph.innerHTML = 'chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun';

    const club = document.createElement('h3');
    club.innerHTML = 'CLUB';

    const clubParagraph = document.createElement('p');
    clubParagraph.innerHTML = 'smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast';

    const SANDWICHESImage = document.createElement('img');
    SANDWICHESImage.src = _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_3__;

    const jiveTurkey = document.createElement('h3');
    jiveTurkey.innerHTML = "JIVE TURKEY";

    const jiveTurkeyParagraph = document.createElement('p');
    jiveTurkeyParagraph.innerHTML = 'smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast';

    const texasRanger = document.createElement('h3');
    texasRanger.innerHTML = 'TEXAS RANGER';

    const texasRangerParagraph = document.createElement('p');
    texasRangerParagraph.innerHTML = 'sliced brisket, crispy onions, house pickles, BBQ sauce, texas toast';


    const jimmyMuscles = document.createElement('h3');
    jimmyMuscles.innerHTML = "JIMMY MUSCLES";

    const jimmyMusclesParagraph = document.createElement('p');
    jimmyMusclesParagraph.innerHTML = 'crispy chicken breast, pork belly, jalapeño relish, sticky garlic sauce, ranch, herbs, sesame bun';

    const texasFlood = document.createElement('h3');
    texasFlood.innerHTML = 'TEXAS FLOOD';

    const texasFloodParagraph = document.createElement('p');
    texasFloodParagraph.innerHTML = 'chopped brisket, jalapeño cheese sausage, spicy pickles, crispy onions, bbq sauce, sesame bun';

    const tofuBanhMi = document.createElement('h3');
    tofuBanhMi.innerHTML = 'TOFU BANH MI';

    const tofuBanhMiParagraph = document.createElement('p');
    tofuBanhMiParagraph.innerHTML = 'crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, sticky garlic, aioli, hoagie roll';

    const hr2 = document.createElement('hr');


    signatureSandwiches.appendChild(signatureSandwichesHeading);
    signatureSandwiches.appendChild(signatureSandwichesParagraph);
    signatureSandwiches.appendChild(carolinaHeading);
    signatureSandwiches.appendChild(carolinaParagraph);
    signatureSandwiches.appendChild(musicCity);
    signatureSandwiches.appendChild(musicCityParagraph);
    signatureSandwiches.appendChild(bigCheese);
    signatureSandwiches.appendChild(bigCheeseParagraph);
    signatureSandwiches.appendChild(club);
    signatureSandwiches.appendChild(clubParagraph);
    signatureSandwiches.appendChild(SANDWICHESImage);
    signatureSandwiches.appendChild(jiveTurkey);
    signatureSandwiches.appendChild(jiveTurkeyParagraph);
    signatureSandwiches.appendChild(texasRanger);
    signatureSandwiches.appendChild(texasRangerParagraph);
    signatureSandwiches.appendChild(jimmyMuscles);
    signatureSandwiches.appendChild(jimmyMusclesParagraph);
    signatureSandwiches.appendChild(texasFlood);
    signatureSandwiches.appendChild(texasFloodParagraph);
    signatureSandwiches.appendChild(tofuBanhMi);
    signatureSandwiches.appendChild(tofuBanhMiParagraph);
    signatureSandwiches.appendChild(hr2);

    container.appendChild(signatureSandwiches);

    content.appendChild(container);


    const footer = document.createElement('div');
    footer.classList.add('footer');

    content.appendChild(footer);
}

 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ }),

/***/ "./src/assets/bbq.jpg":
/*!****************************!*\
  !*** ./src/assets/bbq.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbq.jpg";

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.png";

/***/ }),

/***/ "./src/assets/fonts/AgentOrange.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/AgentOrange.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "AgentOrange.ttf";

/***/ }),

/***/ "./src/assets/logo-dark.svg":
/*!**********************************!*\
  !*** ./src/assets/logo-dark.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-dark.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/assets/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sandwich.jpg";

/***/ }),

/***/ "./src/assets/wings.jpg":
/*!******************************!*\
  !*** ./src/assets/wings.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wings.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/initialLoad */ "./src/functions/initialLoad.js");
/* harmony import */ var _functions_cleanDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/cleanDOM */ "./src/functions/cleanDOM.js");
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _styles_homepage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/homepage.css */ "./src/styles/homepage.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");








(0,_functions_initialLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.querySelector('.content').addEventListener('click', function (e) {

    if (e.target.id == 'HOME') {
        (0,_functions_cleanDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    if (e.target.id == 'MENUS') {
        (0,_functions_cleanDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvaG9tZXBhZ2UuY3NzIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL3NyYy9zdHlsZXMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL3NyYy9zdHlsZXMvaG9tZXBhZ2UuY3NzPzJmZDgiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlLy4vc3JjL3N0eWxlcy9tZW51LmNzcz83MDBhIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlLy4vc3JjL2Z1bmN0aW9ucy9jbGVhbkRPTS5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvLi9zcmMvZnVuY3Rpb25zL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwaWNlLXNpenpsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BpY2Utc2l6emxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwaWNlLXNpenpsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGljZS1zaXp6bGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NwaWNlLXNpenpsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvbmRyaW5hK091dGxpbmUmZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLm5hdmJhciB7XG4gICAgaGVpZ2h0OiAyM3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmhlYWRpbmcgaW1nIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMjVweCAwcHggMTJweCAwcHg7XG59XG5cbi5tZW51cyB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudXMgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXNoYWRvdzogMC44cHggMCAjMDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZW51cyB1bCBsaTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgY29sb3I6ICNGRkQ3MDA7XG59XG5cblxuLm1lbnVzIHVsIGxpOjpiZWZvcmUge1xuXG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubWVudXMgdWwgbGk6aG92ZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cblxuLm1lbnVzIHVsIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI0ZGRDcwMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogNzd2aDtcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XG5cbiAgICAvKiBGdWxsIGhlaWdodCAqL1xuXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci10ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzNXB4IGF1dG8gMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRDcwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIHRleHQtc2hhZG93OiAwLjhweCAwICNGRkQ3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1zaGFkb3c6IDAuOHB4IDAgYmxhY2s7XG59XG5cbi5mb290ZXIge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZXBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCOztJQUV6QixnQkFBZ0I7O0lBRWhCLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjs7O0lBR3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9uZHJpbmErT3V0bGluZSZmYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgaGVpZ2h0OiAyM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENzAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uaGVhZGluZyBpbWcge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAxMnB4IDBweDtcXG59XFxuXFxuLm1lbnVzIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51cyB1bCBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMC44cHggMCAjMDAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lbnVzIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIGNvbG9yOiAjRkZENzAwO1xcbn1cXG5cXG5cXG4ubWVudXMgdWwgbGk6OmJlZm9yZSB7XFxuXFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5tZW51cyB1bCBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4ubWVudXMgdWwgbGkuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNGRkQ3MDA7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzd2aDtcXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcXG5cXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cXG5cXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXItaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFpbmVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMzVweCBhdXRvIDBweCBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZENzAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDAuOHB4IDAgI0ZGRDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogMC44cHggMCBibGFjaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQWdlbnRPcmFuZ2UudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogc3BpY2U7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5kYXJrLW5hdmJhciB7XG4gICAgaGVpZ2h0OiAyM3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cblxuXG4ubWVudXMtZGFyayB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudXMtZGFyayB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIHRleHQtc2hhZG93OiAwLjhweCAwICNGRkQ3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5tZW51cy1kYXJrIHVsIGxpOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuXG4ubWVudXMtZGFyayB1bCBsaTo6YmVmb3JlIHtcblxuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI0ZGRDcwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubWVudXMtZGFyayB1bCBsaTpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG5cbi5tZW51cy1kYXJrIHVsIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiBzcGljZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAuOHB4IDAgIzAwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWVudUNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtaW4taGVpZ2h0OiA3N3ZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHBhZGRpbmc6IDMwMHB4IDIwMHB4IDE1MHB4IDIwMHB4O1xuICAgIGdhcDogNjBweDtcbn1cblxuLm1lbnVDb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5ociB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZDs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7OztBQUlBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7O0FBR0E7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzcGljZTtcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL0FnZW50T3JhbmdlLnR0Zik7XFxufVxcblxcbi5kYXJrLW5hdmJhciB7XFxuICAgIGhlaWdodDogMjN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuXFxuLm1lbnVzLWRhcmsgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVzLWRhcmsgdWwgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDAuOHB4IDAgI0ZGRDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblxcbi5tZW51cy1kYXJrIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5cXG4ubWVudXMtZGFyayB1bCBsaTo6YmVmb3JlIHtcXG5cXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZENzAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubWVudXMtZGFyayB1bCBsaTpob3Zlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG5cXG4ubWVudXMtZGFyayB1bCBsaS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENzAwO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6IHNwaWNlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtc2hhZG93OiAwLjhweCAwICMwMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBtaW4taGVpZ2h0OiA3N3ZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHBhZGRpbmc6IDMwMHB4IDIwMHB4IDE1MHB4IDIwMHB4O1xcbiAgICBnYXA6IDYwcHg7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIgY29uc3QgY2xlYW5ET00gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuIH1cblxuIGV4cG9ydCBkZWZhdWx0IGNsZWFuRE9NOyIsImltcG9ydCBob21lcGFnZSBmcm9tIFwiLi4vcGFnZXMvaG9tZXBhZ2VcIjtcbmltcG9ydCBmYXZpY29uIGZyb20gJy4uL2Fzc2V0cy9mYXZpY29uLnBuZyc7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZmF2aWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZmF2aWNvbkxpbmsucmVsID0gJ2ljb24nO1xuICAgIGZhdmljb25MaW5rLmhyZWYgPSBmYXZpY29uO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uTGluayk7XG5cbiAgICBob21lcGFnZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDsiLCJpbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvbG9nby5zdmcnO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vYXNzZXRzL2JhY2tncm91bmQuanBnJztcblxuY29uc3QgaG9tZXBhZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuXG4gICAgY29uc3QgaGVhZGluZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoZWFkaW5nTG9nby5zcmMgPSBsb2dvO1xuXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nTG9nbyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgbWVudXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51cy5jbGFzc0xpc3QuYWRkKCdtZW51cycpO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5cbiAgICBjb25zdCBtZW51TGlzdCA9IFsnSE9NRScsICdNRU5VUycsJ0FCT1VUIFVTJ107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bWVudUxpc3RbaV19YCk7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IG1lbnVMaXN0W2ldO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQodWwpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtZW51cyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kfSlgO1xuXG5cbiAgICBjb25zdCBjb250YWluZXJDb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1jb250ZW50cycpO1xuXG5cbiAgICBjb25zdCBjb250YWluZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaGVhZGluZycpO1xuICAgIGNvbnRhaW5lckhlYWRpbmcuaW5uZXJUZXh0ID0gXCJTcGljZSAmIFNpenpsZSBTdXBwZXIgQ2x1YlwiO1xuXG5cbiAgICBjb25zdCBjb250YWluZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItdGV4dCcpO1xuICAgIGNvbnRhaW5lclRleHQuaW5uZXJUZXh0ID0gJ0EgZmFuY3kgNC1jb3Vyc2UgU3BpY2UgJiBTaXp6bGUgZGluZS1pbiBleHBlcmllbmNlIHRoYXQgd2lsbCBsZWF2ZSB5b3UgaW4gc21va2UuIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCB5b3VyIHRpY2tldHMgbm93IGZvciBKdWx5LCBBdWd1c3QgJiBTZXB0ZW1iZXIuJ1xuXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID1cIkdFVCBZT1VSIFRJQ0tFVFwiO1xuXG5cbiAgICBjb250YWluZXJDb250ZW50cy5hcHBlbmRDaGlsZChjb250YWluZXJIZWFkaW5nKTtcbiAgICBjb250YWluZXJDb250ZW50cy5hcHBlbmRDaGlsZChjb250YWluZXJUZXh0KTtcbiAgICBjb250YWluZXJDb250ZW50cy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbnRlbnRzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlOyIsImltcG9ydCBsb2dvRGFyayBmcm9tICcuLi9hc3NldHMvbG9nby1kYXJrLnN2Zyc7XG5pbXBvcnQgYmJxIGZyb20gJy4uL2Fzc2V0cy9iYnEuanBnJztcbmltcG9ydCB3aW5ncyBmcm9tICcuLi9hc3NldHMvd2luZ3MuanBnJztcbmltcG9ydCBzYW5kd2ljaCBmcm9tICcuLi9hc3NldHMvc2FuZHdpY2guanBnJztcblxuY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnZGFyay1uYXZiYXInKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVhZGluZ0xvZ28uc3JjID0gbG9nb0Rhcms7XG5cbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmdMb2dvKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBtZW51cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVzLmNsYXNzTGlzdC5hZGQoJ21lbnVzLWRhcmsnKTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG4gICAgY29uc3QgbWVudUxpc3QgPSBbJ0hPTUUnLCAnTUVOVVMnLCAnQUJPVVQgVVMnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHttZW51TGlzdFtpXX1gKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbWVudUxpc3RbaV07XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICBtZW51cy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICAgIC8vIENvbnRhaW5lciBTdGFydHMgaGVyZVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcblxuICAgIGNvbnN0IGJhcmJlcXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFyYmVxdWUuY2xhc3NMaXN0LmFkZCgnYmFyYmVxdWUnKTtcblxuICAgIGNvbnN0IGJhcmJlcXVlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYmFyYmVxdWVIZWFkaW5nLmlubmVySFRNTCA9ICdCYXJiZXF1ZSc7XG5cbiAgICBjb25zdCBoZWFkaW5nUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRpbmdQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ1Ntb2tlZCBkYWlseSwgYWxsIHNlcnZlZCB3aXRoIFRleGFzIHRvYXN0ICYgcGlja2xlcy4gU29sZCBieSB0aGUgMS8yIGxiLidcblxuICAgIGNvbnN0IGJhcmJlcXVlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiYXJiZXF1ZUltYWdlLnNyYyA9IGJicTtcbiAgICBcbiAgICBjb25zdCBicmlza2V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYnJpc2tldEhlYWRpbmcuaW5uZXJIVE1MID0gJ0JyaXNrZXQnO1xuXG4gICAgY29uc3QgYnJpc2tldFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBicmlza2V0UGFyYWdyYXBoLmlubmVySFRNTCA9ICdjaG9wcGVkIG9yIHNsaWNlZCc7XG5cbiAgICBjb25zdCBwb3JrUmliVGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcG9ya1JpYlRpcHMuaW5uZXJIVE1MID0gJ1BvcmsgcmliIHRpcHMnO1xuXG4gICAgY29uc3QgcG9ya1NwYXJlUmlicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcG9ya1NwYXJlUmlicy5pbm5lckhUTUwgPSAnUG9yayBzcGFyZSByaWJzJztcblxuICAgIGNvbnN0IHB1bGxlZFBvcmtTaG91bGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHVsbGVkUG9ya1Nob3VsZGVyLmlubmVySFRNTCA9ICdQdWxsZWQgUG9yayBTaG91bGRlcic7XG5cbiAgICBjb25zdCBwb3JrQmVsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBvcmtCZWxseS5pbm5lckhUTUwgPSAnUG9yayBCZWxseSc7XG5cbiAgICBjb25zdCB0dXJrZXlCcmVhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHR1cmtleUJyZWFzdC5pbm5lckhUTUwgPSAnVHVya2V5IEJyZWFzdCc7XG5cbiAgICBjb25zdCBjaGlja2VuSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2hpY2tlbkhlYWRpbmcuaW5uZXJIVE1MID0gJ0NoaWNrZW4nO1xuXG4gICAgY29uc3QgY2hpY2tlbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5JbWcuc3JjID0gd2luZ3M7XG5cbiAgICBjb25zdCBjaGlja2VuV2luZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNoaWNrZW5XaW5ncy5pbm5lckhUTUwgPSAnQ2hpY2tlbiBXaW5ncyc7XG5cbiAgICBjb25zdCBKYWxhcGVub0NoZWVzZVNhdXNhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIEphbGFwZW5vQ2hlZXNlU2F1c2FnZS5pbm5lckhUTUwgPSAnSkFMQVBFw5FPIENIRUVTRSBTQVVTQUdFJztcblxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKGJhcmJlcXVlSGVhZGluZylcbiAgICBiYXJiZXF1ZS5hcHBlbmRDaGlsZChoZWFkaW5nUGFyYWdyYXBoKVxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKGJhcmJlcXVlSW1hZ2UpXG4gICAgYmFyYmVxdWUuYXBwZW5kQ2hpbGQoYnJpc2tldEhlYWRpbmcpXG4gICAgYmFyYmVxdWUuYXBwZW5kQ2hpbGQoYnJpc2tldFBhcmFncmFwaClcbiAgICBiYXJiZXF1ZS5hcHBlbmRDaGlsZChwb3JrUmliVGlwcylcbiAgICBiYXJiZXF1ZS5hcHBlbmRDaGlsZChwb3JrU3BhcmVSaWJzKVxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKHB1bGxlZFBvcmtTaG91bGRlcilcbiAgICBiYXJiZXF1ZS5hcHBlbmRDaGlsZChwb3JrQmVsbHkpXG4gICAgYmFyYmVxdWUuYXBwZW5kQ2hpbGQodHVya2V5QnJlYXN0KVxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKGNoaWNrZW5IZWFkaW5nKVxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKGNoaWNrZW5JbWcpXG4gICAgYmFyYmVxdWUuYXBwZW5kQ2hpbGQoY2hpY2tlbldpbmdzKVxuICAgIGJhcmJlcXVlLmFwcGVuZENoaWxkKEphbGFwZW5vQ2hlZXNlU2F1c2FnZSlcbiAgICBiYXJiZXF1ZS5hcHBlbmRDaGlsZChocik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyYmVxdWUpO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU2FuZHdpY2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlU2FuZHdpY2hlcycpO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU2FuZHdpY2hlc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXNIZWFkaW5nLmlubmVySFRNTCA9ICdTSUdOQVRVUkUgU0FORFdJQ0hFUyc7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTYW5kd2ljaGVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXNQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ1doZW4gYnJlYWQgbWVldHMgd2hhdCBjb3VsZCBnbyBiZXR3ZWVuIGJyZWFkLCB0aGVyZVxcJ3Mgbm8gZW5kIHRvIHRoZSBjdWxpbmFyeSBwb3NzaWJpbGl0aWVzLic7XG5cbiAgICBjb25zdCBjYXJvbGluYUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNhcm9saW5hSGVhZGluZy5pbm5lckhUTUwgPSAnQ0FST0xJTkEgT04gTVkgTUlORCc7XG5cbiAgICBjb25zdCBjYXJvbGluYVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJvbGluYVBhcmFncmFwaC5pbm5lckhUTUwgPSAncHVsbGVkIHBvcmssIGNyaXNweSBza2luLCBjb2xlc2xhdywgc3BpY3kgdmluZWdhciBzYXVjZSwgc2VzYW1lIGJ1bic7XG5cbiAgICBjb25zdCBtdXNpY0NpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG11c2ljQ2l0eS5pbm5lckhUTUwgPSAnTVVTSUMgQ0lUWSc7XG5cbiAgICBjb25zdCBtdXNpY0NpdHlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbXVzaWNDaXR5UGFyYWdyYXBoLmlubmVySFRNTCA9ICdzcGljeSBmcmllZCBjaGlja2VuIGJyZWFzdCwgZ3JlZW5zLCBwaWNrbGVzLCBidXR0ZXJtaWxrIHJhbmNoLCBzZXNhbWUgYnVuJztcblxuICAgIGNvbnN0IGJpZ0NoZWVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYmlnQ2hlZXNlLmlubmVySFRNTCA9IFwiQklHIENIRUVTRVwiO1xuXG4gICAgY29uc3QgYmlnQ2hlZXNlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJpZ0NoZWVzZVBhcmFncmFwaC5pbm5lckhUTUwgPSAnY2hvcHBlZCBwb3JrIG9yIGJyaXNrZXQsIG1lbHRlZCBjaGVlc2UsIGNyaXNweSBvbmlvbnMsIEJCUSBzYXVjZSwgc2VzYW1lIGJ1bic7XG5cbiAgICBjb25zdCBjbHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjbHViLmlubmVySFRNTCA9ICdDTFVCJztcblxuICAgIGNvbnN0IGNsdWJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2x1YlBhcmFncmFwaC5pbm5lckhUTUwgPSAnc21va2VkIHR1cmtleSwgY3Jpc3B5IHBvcmsgYmVsbHksIGF2b2NhZG8sIHRvbWF0bywgZ2FybGljIGFpb2xpLCB0ZXhhcyB0b2FzdCc7XG5cbiAgICBjb25zdCBTQU5EV0lDSEVTSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBTQU5EV0lDSEVTSW1hZ2Uuc3JjID0gc2FuZHdpY2g7XG5cbiAgICBjb25zdCBqaXZlVHVya2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBqaXZlVHVya2V5LmlubmVySFRNTCA9IFwiSklWRSBUVVJLRVlcIjtcblxuICAgIGNvbnN0IGppdmVUdXJrZXlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaml2ZVR1cmtleVBhcmFncmFwaC5pbm5lckhUTUwgPSAnc21va2VkIHR1cmtleSwgbWVsdGVkIGNoZWVzZSwgZ3JpbGxlZCB0b21hdG8sIGNyaXNweSBvbmlvbnMsIHJhbmNoLCBCQlEgc2F1Y2UsIHRleGFzIHRvYXN0JztcblxuICAgIGNvbnN0IHRleGFzUmFuZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0ZXhhc1Jhbmdlci5pbm5lckhUTUwgPSAnVEVYQVMgUkFOR0VSJztcblxuICAgIGNvbnN0IHRleGFzUmFuZ2VyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleGFzUmFuZ2VyUGFyYWdyYXBoLmlubmVySFRNTCA9ICdzbGljZWQgYnJpc2tldCwgY3Jpc3B5IG9uaW9ucywgaG91c2UgcGlja2xlcywgQkJRIHNhdWNlLCB0ZXhhcyB0b2FzdCc7XG5cblxuICAgIGNvbnN0IGppbW15TXVzY2xlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgamltbXlNdXNjbGVzLmlubmVySFRNTCA9IFwiSklNTVkgTVVTQ0xFU1wiO1xuXG4gICAgY29uc3QgamltbXlNdXNjbGVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGppbW15TXVzY2xlc1BhcmFncmFwaC5pbm5lckhUTUwgPSAnY3Jpc3B5IGNoaWNrZW4gYnJlYXN0LCBwb3JrIGJlbGx5LCBqYWxhcGXDsW8gcmVsaXNoLCBzdGlja3kgZ2FybGljIHNhdWNlLCByYW5jaCwgaGVyYnMsIHNlc2FtZSBidW4nO1xuXG4gICAgY29uc3QgdGV4YXNGbG9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGV4YXNGbG9vZC5pbm5lckhUTUwgPSAnVEVYQVMgRkxPT0QnO1xuXG4gICAgY29uc3QgdGV4YXNGbG9vZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXhhc0Zsb29kUGFyYWdyYXBoLmlubmVySFRNTCA9ICdjaG9wcGVkIGJyaXNrZXQsIGphbGFwZcOxbyBjaGVlc2Ugc2F1c2FnZSwgc3BpY3kgcGlja2xlcywgY3Jpc3B5IG9uaW9ucywgYmJxIHNhdWNlLCBzZXNhbWUgYnVuJztcblxuICAgIGNvbnN0IHRvZnVCYW5oTWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZnVCYW5oTWkuaW5uZXJIVE1MID0gJ1RPRlUgQkFOSCBNSSc7XG5cbiAgICBjb25zdCB0b2Z1QmFuaE1pUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZnVCYW5oTWlQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ2NyaXNweSB0b2Z1IGJ1cm50IGVuZHMsIHBpY2tsZWQgdmVnZ2llcywgZnJlc2ggaGVyYnMsIGNyaXNweSBvbmlvbnMsIHN0aWNreSBnYXJsaWMsIGFpb2xpLCBob2FnaWUgcm9sbCc7XG5cbiAgICBjb25zdCBocjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG5cbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKHNpZ25hdHVyZVNhbmR3aWNoZXNIZWFkaW5nKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKHNpZ25hdHVyZVNhbmR3aWNoZXNQYXJhZ3JhcGgpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoY2Fyb2xpbmFIZWFkaW5nKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKGNhcm9saW5hUGFyYWdyYXBoKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKG11c2ljQ2l0eSk7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZChtdXNpY0NpdHlQYXJhZ3JhcGgpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoYmlnQ2hlZXNlKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKGJpZ0NoZWVzZVBhcmFncmFwaCk7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZChjbHViKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKGNsdWJQYXJhZ3JhcGgpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoU0FORFdJQ0hFU0ltYWdlKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKGppdmVUdXJrZXkpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoaml2ZVR1cmtleVBhcmFncmFwaCk7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZCh0ZXhhc1Jhbmdlcik7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZCh0ZXhhc1JhbmdlclBhcmFncmFwaCk7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZChqaW1teU11c2NsZXMpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoamltbXlNdXNjbGVzUGFyYWdyYXBoKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKHRleGFzRmxvb2QpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQodGV4YXNGbG9vZFBhcmFncmFwaCk7XG4gICAgc2lnbmF0dXJlU2FuZHdpY2hlcy5hcHBlbmRDaGlsZCh0b2Z1QmFuaE1pKTtcbiAgICBzaWduYXR1cmVTYW5kd2ljaGVzLmFwcGVuZENoaWxkKHRvZnVCYW5oTWlQYXJhZ3JhcGgpO1xuICAgIHNpZ25hdHVyZVNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoaHIyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWduYXR1cmVTYW5kd2ljaGVzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG4gXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxMb2FkIGZyb20gJy4vZnVuY3Rpb25zL2luaXRpYWxMb2FkJztcbmltcG9ydCBjbGVhbkRPTSBmcm9tICcuL2Z1bmN0aW9ucy9jbGVhbkRPTSc7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9wYWdlcy9ob21lcGFnZSc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9wYWdlcy9tZW51JztcbmltcG9ydCAnLi9zdHlsZXMvaG9tZXBhZ2UuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnO1xuXG5cbmluaXRpYWxMb2FkKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgaWYgKGUudGFyZ2V0LmlkID09ICdIT01FJykge1xuICAgICAgICBjbGVhbkRPTSgpO1xuICAgICAgICBob21lcGFnZSgpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5pZCA9PSAnTUVOVVMnKSB7XG4gICAgICAgIGNsZWFuRE9NKCk7XG4gICAgICAgIG1lbnVQYWdlKCk7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=