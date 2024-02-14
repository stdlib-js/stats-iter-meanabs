// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+n(a):n(a)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!t(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function x(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,y,"e"),i=g.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var S=String.fromCharCode,V=isNaN,$=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,n,o,s,l,u,f;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(p(t=e[u]))s+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,V(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!V(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=x(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),s+=t.arg||"",l+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _(e){var r,i,t,n;for(i=[],n=0,t=I.exec(e);t;)(r=e.slice(n,I.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=I.lastIndex,t=I.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function C(e){var r,i;if(!j(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return F.apply(null,r)}var R,Z=Object.prototype,W=Z.toString,L=Z.__defineGetter__,O=Z.__defineSetter__,G=Z.__lookupGetter__,N=Z.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===W.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(G.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=Z,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function U(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=M();function z(){return B&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(e){var r,i,t;if(null==e)return q.call(e);i=e[K],r=H(e,K);try{e[K]=void 0}catch(r){return q.call(e)}return t=q.call(e),r?e[K]=i:delete e[K],t}:function(e){return q.call(e)},Y=Boolean,ee=Boolean.prototype.toString,re=z();function ie(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function te(e){return X(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}U(te,"isPrimitive",X),U(te,"isObject",ie);var se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function pe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,xe=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ue(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,xe,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,be,"$1."),i=de.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Ve=String.fromCharCode,$e=isNaN,Te=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,i,t,n,a,o,s,c,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,$e(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,$e(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=pe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!$e(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=$e(a)?String(t.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(_e(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[je(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Ie.apply(null,r)}function Ze(){return new Function("return this;")()}var We="object"==typeof self?self:null,Le="object"==typeof window?window:null,Oe="object"==typeof globalThis?globalThis:null,Ge=function(e){if(arguments.length){if(!X(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ze()}if(Oe)return Oe;if(We)return We;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Ne=Ge.document&&Ge.document.childNodes,Pe=Int8Array,Ue=M(),Xe=Object.prototype.toString,Me="function"==typeof Symbol?Symbol:void 0,Be="function"==typeof Me?Me.toStringTag:"",ze=Ue&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return Xe.call(e);i=e[Be],r=H(e,Be);try{e[Be]=void 0}catch(r){return Xe.call(e)}return t=Xe.call(e),r?e[Be]=i:delete e[Be],t}:function(e){return Xe.call(e)};function qe(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function De(){return/^\s*function\s*([^(]*)/i}var He=/^\s*function\s*([^(]*)/i;qe(De,"REGEXP",He);var Je=Array.isArray?Array.isArray:function(e){return"[object Array]"===ze(e)};function Ke(e){return"number"==typeof e}function Qe(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ye(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Qe(n):Qe(n)+e,t&&(e="-"+e)),e}var er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase;function ir(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ke(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ye(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ye(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===rr.call(e.specifier)?rr.call(i):er.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function tr(e){return"string"==typeof e}var nr=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,sr=String.prototype.replace,cr=/e\+(\d)$/,pr=/e-(\d)$/,lr=/^(\d+)$/,ur=/^(\d+)e/,fr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ke(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":nr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=sr.call(i,dr,"$1e"),i=sr.call(i,gr,"e"),i=sr.call(i,fr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=sr.call(i,cr,"e+0$1"),i=sr.call(i,pr,"e-0$1"),e.alternate&&(i=sr.call(i,lr,"$1."),i=sr.call(i,ur,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===or.call(e.specifier)?or.call(i):ar.call(i)}function wr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function br(e,r,i){var t=r-e.length;return t<0?e:e=i?e+wr(t):wr(t)+e}var vr=String.fromCharCode,yr=isNaN,mr=Array.isArray;function xr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Er(e){var r,i,t,n,a,o,s,c,p;if(!mr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(tr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=xr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,yr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,yr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ir(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!yr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=yr(a)?String(t.arg):vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=hr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ye(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=br(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vr(e){var r,i,t,n;for(i=[],n=0,t=kr.exec(e);t;)(r=e.slice(n,kr.lastIndex-t[0].length)).length&&i.push(r),i.push(Sr(t)),n=kr.lastIndex,t=kr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $r(e){return"string"==typeof e}function Tr(e){var r,i;if(!$r(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Vr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Er.apply(null,r)}function Fr(e){return null!==e&&"object"==typeof e}function Ir(e){var r,i,t,n;if(("Object"===(i=ze(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=He.exec(t.toString()))return r[1]}return Fr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}qe(Fr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Tr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Je(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Fr));var Ar="function"==typeof e||"object"==typeof Pe||"function"==typeof Ne?function(e){return Ir(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ir(e).toLowerCase():r};function _r(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===Ar(e)}(e.next)}function jr(e){return Math.abs(e)}function Cr(e){return"number"==typeof e}function Rr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Zr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Rr(n):Rr(n)+e,t&&(e="-"+e)),e}var Wr=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase;function Or(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Cr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Zr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Zr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Lr.call(e.specifier)?Lr.call(i):Wr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Gr(e){return"string"==typeof e}var Nr=Math.abs,Pr=String.prototype.toLowerCase,Ur=String.prototype.toUpperCase,Xr=String.prototype.replace,Mr=/e\+(\d)$/,Br=/e-(\d)$/,zr=/^(\d+)$/,qr=/^(\d+)e/,Dr=/\.0$/,Hr=/\.0*e/,Jr=/(\..*[^0])0*e/;function Kr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Cr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Nr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Xr.call(i,Jr,"$1e"),i=Xr.call(i,Hr,"e"),i=Xr.call(i,Dr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Xr.call(i,Mr,"e+0$1"),i=Xr.call(i,Br,"e-0$1"),e.alternate&&(i=Xr.call(i,zr,"$1."),i=Xr.call(i,qr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ur.call(e.specifier)?Ur.call(i):Pr.call(i)}function Qr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Yr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Qr(t):Qr(t)+e}var ei=String.fromCharCode,ri=isNaN,ii=Array.isArray;function ti(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ni(e){var r,i,t,n,a,o,s,c,p;if(!ii(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Gr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ti(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ri(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ri(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Or(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ri(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ri(a)?String(t.arg):ei(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Kr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Zr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Yr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ai=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function oi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function si(e){var r,i,t,n;for(i=[],n=0,t=ai.exec(e);t;)(r=e.slice(n,ai.lastIndex-t[0].length)).length&&i.push(r),i.push(oi(t)),n=ai.lastIndex,t=ai.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ci(e){return"string"==typeof e}function pi(e){var r,i,t;if(!ci(e))throw new TypeError(pi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=si(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return ni.apply(null,i)}return function(e){var r,i,t,n,a;if(!_r(e))throw new TypeError(pi("invalid argument. Must provide an iterator. Value: `%s`.",e));for(t=0,n=0,a=function(e){return 0===arguments.length?0===n?null:t:t+=(e-t)/(n+=1)},r=function(e){return 0===arguments.length?a():a(jr(e))};!(i=e.next()).done;)"number"==typeof i.value?r(i.value):r(NaN);return r()}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermeanabs=r();
//# sourceMappingURL=browser.js.map
