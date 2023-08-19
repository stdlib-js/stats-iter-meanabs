// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).itermeanabs=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(e){var t,r,n,o,u;if(null==e)return d.call(e);r=e[g],u=g,t=null!=(o=e)&&v.call(o,u);try{e[g]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[g]=r:delete e[g],n}:function(e){return d.call(e)},w=Boolean.prototype.toString;var _=b();function j(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function h(e){return y(e)||j(e)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",j);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof A?A:null;var x=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(E)return E;if(O)return O;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,P=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;p(C,"REGEXP",G);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};function k(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=m(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return k(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(k,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(k));var M="function"==typeof e||"object"==typeof P||"function"==typeof B?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function N(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&function(e){return"function"===M(e)}(e.next)}function F(e){return Math.abs(e)}return function(e){var t,r,n,o,u;if(!N(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("1Kj3w,G7",e));for(n=0,o=0,u=function(e){return 0===arguments.length?0===o?null:n:n+=(e-n)/(o+=1)},t=function(e){return 0===arguments.length?u():u(F(e))};!(r=e.next()).done;)"number"==typeof r.value?t(r.value):t(NaN);return t()}}));
//# sourceMappingURL=browser.js.map
