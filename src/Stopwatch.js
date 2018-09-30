import Component from "./Component";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.formatTime = this.formatTime.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.timerInterval = null;

    let timer = document.querySelector(this.state.element);
    timer.addEventListener("click", this.clickHandler, false);
  }

  /**
   * Format the time in seconds into hours, minutes, and seconds
   * @param  {Number} time The time in seconds
   * @return {String}      The time in hours, minutes, and seconds
   */
  formatTime(time) {
    let minutes = parseInt(time / 60, 10);
    let hours = parseInt(minutes / 60, 10);
    if (minutes > 59) {
      minutes = minutes % 60;
    }
    return (
      (hours > 0 ? hours + "h " : "") +
      (minutes > 0 || hours > 0 ? minutes + "m " : "") +
      (time % 60) +
      "s"
    );
  }

  /**
   * Start the stopwatch
   */
  start() {
    let {
      data: { time }
    } = this.state;
    // Start the timer
    this.timerInterval = setInterval(() => {
      updateTimer();
    }, 1000);
    // Update the timer
    const updateTimer = () => this.setState({ time: ++time }); // we need access to the current state of time
    this.setState({ running: true });
  }

  /**
   * Stop the stopwatch
   */
  stop() {
    this.setState({ running: false });
    clearInterval(this.timerInterval);
  }

  /**
   * Reset the stopwatch
   */
  reset() {
    this.setState({ time: 0, running: false });
    clearInterval(this.timerInterval);
  }

  clickHandler(event) {
    event.preventDefault();
    // Check if a stopwatch action button was clicked
    const action = event.target.getAttribute("data-stopwatch");
    console.warn(`click action: ${action}`);

    switch (action) {
      case "start":
        this.start();
        break;
      case "stop":
        this.stop();
        break;
      case "reset":
        this.reset();
        break;
      default:
        return;
    }
  }

  template(props) {
    const { time, running } = props;
    console.warn(props);
    return `
        <div class="Stopwatch">
          ${this.formatTime(time)}
        </div>
        <div class="Button-container">
          <button class="Button Button--primary"
            data-stopwatch="${running ? "stop" : "start"}"
          > 
            ${running ? "Stop" : "Start"} 
          </button>
          <button class="Button" data-stopwatch="reset">
            Reset
          </button>
        </div>
      `;
  }
}

export default Stopwatch;
