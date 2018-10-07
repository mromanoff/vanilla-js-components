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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RvcHdhdGNoLmpzIl0sIm5hbWVzIjpbIlN0b3B3YXRjaCIsInByb3BzIiwic3RhdGUiLCJmb3JtYXRUaW1lIiwiYmluZCIsInN0YXJ0Iiwic3RvcCIsInJlc2V0IiwiY2xpY2tIYW5kbGVyIiwidGltZXJJbnRlcnZhbCIsInRpbWVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aW1lIiwibWludXRlcyIsInBhcnNlSW50IiwiaG91cnMiLCJkYXRhIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVfdGltZXIiLCJzZXRTdGF0ZSIsInJ1bm5pbmciLCJjbGVhckludGVydmFsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJ3YXJuIiwidGVtcGxhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxxQkFBaUJELEtBQWpCO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix1REFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRCxJQUFYLHVEQUFiO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUYsSUFBVix1REFBWjtBQUNBLFVBQUtHLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdILElBQVgsdURBQWI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLHVEQUFwQjtBQUVBLFVBQUtLLGFBQUwsR0FBcUIsSUFBckI7QUFFQSxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0Ms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ImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5jbGFzcyBTdG9wd2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5wcm9wc307XG4gICAgICAgIHRoaXMuZm9ybWF0VGltZSA9IHRoaXMuZm9ybWF0VGltZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0b3AgPSB0aGlzLnN0b3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0YXRlLmVsZW1lbnQpO1xuICAgICAgICB0aW1lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSB0aW1lIGluIHNlY29uZHMgaW50byBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgVGhlIHRpbWUgaW4gc2Vjb25kc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBUaGUgdGltZSBpbiBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgKi9cbiAgICBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludCh0aW1lIC8gNjAsIDEwKTtcbiAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gICAgICAgIGlmIChtaW51dGVzID4gNTkpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChob3VycyA+IDAgPyBob3VycyArICdoICcgOiAnJykgKyAobWludXRlcyA+IDAgfHwgaG91cnMgPiAwID8gbWludXRlcyArICdtICcgOiAnJykgKyAodGltZSAlIDYwKSArICdzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgc3RvcHdhdGNoXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCB7ZGF0YToge3RpbWV9fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lclxuICAgICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVfdGltZXIoKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0aW1lclxuICAgICAgICBsZXQgdXBkYXRlX3RpbWVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7dGltZTogKyt0aW1lfSk7IC8vIHdlIG5lZWQgYWNjZXNzIHRvIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRpbWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cnVubmluZzogdHJ1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIHN0b3B3YXRjaFxuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3J1bm5pbmc6IGZhbHNlfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RvcHdhdGNoXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IDAsIHJ1bm5pbmc6IGZhbHNlfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBzdG9wd2F0Y2ggYWN0aW9uIGJ1dHRvbiB3YXMgY2xpY2tlZFxuICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9wd2F0Y2gnKTtcbiAgICAgICAgY29uc29sZS53YXJuKGBjbGljayBhY3Rpb246ICR7YWN0aW9ufWApO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6IC8vIElmIGl0J3MgdGhlIHN0YXJ0IGJ1dHRvbiwgc3RhcnRcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdG9wJzogLy8gSWYgaXQncyB0aGUgc3RvcCBidXR0b24sIHN0b3BcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2V0JzogLy8gSWYgaXQncyB0aGUgc3RvcHdhdGNoIGJ1dHRvbiwgcmVzZXRcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlbXBsYXRlKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHt0aW1lLCBydW5uaW5nfSA9IHByb3BzO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvcHMpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJTdG9wd2F0Y2hcIj5cbiAgICAgICAgICAke3RoaXMuZm9ybWF0VGltZSh0aW1lKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJCdXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkJ1dHRvbiBCdXR0b24tLXByaW1hcnlcIlxuICAgICAgICAgICAgZGF0YS1zdG9wd2F0Y2g9XCIkeyBydW5uaW5nID8gJ3N0b3AnIDogJ3N0YXJ0JyB9XCJcbiAgICAgICAgICA+IFxuICAgICAgICAgICAgJHsgcnVubmluZyA/ICdTdG9wJyA6ICdTdGFydCcgfSBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQnV0dG9uXCIgZGF0YS1zdG9wd2F0Y2g9XCJyZXNldFwiPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyJdLCJzb3VyY2VSb290IjoiIn0=