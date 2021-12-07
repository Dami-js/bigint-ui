"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThemeProvider(_ref) {
  let {
    children,
    theme
  } = _ref;
  return dom(_styledComponents.ThemeProvider, {
    theme: theme
  }, children);
}

var _default = ThemeProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9UaGVtZVByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBU0EsU0FBU0EsYUFBVCxPQUcwQztBQUFBLE1BSG5CO0FBQ3JCQyxJQUFBQSxRQURxQjtBQUVyQkMsSUFBQUE7QUFGcUIsR0FHbUI7QUFDeEMsU0FBTyxJQUFDLCtCQUFEO0FBQW9CLElBQUEsS0FBSyxFQUFFQTtBQUEzQixLQUFtQ0QsUUFBbkMsQ0FBUDtBQUNEOztlQUVjRCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBEZWZhdWx0VGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIgYXMgU3R5bGVkVGhlbWVQcm92aWVyLFxufSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFRoZW1lUHJvdmlkZXJQcm9wcyB7XG4gIHRoZW1lOiBEZWZhdWx0VGhlbWU7XG59XG5cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgdGhlbWUsXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxUaGVtZVByb3ZpZGVyUHJvcHM+KSB7XG4gIHJldHVybiA8U3R5bGVkVGhlbWVQcm92aWVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvU3R5bGVkVGhlbWVQcm92aWVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlcjtcbiJdfQ==