// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).itermeanabs=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var e,r,n,o,u;if(null==t)return v.call(t);r=t[g],u=g,e=null!=(o=t)&&d.call(o,u);try{t[g]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[g]=r:delete t[g],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var j=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function w(t){return y(t)||h(t)}function S(){return new Function("return this;")()}p(w,"isPrimitive",y),p(w,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,A="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(O)return O;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),x=T.document&&T.document.childNodes,B=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(P,"REGEXP",C);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function V(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var L="function"==typeof t||"object"==typeof B||"function"==typeof x?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function M(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&function(t){return"function"===L(t)}(t.next)}function N(t){return Math.abs(t)}return function(t){var e,r,n,o,u;if(!M(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0fG49",t));for(n=0,o=0,u=function(t){return 0===arguments.length?0===o?null:n:n+=(t-n)/(o+=1)},e=function(t){return 0===arguments.length?u():u(N(t))};!(r=t.next()).done;)"number"==typeof r.value?e(r.value):e(NaN);return e()}}));
//# sourceMappingURL=index.js.map
