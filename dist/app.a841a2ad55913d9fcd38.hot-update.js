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

    var timer = _this.state.element.querySelector(_this.state.element);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RvcHdhdGNoLmpzIl0sIm5hbWVzIjpbIlN0b3B3YXRjaCIsInByb3BzIiwic3RhdGUiLCJmb3JtYXRUaW1lIiwiYmluZCIsInN0YXJ0Iiwic3RvcCIsInJlc2V0IiwiY2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInRpbWVySW50ZXJ2YWwiLCJ0aW1lciIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpbWUiLCJtaW51dGVzIiwicGFyc2VJbnQiLCJob3VycyIsImRhdGEiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZV90aW1lciIsInNldFN0YXRlIiwicnVubmluZyIsImNsZWFySW50ZXJ2YWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwid2FybiIsInRlbXBsYXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixtRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwscUJBQWlCRCxLQUFqQjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsdURBQWxCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0QsSUFBWCx1REFBYjtBQUNBLFVBQUtFLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVGLElBQVYsdURBQVo7QUFDQSxVQUFLRyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXSCxJQUFYLHVEQUFiO0FBQ0EsVUFBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQix1REFBcEI7QUFFREssV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUFLUixLQUEvQjtBQUVDLFVBQUtTLGFBQUws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LCJmaWxlIjoiYXBwLmE4NDFhMmFkNTU5MTNkOWZjZDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuY2xhc3MgU3RvcHdhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Li4ucHJvcHN9O1xuICAgICAgICB0aGlzLmZvcm1hdFRpbWUgPSB0aGlzLmZvcm1hdFRpbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdG9wID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlJywgdGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgdGhpcy50aW1lckludGVydmFsID0gbnVsbDtcblxuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLnN0YXRlLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0YXRlLmVsZW1lbnQpO1xuICAgICAgICB0aW1lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSB0aW1lIGluIHNlY29uZHMgaW50byBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgVGhlIHRpbWUgaW4gc2Vjb25kc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBUaGUgdGltZSBpbiBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgKi9cbiAgICBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludCh0aW1lIC8gNjAsIDEwKTtcbiAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gICAgICAgIGlmIChtaW51dGVzID4gNTkpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChob3VycyA+IDAgPyBob3VycyArICdoICcgOiAnJykgKyAobWludXRlcyA+IDAgfHwgaG91cnMgPiAwID8gbWludXRlcyArICdtICcgOiAnJykgKyAodGltZSAlIDYwKSArICdzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgc3RvcHdhdGNoXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCB7ZGF0YToge3RpbWV9fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lclxuICAgICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVfdGltZXIoKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0aW1lclxuICAgICAgICBsZXQgdXBkYXRlX3RpbWVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7dGltZTogKyt0aW1lfSk7IC8vIHdlIG5lZWQgYWNjZXNzIHRvIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRpbWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cnVubmluZzogdHJ1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIHN0b3B3YXRjaFxuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3J1bm5pbmc6IGZhbHNlfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RvcHdhdGNoXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IDAsIHJ1bm5pbmc6IGZhbHNlfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBzdG9wd2F0Y2ggYWN0aW9uIGJ1dHRvbiB3YXMgY2xpY2tlZFxuICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9wd2F0Y2gnKTtcbiAgICAgICAgY29uc29sZS53YXJuKGBjbGljayBhY3Rpb246ICR7YWN0aW9ufWApO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6IC8vIElmIGl0J3MgdGhlIHN0YXJ0IGJ1dHRvbiwgc3RhcnRcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdG9wJzogLy8gSWYgaXQncyB0aGUgc3RvcCBidXR0b24sIHN0b3BcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2V0JzogLy8gSWYgaXQncyB0aGUgc3RvcHdhdGNoIGJ1dHRvbiwgcmVzZXRcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlbXBsYXRlKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHt0aW1lLCBydW5uaW5nfSA9IHByb3BzO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvcHMpO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJTdG9wd2F0Y2hcIj5cbiAgICAgICAgICAke3RoaXMuZm9ybWF0VGltZSh0aW1lKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJCdXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkJ1dHRvbiBCdXR0b24tLXByaW1hcnlcIlxuICAgICAgICAgICAgZGF0YS1zdG9wd2F0Y2g9XCIkeyBydW5uaW5nID8gJ3N0b3AnIDogJ3N0YXJ0JyB9XCJcbiAgICAgICAgICA+IFxuICAgICAgICAgICAgJHsgcnVubmluZyA/ICdTdG9wJyA6ICdTdGFydCcgfSBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQnV0dG9uXCIgZGF0YS1zdG9wd2F0Y2g9XCJyZXNldFwiPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyJdLCJzb3VyY2VSb290IjoiIn0=