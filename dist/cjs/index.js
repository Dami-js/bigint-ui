"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("styled-components"));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r}function t(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var o,a,i=function(e){switch(e){case"1":return"0.512rem";case"2":return"0.64rem";case"3":return"0.8rem";case"5":return"1.25rem";case"6":return"1.563rem";default:return"1rem"}},c=function(e){return"bold"===e?"bold":"medium"===e?"600":"light"===e?"normal":"500"},u=function(e,n){switch(n){case"primary":return e.colors.primary;case"danger":return e.colors.danger;case"muted":return e.colors.muted;case"white":return e.colors.white;case"disabled":return e.colors.disabled;default:return e.colors.default}},d=n.default.p(o||(o=t(["\n  margin: 0;\n  line-height: 1.6;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  text-transform: ",";\n  text-align: ",";\n"],["\n  margin: 0;\n  line-height: 1.6;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  text-transform: ",";\n  text-align: ",";\n"])),(function(e){return i(e.size)}),(function(e){var n=e.weight;return c(n)}),(function(e){return u(e.theme,e.color)}),(function(e){return e.transform||"none"}),(function(e){var n=e.align;return void 0===n?"none":n})),l=d.withComponent("span");n.default(l)(a||(a=t(["\n  font-size: 0.41rem;\n"],["\n  font-size: 0.41rem;\n"])));var s,m,f,p=function(e){var n=e.theme,t=r(e,["theme"]);switch(t.disabled&&t.color&&!t.color.includes("Outline")&&!t.color.includes("Text")?"disabled":t.color||"primary"){case"primary":return n.colors.primary;case"default":return n.colors.default;case"defaultAccent":return n.colors.defaultAccent;case"disabled":return n.colors.disabled;case"muted":return n.colors.muted;default:return"inherit"}},b=function(e){var n=e.theme,t=r(e,["theme"]);switch(t.disabled&&t.color&&t.color.includes("Outline")?"disabledOutline":t.disabled?"disabled":t.color||"primary"){case"dangerText":return u(n,"danger");case"default":case"muted":case"primary":case"muted":default:return u(n,"white");case"defaultAccent":case"disabled":case"defaultText":return u(n,"default");case"mutedOutline":case"mutedText":return u(n,"muted");case"disabledText":case"disabledOutline":return u(n,"disabled");case"primaryOutline":case"primaryText":return u(n,"primary")}},h=n.default.button(s||(s=t(["\n  display: inline-block;\n  border: ",";\n  border-radius: 5rem;\n  padding: 0.6rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: ",";\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  line-height: 1;\n  cursor: ",";\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: 0;\n  min-width: fit-content;\n  width: ",";\n  &:disabled {\n    background: "," !important;\n    color: "," !important;\n  }\n  width: ",";\n\n  &:active {\n    opacity: 0.6;\n  }\n"],["\n  display: inline-block;\n  border: ",";\n  border-radius: 5rem;\n  padding: 0.6rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: ",";\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  line-height: 1;\n  cursor: ",";\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: 0;\n  min-width: fit-content;\n  width: ",";\n  &:disabled {\n    background: "," !important;\n    color: "," !important;\n  }\n  width: ",";\n\n  &:active {\n    opacity: 0.6;\n  }\n"])),(function(e){return function(e){var n=e.theme,t=r(e,["theme"]);switch(t.disabled&&t.color&&t.color.includes("Outline")?"disabledOutline":t.color?t.color:"primary"){case"primaryOutline":return"solid 0.14rem ".concat(n.colors.primary);case"disabledOutline":return"solid 0.14rem ".concat(n.colors.disabled);case"mutedOutline":return"solid 0.14rem ".concat(n.colors.muted);default:return"none"}}(e)}),(function(e){return p(e)}),(function(e){return b(e)}),(function(e){var n=e.labelProps;return i(n?n.size:"3")}),(function(e){var n=e.labelProps;return c(n?n.weight:"regular")}),(function(e){var n=e.labelProps;return n?n.transform:"none"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.width}),(function(e){return p(e)}),(function(e){return b(e)}),(function(e){return e.width})),g=h.withComponent("a"),y=n.default.a(m||(m=t(["\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  padding: 1rem;\n  border-top: ",";\n  border-bottom: 1px solid ",";\n  text-decoration: none;\n  transition: background-color 100ms ease-in-out;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(33, 150, 243, 3%);\n  }\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  padding: 1rem;\n  border-top: ",";\n  border-bottom: 1px solid ",";\n  text-decoration: none;\n  transition: background-color 100ms ease-in-out;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(33, 150, 243, 3%);\n  }\n"])),(function(e){return e.iconRight?"space-between":"center"}),(function(e){var n=e.borderTop,r=e.theme;return n?"1px solid ".concat(r.colors.defaultAccent):"none"}),(function(e){return e.theme.colors.defaultAccent})),w=n.default(h)(f||(f=t(["\n  border-width: 1px;\n"],["\n  border-width: 1px;\n"])));exports.A=g,exports.BlockLink=y,exports.Button=h,exports.Pill=w,exports.Text=d,exports.dark={type:"dark",background:"#051521",hover:"#F8FCFF",colors:{default:"#DDDDDD",primary:"#2196F3",danger:"#FF4444",muted:"#909090",disabled:"#909090",defaultAccent:"#06253D",primaryAccent:"#D3EAFD",dangerAccent:"#FBD2E0",white:"#FFFFFF"}},exports.light={type:"light",background:"#FFFFFF",hover:"#F8FCFF",colors:{default:"#444444",primary:"#2196F3",danger:"#FF4444",muted:"#909090",disabled:"#C4C4C4",defaultAccent:"#EEEEEE",primaryAccent:"#D3EAFD",dangerAccent:"#FBD2E0",white:"#FFFFFF"}};
//# sourceMappingURL=index.js.map
