// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-meanabs@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s){var i,n;if(!t(s))throw new TypeError(r("invalid argument. Must provide an iterator. Value: `%s`.",s));for(i=e();!(n=s.next()).done;)"number"==typeof n.value?i(n.value):i(NaN);return i()}export{s as default};
//# sourceMappingURL=index.mjs.map
