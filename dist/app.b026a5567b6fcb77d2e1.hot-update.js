webpackHotUpdate("app",{

/***/ "./src/Stopwatch.js":
/*!**************************!*\
  !*** ./src/Stopwatch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Stopwatch =
/*#__PURE__*/
function (_Component) {
  _inherits(Stopwatch, _Component);

  function Stopwatch(props) {
    var _this;

    _classCallCheck(this, Stopwatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stopwatch).call(this, props));
    _this.state = _objectSpread({}, props);
    _this.formatTime = _this.formatTime.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.start = _this.start.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.reset = _this.reset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    console.log('this.state', _this.state);
    _this.timerInterval = null;
    var timer = document.querySelector(_this.state.element);
    timer.addEventListener('click', _this.clickHandler, false);
    return _this;
  }
  /**
   * Format the time in seconds into hours, minutes, and seconds
   * @param  {Number} time The time in seconds
   * @return {String}      The time in hours, minutes, and seconds
   */


  _createClass(Stopwatch, [{
    key: "formatTime",
    value: function formatTime(time) {
      var minutes = parseInt(time / 60, 10);
      var hours = parseInt(minutes / 60, 10);

      if (minutes > 59) {
        minutes = minutes % 60;
      }

      return (hours > 0 ? hours + 'h ' : '') + (minutes > 0 || hours > 0 ? minutes + 'm ' : '') + time % 60 + 's';
    }
    /**
     * Start the stopwatch
     */

  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var time = this.state.data.time; // Start the timer

      this.timerInterval = setInterval(function () {
        update_timer();
      }, 1000); // Update the timer

      var update_timer = function update_timer() {
        return _this2.setState({
          time: ++time
        });
      }; // we need access to the current state of time


      this.setState({
        running: true
      });
    }
    /**
     * Stop the stopwatch
     */

  }, {
    key: "stop",
    value: function stop() {
      this.setState({
        running: false
      });
      clearInterval(this.timerInterval);
    }
    /**
     * Reset the stopwatch
     */

  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        time: 0,
        running: false
      });
      clearInterval(this.timerInterval);
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      event.preventDefault(); // Check if a stopwatch action button was clicked

      var action = event.target.getAttribute('data-stopwatch');
      console.warn("click action: ".concat(action));

      switch (action) {
        case 'start':
          // If it's the start button, start
          this.start();
          break;

        case 'stop':
          // If it's the stop button, stop
          this.stop();
          break;

        case 'reset':
          // If it's the stopwatch button, reset
          this.reset();
          break;

        default:
          return;
      }
    }
  }, {
    key: "template",
    value: function template(props) {
      var time = props.time,
          running = props.running;
      console.warn(props);
      var template = "\n        <div class=\"Stopwatch\">\n          ".concat(this.formatTime(time), "\n        </div>\n        <div class=\"Button-container\">\n          <button class=\"Button Button--primary\"\n            data-stopwatch=\"").concat(running ? 'stop' : 'start', "\"\n          > \n            ").concat(running ? 'Stop' : 'Start', " \n          </button>\n          <button class=\"Button\" data-stopwatch=\"reset\">\n            Reset\n          </button>\n        </div>\n      ");
      return template;
    }
  }]);

  return Stopwatch;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Stopwatch);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RvcHdhdGNoLmpzIl0sIm5hbWVzIjpbIlN0b3B3YXRjaCIsInByb3BzIiwic3RhdGUiLCJmb3JtYXRUaW1lIiwiYmluZCIsInN0YXJ0Iiwic3RvcCIsInJlc2V0IiwiY2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInRpbWVySW50ZXJ2YWwiLCJ0aW1lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGltZSIsIm1pbnV0ZXMiLCJwYXJzZUludCIsImhvdXJzIiwiZGF0YSIsInNldEludGVydmFsIiwidXBkYXRlX3RpbWVyIiwic2V0U3RhdGUiLCJydW5uaW5nIiwiY2xlYXJJbnRlcnZhbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ3YXJuIiwidGVtcGxhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxxQkFBaUJELEtBQWpCO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix1REFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRCxJQUFYLHVEQUFiO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUYsSUFBVix1REFBWjtBQUNBLFVBQUtHLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdILElBQVgsdURBQWI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLHVEQUFwQjtBQUVESyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtSLEtBQS9CO0FBRUMs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bGUiOiJhcHAuYjAyNmE1NTY3YjZmY2I3N2QyZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5jbGFzcyBTdG9wd2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5wcm9wc307XG4gICAgICAgIHRoaXMuZm9ybWF0VGltZSA9IHRoaXMuZm9ybWF0VGltZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0b3AgPSB0aGlzLnN0b3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUnLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGF0ZS5lbGVtZW50KTtcbiAgICAgICAgdGltZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgdGltZSBpbiBzZWNvbmRzIGludG8gaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lIFRoZSB0aW1lIGluIHNlY29uZHNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgVGhlIHRpbWUgaW4gaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzXG4gICAgICovXG4gICAgZm9ybWF0VGltZSh0aW1lKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQodGltZSAvIDYwLCAxMCk7XG4gICAgICAgIGxldCBob3VycyA9IHBhcnNlSW50KG1pbnV0ZXMgLyA2MCwgMTApO1xuICAgICAgICBpZiAobWludXRlcyA+IDU5KSB7XG4gICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaG91cnMgPiAwID8gaG91cnMgKyAnaCAnIDogJycpICsgKG1pbnV0ZXMgPiAwIHx8IGhvdXJzID4gMCA/IG1pbnV0ZXMgKyAnbSAnIDogJycpICsgKHRpbWUgJSA2MCkgKyAncyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHN0b3B3YXRjaFxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQge2RhdGE6IHt0aW1lfX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAvLyBTdGFydCB0aGUgdGltZXJcbiAgICAgICAgdGhpcy50aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlX3RpbWVyKClcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGltZXJcbiAgICAgICAgbGV0IHVwZGF0ZV90aW1lciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe3RpbWU6ICsrdGltZX0pOyAvLyB3ZSBuZWVkIGFjY2VzcyB0byB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aW1lXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3J1bm5pbmc6IHRydWV9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHRoZSBzdG9wd2F0Y2hcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtydW5uaW5nOiBmYWxzZX0pO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0b3B3YXRjaFxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiAwLCBydW5uaW5nOiBmYWxzZX0pO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIENoZWNrIGlmIGEgc3RvcHdhdGNoIGFjdGlvbiBidXR0b24gd2FzIGNsaWNrZWRcbiAgICAgICAgbGV0IGFjdGlvbiA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcHdhdGNoJyk7XG4gICAgICAgIGNvbnNvbGUud2FybihgY2xpY2sgYWN0aW9uOiAke2FjdGlvbn1gKTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiAvLyBJZiBpdCdzIHRoZSBzdGFydCBidXR0b24sIHN0YXJ0XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RvcCc6IC8vIElmIGl0J3MgdGhlIHN0b3AgYnV0dG9uLCBzdG9wXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IC8vIElmIGl0J3MgdGhlIHN0b3B3YXRjaCBidXR0b24sIHJlc2V0XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZShwcm9wcykge1xuICAgICAgICBjb25zdCB7dGltZSwgcnVubmluZ30gPSBwcm9wcztcbiAgICAgICAgY29uc29sZS53YXJuKHByb3BzKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiU3RvcHdhdGNoXCI+XG4gICAgICAgICAgJHt0aGlzLmZvcm1hdFRpbWUodGltZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiQnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJCdXR0b24gQnV0dG9uLS1wcmltYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtc3RvcHdhdGNoPVwiJHsgcnVubmluZyA/ICdzdG9wJyA6ICdzdGFydCcgfVwiXG4gICAgICAgICAgPiBcbiAgICAgICAgICAgICR7IHJ1bm5pbmcgPyAnU3RvcCcgOiAnU3RhcnQnIH0gXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkJ1dHRvblwiIGRhdGEtc3RvcHdhdGNoPVwicmVzZXRcIj5cbiAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiXSwic291cmNlUm9vdCI6IiJ9