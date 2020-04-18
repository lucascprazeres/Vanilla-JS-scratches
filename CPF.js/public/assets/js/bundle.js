/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: normal;\n    font-family: 'Lato', sans-serif;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*RESET*/\n\n:root {\n    --primary-color: #8f4fbd;\n    --primary-color-darker: #633783;\n    --success-color: #98d428;\n    --failure-color: #d42828;\n}\nh1 {\n    font-size: 2.5em;\n    padding-left: 10px;\n}\nh2 {\n    font-size: 2em;\n    margin: 10px;\n    font-weight: bold;\n}\nul {\n    list-style: none;\n}\na {\n    text-decoration: none;\n}\n/*css principal*/\n\nheader, footer {\n    padding: 10px 10px;\n    width: 100%;\n    background-color: var(--primary-color);\n    color: #fff;\n}\n\nheader {\n    height: 50px;\n}\n\nfooter {\n    position: absolute;\n    padding: 5px 10px;\n    bottom: 0;\n}\n\n.title {\n    font-weight: bold;\n    float: left;\n}\n\n.social {\n    text-align: center;\n}\n.social-up {\n    margin-right: 30px;\n    margin-top: 10px;\n    float: right;\n}\n.social-bottom {\n    margin-top: 5px;\n    float: left;\n}\n\n.social li {\n    transition: 0.5s;\n    display: inline;\n    margin: 5px 10px;\n    font-size: 30px;\n}\n\n.social li:hover {\n    font-size: 35px;\n    transition: 0.5s;\n    \n}\n.container {\n    height: 500px;\n}\n.painel {\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    letter-spacing: 4px;\n    padding: 20px;\n    width: 50%;\n    max-width: 400px;\n    height: 100%;\n    max-height: 380px;\n    border: 3px solid var(--primary-color);\n    border-radius: 20px;\n\n    color: var(--primary-color);\n}\n.input-group {\n    position: relative;\n    width: 100%;\n    max-width: 300px;\n    padding: 20px 0 5px 0;\n    margin: 0 auto;\n    \n}\n.input-group input {\n    background-color: rgba(248, 246, 123, 20%);\n    width: 75%;\n    height: 35px;\n    border: 2px solid var(--primary-color-darker);\n    border-radius: 5px 0 0 5px;\n    font-size: 18px;\n    text-indent: 30px;\n}\n.input-group button {\n    width: 20%;\n    height: 40px;\n    background-color: var(--primary-color);\n    border: 1px solid var(--primary-color-darker);\n    border-radius: 0 5px 5px 0;\n    margin-left: -10px;\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.input-group button:hover {\n    background-color: var(--primary-color-darker);\n    cursor: pointer;\n}\n\n#create-cpf-btn {\n    width: 100%;\n    max-width: 290px;\n    margin-bottom: 30px;\n    border-radius: 5px;\n    height: 30px;\n    background-color: var(--primary-color);\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n#create-cpf-btn:hover {\n    background-color: var(--primary-color-darker);\n    cursor: pointer;\n}\nsection {\n    margin-bottom: 30px;\n}\n.creation-section {\n    border-bottom: 3px solid var(--primary-color);\n}\n\n.result-div {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 10px 5px;\n}\n\n.success-div {\n    color: var(--success-color);\n}\n.failure-div {\n    color: var(--failure-color);\n}\n\n@media (max-width: 460px) {\n    .painel {\n        width: 80%;\n        max-height: 90%;\n        top: 52%;\n    }\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/reset.css":
/*!**********************************!*\
  !*** ./src/assets/css/reset.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/reset.css */ "./src/assets/css/reset.css");
/* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_cpf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cpf */ "./src/modules/cpf.js");




