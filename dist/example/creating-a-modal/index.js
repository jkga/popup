!function e(t,n,o){function r(u,p){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!p&&s)return s(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[u]={exports:{}};t[u][0].call(a.exports,function(e){var n=t[u][1][e];return r(n||e)},a,a.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var o={exports:{}};t(o.exports),e.popupMin=o.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),o=function(){function e(){t(this,e),this.implementedPopups=[],this._popupOpenHandler(),this._popupCloseHandler()}return n(e,[{key:"_setDisplayAttr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";e.setAttribute("data-popup-display",t)}},{key:"_populatePopups",value:function(e){var t=this;return new Promise(function(n,o){if(void 0!==t.implementedPopups[e])return n(t.implementedPopups[e]);document.querySelectorAll(e).forEach(function(o,r){void 0===o.open&&(o.open=function(e){e.preventDefault(),t._setDisplayAttr(o,"open")}),void 0===o.close&&(o.close=function(){t._setDisplayAttr(o,"closed")}),t.implementedPopups[e]=o,n(o)})})}},{key:"_closeParentPopup",value:function(e){return e.preventDefault(),null!=this.offsetParent.getAttribute("data-popup-display")?this.offsetParent.close():this.offsetParent.offsetParent.close()}},{key:"_popupOpenHandler",value:function(){var e=this;document.querySelectorAll("[data-popup-button]").forEach(function(t,n){var o=t.getAttribute("href");e._populatePopups(o).then(function(e){t.addEventListener("click",e.open)})})}},{key:"_popupCloseHandler",value:function(){var e=this;document.querySelectorAll("[data-popup-toggle]").forEach(function(t,n){t.removeEventListener("click",e._closeParentPopup),t.addEventListener("click",e._closeParentPopup)})}}]),e}();e.default=o})},{}],2:[function(e,t,n){!function(t,o){if("function"==typeof define&&define.amd)define(["../../dist/src/js/popup.min"],o);else if(void 0!==n)o(e("../../dist/src/js/popup.min"));else{o(t.popup),t.index={exports:{}}.exports}}(this,function(e){"use strict";var t=function(e){return e&&e.__esModule?e:{default:e}}(e);document.addEventListener("DOMContentLoaded",function(e){new t.default})})},{"../../dist/src/js/popup.min":1}]},{},[2]);