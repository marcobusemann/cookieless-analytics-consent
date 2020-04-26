webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css":
/*!**************************************************************************!*\
  !*** ./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./SimpleConsent.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./SimpleConsent.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css",
      function () {
        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./SimpleConsent.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".user-consent h1 {\n    margin-top: 0px;\n}\n\n.user-consent {\n    background-color: white;\n    text-align: center;\n    \n    box-shadow: 3px 3px 4px 1px;\n    border: 1px solid black;\n    z-index: 1000;\n\n    padding: 10px;\n    width: 350px;\n    \n    position: fixed;\n}\n\n@media screen and (max-width: 769px) {\n    .user-consent {\n        width: auto;\n        margin: 3px;\n        box-shadow: none;\n    }\n}\n\n.user-consent .buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-top: 10px;\n}\n\n.user-consent .button {\n    border: none;\n    margin: 10px;\n    cursor: pointer;\n}\n\n.user-consent .decline {\n    padding: 7px;\n    background-color: lightgray;\n}\n\n.user-consent .decline:hover {\n    background-color: rgb(200, 200, 200);\n}\n\n.user-consent .accept {\n    padding: 10px;\n    background-color: #28A745;\n    color: white;\n    font-size: 20px;\n}\n\n.user-consent .accept:hover {\n    background-color: #2FC44F;\n    color: white;\n}\n\n.user-consent-bottom-right {\n    right: 30px;\n    bottom: 30px;\n}\n\n@media screen and (max-width: 769px) {\n    .user-consent-bottom-right {\n        right: 0px;\n        bottom: 0px;\n    }\n}", "",{"version":3,"sources":["/mnt/d/Development/cookieless-analytics-consent/examples/next-ga-pageviews/node_modules/cookieless-analytics-consent/dist/SimpleConsent.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;;IAElB,2BAA2B;IAC3B,uBAAuB;IACvB,aAAa;;IAEb,aAAa;IACb,YAAY;;IAEZ,eAAe;AACnB;;AAEA;IACI;QACI,WAAW;QACX,WAAW;QACX,gBAAgB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;QACI,UAAU;QACV,WAAW;IACf;AACJ","file":"SimpleConsent.css","sourcesContent":[".user-consent h1 {\n    margin-top: 0px;\n}\n\n.user-consent {\n    background-color: white;\n    text-align: center;\n    \n    box-shadow: 3px 3px 4px 1px;\n    border: 1px solid black;\n    z-index: 1000;\n\n    padding: 10px;\n    width: 350px;\n    \n    position: fixed;\n}\n\n@media screen and (max-width: 769px) {\n    .user-consent {\n        width: auto;\n        margin: 3px;\n        box-shadow: none;\n    }\n}\n\n.user-consent .buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-top: 10px;\n}\n\n.user-consent .button {\n    border: none;\n    margin: 10px;\n    cursor: pointer;\n}\n\n.user-consent .decline {\n    padding: 7px;\n    background-color: lightgray;\n}\n\n.user-consent .decline:hover {\n    background-color: rgb(200, 200, 200);\n}\n\n.user-consent .accept {\n    padding: 10px;\n    background-color: #28A745;\n    color: white;\n    font-size: 20px;\n}\n\n.user-consent .accept:hover {\n    background-color: #2FC44F;\n    color: white;\n}\n\n.user-consent-bottom-right {\n    right: 30px;\n    bottom: 30px;\n}\n\n@media screen and (max-width: 769px) {\n    .user-consent-bottom-right {\n        right: 0px;\n        bottom: 0px;\n    }\n}"]}]);


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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookieless-analytics-consent */ "./node_modules/cookieless-analytics-consent/dist/index.js");
/* harmony import */ var cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookieless_analytics_consent_dist_SimpleConsent_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookieless-analytics-consent/dist/SimpleConsent.css */ "./node_modules/cookieless-analytics-consent/dist/SimpleConsent.css");
/* harmony import */ var cookieless_analytics_consent_dist_SimpleConsent_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookieless_analytics_consent_dist_SimpleConsent_css__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/mnt/d/Development/cookieless-analytics-consent/examples/next-ga-pageviews/pages/_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Analytics = function Analytics(_ref) {
  var analyticsId = _ref.analyticsId;

  var Text = function Text() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "We would like to use Google Analytics for statistical analysis of visitor numbers (cookies are not used for this purpose). By accepting this, you help us to improve our site and respond to your needs. More about the use of Google Analytics can be found ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/data protection",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 266
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 296
      }
    }, "here")), "'");
  };

  return __jsx(cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3__["NextJsGaPageviews"], {
    analyticsId: analyticsId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, function (includeAnalytics) {
    return __jsx(cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3__["CookieGuard"], {
      onIncludeAnalytics: includeAnalytics,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, function (onAccept, onReject) {
      return __jsx(cookieless_analytics_consent__WEBPACK_IMPORTED_MODULE_3__["SimpleConsent"], {
        onAccept: onAccept,
        onReject: onReject,
        content: {
          title: 'Web analysis',
          text: __jsx(Text, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 35
            }
          }),
          buttonRejectText: 'No thanks',
          buttonAcceptText: 'Accept'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      });
    });
  });
};

function MyApp(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx(Analytics, {
    analyticsId: 'UA-XXXXXXXX-X',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.e2d5aee70e6bbcdb4164.hot-update.js.map