function main() {
  var cpf = new _modules_cpf__WEBPACK_IMPORTED_MODULE_2__["CPF"]();
  var createCpfBtn = document.querySelector('#create-cpf-btn');
  var copyBtn = document.querySelector('#copy');
  var validationBtn = document.querySelector('#validation-btn');
  var validationInput = document.querySelector('.validation-section input');
  createCpfBtn.addEventListener('click', setNewCPF);
  copyBtn.addEventListener('click', copyToClipboard);
  validationBtn.addEventListener('click', displayValidation);
  validationInput.addEventListener('input', resetValidation);

  function setNewCPF() {
    var display = document.querySelector('.creation-section input');
    var newCPF = cpf.createCPF();
    display.value = newCPF;
  }

  function copyToClipboard() {
    var display = document.querySelector('.creation-section input');
    display.focus();
    display.select();
    document.execCommand('copy');
  }

  function createValidationDiv() {
    var resultDiv = document.createElement('div');
    resultDiv.classList.add('result-div');

    if (cpf.validate(validationInput.value)) {
      resultDiv.innerHTML = "CPF válido!";
      resultDiv.classList.add('success-div');
    } else {
      resultDiv.innerHTML = "CPF inválido!";
      resultDiv.classList.add('failure-div');
    }

    return resultDiv;
  }

  function displayValidation() {
    resetValidation();
    var resultDiv = createValidationDiv();
    validationBtn.insertAdjacentElement('afterend', resultDiv);
  }

  function resetValidation() {
    var resultDiv = document.querySelector('.result-div');
    if (resultDiv) resultDiv.remove();
  }
}

main();

/***/ }),

/***/ "./src/modules/cpf.js":
/*!****************************!*\
  !*** ./src/modules/cpf.js ***!
  \****************************/
/*! exports provided: CPF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPF", function() { return CPF; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CPF = /*#__PURE__*/function () {
  function CPF() {
    _classCallCheck(this, CPF);
  }

  _createClass(CPF, [{
    key: "createCPF",
    value: function createCPF() {
      var newCPF = '';

      for (var i = 0; i < 9; i++) {
        //obtaining prefix
        newCPF += CPF.createDigit();
      }

      newCPF += this.getSufixFrom(newCPF);
      newCPF = this.format(newCPF);
      return newCPF;
    }
  }, {
    key: "format",
    value: function format(cpf) {
      return "".concat(cpf.slice(0, 3), ".").concat(cpf.slice(3, 6), ".").concat(cpf.slice(6, 9), "-").concat(cpf.slice(9));
    }
  }, {
    key: "validate",
    value: function validate(cpf) {
      if (!cpf) return false;
      if (CPF.isSenquence(cpf)) return false;
      if (cpf.match(/[a-zA-Z!@#$%^&*(),?":{}|<>]/g)) return false;
      var prefix = this.getPrefixFrom(cpf);
      var validCPF = prefix + this.getSufixFrom(prefix);
      return CPF.sanitize(cpf) === validCPF;
    }
  }, {
    key: "getPrefixFrom",
    value: function getPrefixFrom(cpf) {
      return CPF.sanitize(cpf).slice(0, -2);
    }
  }, {
    key: "getSufixFrom",
    value: function getSufixFrom(cpf) {
      if (cpf.length > 9) return CPF.sanitize(cpf).slice(-2);
      var digit1 = CPF.createDigit(cpf);
      var digit2 = CPF.createDigit(cpf + digit1);
      var sufix = digit1 + digit2;
      return sufix;
    }
  }], [{
    key: "sanitize",
    value: function sanitize(input) {
      return input.replace(/\D+/g, '');
    }
  }, {
    key: "createDigit",
    value: function createDigit(incompleteCpf) {
      if (!incompleteCpf || incompleteCpf.length < 9) {
        var randomDigit = Math.floor(Math.random() * 9);
        return randomDigit.toString();
      } //sufix


      var factor = incompleteCpf.length + 1;
      var sum = 0;

      for (var i in incompleteCpf) {
        sum += incompleteCpf[i] * factor;
        factor--;
      }

      var newDigit = 11 - sum % 11;
      return newDigit > 9 ? 0 : String(newDigit);
    }
  }, {
    key: "isSenquence",
    value: function isSenquence(string) {
      var seq = string[0].repeat(string.length);
      return string === seq;
    }
  }]);

  return CPF;
}();
;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map