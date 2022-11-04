// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-meanabs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s){var i,n;if(!t(s))throw new TypeError(r("0fG49",s));for(i=e();!(n=s.next()).done;)"number"==typeof n.value?i(n.value):i(NaN);return i()}export{s as default};
//# sourceMappingURL=index.mjs.map
