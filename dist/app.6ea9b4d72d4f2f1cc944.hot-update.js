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
    var timer = document.querySelector(_this.state.element); //let timer = this.state.element;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RvcHdhdGNoLmpzIl0sIm5hbWVzIjpbIlN0b3B3YXRjaCIsInByb3BzIiwic3RhdGUiLCJmb3JtYXRUaW1lIiwiYmluZCIsInN0YXJ0Iiwic3RvcCIsInJlc2V0IiwiY2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInRpbWVySW50ZXJ2YWwiLCJ0aW1lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGltZSIsIm1pbnV0ZXMiLCJwYXJzZUludCIsImhvdXJzIiwiZGF0YSIsInNldEludGVydmFsIiwidXBkYXRlX3RpbWVyIiwic2V0U3RhdGUiLCJydW5uaW5nIiwiY2xlYXJJbnRlcnZhbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ3YXJuIiwidGVtcGxhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxxQkFBaUJELEtBQWpCO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix1REFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRCxJQUFYLHVEQUFiO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUYsSUFBVix1REFBWjtBQUNBLFVBQUtHLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdILElBQVgsdURBQWI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLHVEQUFwQjtBQUVESyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtSLEtBQS9CO0FBRUMs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LHdFQUFmLEUiLCJmaWxlIjoiYXBwLjZlYTliNGQ3MmQ0ZjJmMWNjOTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuY2xhc3MgU3RvcHdhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Li4ucHJvcHN9O1xuICAgICAgICB0aGlzLmZvcm1hdFRpbWUgPSB0aGlzLmZvcm1hdFRpbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdG9wID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlJywgdGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgdGhpcy50aW1lckludGVydmFsID0gbnVsbDtcblxuICAgICAgICBsZXQgdGltZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3RhdGUuZWxlbWVudCk7XG4gICAgICAgIC8vbGV0IHRpbWVyID0gdGhpcy5zdGF0ZS5lbGVtZW50O1xuXG4gICAgICAgIHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIHRpbWUgaW4gc2Vjb25kcyBpbnRvIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kc1xuICAgICAqIEBwYXJhbSAge051bWJlcn0gdGltZSBUaGUgdGltZSBpbiBzZWNvbmRzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIFRoZSB0aW1lIGluIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kc1xuICAgICAqL1xuICAgIGZvcm1hdFRpbWUodGltZSkge1xuICAgICAgICBsZXQgbWludXRlcyA9IHBhcnNlSW50KHRpbWUgLyA2MCwgMTApO1xuICAgICAgICBsZXQgaG91cnMgPSBwYXJzZUludChtaW51dGVzIC8gNjAsIDEwKTtcbiAgICAgICAgaWYgKG1pbnV0ZXMgPiA1OSkge1xuICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGhvdXJzID4gMCA/IGhvdXJzICsgJ2ggJyA6ICcnKSArIChtaW51dGVzID4gMCB8fCBob3VycyA+IDAgPyBtaW51dGVzICsgJ20gJyA6ICcnKSArICh0aW1lICUgNjApICsgJ3MnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBzdG9wd2F0Y2hcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IHtkYXRhOiB7dGltZX19ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgLy8gU3RhcnQgdGhlIHRpbWVyXG4gICAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZV90aW1lcigpXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHRpbWVyXG4gICAgICAgIGxldCB1cGRhdGVfdGltZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHt0aW1lOiArK3RpbWV9KTsgLy8gd2UgbmVlZCBhY2Nlc3MgdG8gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGltZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtydW5uaW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgc3RvcHdhdGNoXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cnVubmluZzogZmFsc2V9KTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdG9wd2F0Y2hcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogMCwgcnVubmluZzogZmFsc2V9KTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBDaGVjayBpZiBhIHN0b3B3YXRjaCBhY3Rpb24gYnV0dG9uIHdhcyBjbGlja2VkXG4gICAgICAgIGxldCBhY3Rpb24gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3B3YXRjaCcpO1xuICAgICAgICBjb25zb2xlLndhcm4oYGNsaWNrIGFjdGlvbjogJHthY3Rpb259YCk7XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzogLy8gSWYgaXQncyB0aGUgc3RhcnQgYnV0dG9uLCBzdGFydFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0b3AnOiAvLyBJZiBpdCdzIHRoZSBzdG9wIGJ1dHRvbiwgc3RvcFxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiAvLyBJZiBpdCdzIHRoZSBzdG9wd2F0Y2ggYnV0dG9uLCByZXNldFxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVtcGxhdGUocHJvcHMpIHtcbiAgICAgICAgY29uc3Qge3RpbWUsIHJ1bm5pbmd9ID0gcHJvcHM7XG4gICAgICAgIGNvbnNvbGUud2Fybihwcm9wcyk7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIlN0b3B3YXRjaFwiPlxuICAgICAgICAgICR7dGhpcy5mb3JtYXRUaW1lKHRpbWUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIkJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQnV0dG9uIEJ1dHRvbi0tcHJpbWFyeVwiXG4gICAgICAgICAgICBkYXRhLXN0b3B3YXRjaD1cIiR7IHJ1bm5pbmcgPyAnc3RvcCcgOiAnc3RhcnQnIH1cIlxuICAgICAgICAgID4gXG4gICAgICAgICAgICAkeyBydW5uaW5nID8gJ1N0b3AnIDogJ1N0YXJ0JyB9IFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJCdXR0b25cIiBkYXRhLXN0b3B3YXRjaD1cInJlc2V0XCI+XG4gICAgICAgICAgICBSZXNldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7Il0sInNvdXJjZVJvb3QiOiIifQ==