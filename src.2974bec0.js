parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WIPQ":[function(require,module,exports) {
var define;
var e;!function(t,o){if("function"==typeof e&&e.amd)e(["exports"],o);else if("undefined"!=typeof exports)o(exports);else{var n={};o(n),t.bodyScrollLock=n}}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],l=!1,c=-1,d=void 0,u=void 0,a=function(e){return i.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},s=function(e){var t=e||window.event;return!!a(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},v=function(){setTimeout(function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)})};e.disableBodyScroll=function(e,n){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some(function(t){return t.targetElement===e})){var v={targetElement:e,options:n||{}};i=[].concat(t(i),[v]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var o,n,r,i;1===t.targetTouches.length&&(n=e,i=(o=t).targetTouches[0].clientY-c,!a(o.target)&&(n&&0===n.scrollTop&&0<i?s(o):(r=n)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&i<0?s(o):o.stopPropagation()))},l||(document.addEventListener("touchmove",s,o?{passive:!1}:void 0),l=!0)}}else{m=n,setTimeout(function(){if(void 0===u){var e=!!m&&!0===m.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(u=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")});var f={targetElement:e,options:n||{}};i=[].concat(t(i),[f])}var m},e.clearAllBodyScrollLocks=function(){r?(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),l&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),l=!1),i=[],c=-1):(v(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter(function(t){return t.targetElement!==e}),l&&0===i.length&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),l=!1)}else 1===i.length&&i[0].targetElement===e?(v(),i=[]):i=i.filter(function(t){return t.targetElement!==e})}});
},{}],"hJ8i":[function(require,module,exports) {
var define;
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(o,n){"object"==("undefined"==typeof exports?"undefined":e(exports))&&"object"==("undefined"==typeof module?"undefined":e(module))?module.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==("undefined"==typeof exports?"undefined":e(exports))?exports.displacejs=n():o.displacejs=n()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(o(1));t.exports=n.default},function(t,e,o){"use strict";function n(){var t=this.el,e=this.opts||i,o={};if(t.style.position="absolute",this.handle=e.handle||t,e.constrain){for(var n=e.relativeTo||t.parentNode,r=t,c=0,a=0;r!==n;)r=r.parentNode,(0,s.isRelative)(r)&&(c-=r.offsetLeft,a-=r.offsetTop),r===n&&(c+=r.offsetLeft,a+=r.offsetTop);var f=c+n.offsetWidth-t.offsetWidth,h=a+n.offsetHeight-t.offsetHeight;o.xClamp=(0,s.generateClamp)(c,f),o.yClamp=(0,s.generateClamp)(a,h)}this.opts=e,this.data=o,this.events={mousedown:u.mousedown.bind(this),mouseup:u.mouseup.bind(this),touchstart:u.touchstart.bind(this),touchstop:u.touchstop.bind(this)},this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(2),u=o(3),i={constrain:!1,relativeTo:null,handle:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null},r=function(){function t(e,o){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)throw Error("Must include moveable element");this.el=e,this.opts=o,n.call(this)}return t.prototype.reinit=function(){this.destroy(),n.call(this)},t.prototype.destroy=function(){var t=this.events;this.handle.removeEventListener("mousedown",t.mousedown,!1),document.removeEventListener("mousemove",t.mousemove,!1),document.removeEventListener("mouseup",t.mouseup,!1),this.handle.removeEventListener("touchstart",t.touchstart,!1),document.removeEventListener("touchmove",t.touchmove,!1),document.removeEventListener("touchstop",t.touchstop,!1)},t}();e.default=function(t,e){return new r(t,e)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateClamp=function(t,e){return function(o){return Math.min(Math.max(o,t),e)}},e.generateMoveFn=function(){return window.requestAnimationFrame?function(t,e,o){window.requestAnimationFrame(function(){t.style.left=e+"px",t.style.top=o+"px"})}:function(t,e,o){t.style.left=e+"px",t.style.top=o+"px"}},e.isRelative=function(t){return"relative"===window.getComputedStyle(t).position}},function(t,e,o){"use strict";function n(t,e,o){var n=this.el,s=this.opts,i=this.data;"function"==typeof s.onMouseMove&&s.onMouseMove(n,o);var r=o.clientX-t,c=o.clientY-e;return s.constrain&&(r=i.xClamp(r),c=i.yClamp(c)),u(n,r,c),o.preventDefault(),!1}function s(t,e,o){var n=this.el,s=this.opts,i=this.data;"function"==typeof s.onTouchMove&&s.onTouchMove(n,o);var r=o.targetTouches[0],c=r.clientX-t,a=r.clientY-e;return s.constrain&&(c=i.xClamp(c),a=i.yClamp(a)),u(n,c,a),o.preventDefault(),!1}Object.defineProperty(e,"__esModule",{value:!0}),e.mousedown=function(t){var e=this.opts;if(e.highlightInputs){var o=t.target.tagName.toLowerCase();if("input"===o||"textarea"===o)return}var s=this.el,u=this.events;"function"==typeof e.onMouseDown&&e.onMouseDown(s,t);var i=t.clientX-s.offsetLeft,r=t.clientY-s.offsetTop;u.mousemove=n.bind(this,i,r),document.addEventListener("mousemove",u.mousemove,!1),document.addEventListener("mouseup",u.mouseup,!1)},e.mousemove=n,e.mouseup=function(t){var e=this.el,o=this.opts,n=this.events;"function"==typeof o.onMouseUp&&o.onMouseUp(e,t),document.removeEventListener("mouseup",n.mouseup,!1),document.removeEventListener("mousemove",n.mousemove,!1)},e.touchstart=function(t){var e=this.opts;if(e.highlightInputs){var o=t.target.tagName.toLowerCase();if("input"===o||"textarea"===o)return}var n=this.el,u=this.events;"function"==typeof e.onTouchStart&&e.onTouchStart(n,t);var i=t.targetTouches[0],r=i.clientX-n.offsetLeft,c=i.clientY-n.offsetTop;u.touchmove=s.bind(this,r,c),document.addEventListener("touchmove",u.touchmove,!1),document.addEventListener("touchend",u.touchstop,!1),document.addEventListener("touchcancel",u.touchstop,!1)},e.touchmove=s,e.touchstop=function(t){var e=this.el,o=this.opts,n=this.events;"function"==typeof o.onTouchStop&&o.onTouchStop(e,t),document.removeEventListener("touchmove",n.touchmove,!1),document.removeEventListener("touchend",n.touchstop,!1),document.removeEventListener("touchcancel",n.touchstop,!1)};var u=(0,o(2).generateMoveFn)()}])});
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=require("body-scroll-lock"),l=r(require("displacejs"));function r(e){return e&&e.__esModule?e:{default:e}}(0,e.disableBodyScroll)(document.body);var o=document.querySelectorAll(".qr");o.forEach(function(r){(0,l.default)(r),(0,e.disableBodyScroll)(r)});
},{"body-scroll-lock":"WIPQ","displacejs":"hJ8i"}]},{},["H99C"], null)
//# sourceMappingURL=/src.2974bec0.js.map