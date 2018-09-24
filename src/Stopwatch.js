import Component from './Component';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
        this.formatTime = this.formatTime.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.timerInterval = null;

        let timer = document.querySelector(this.state.element);
        timer.addEventListener('click', this.clickHandler, false);
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
        return (hours > 0 ? hours + 'h ' : '') + (minutes > 0 || hours > 0 ? minutes + 'm ' : '') + (time % 60) + 's';
    }

    /**
     * Start the stopwatch
     */
    start() {
        let {data: {time}} = this.state;
        // Start the timer
        this.timerInterval = setInterval(() => {
            update_timer()
        }, 1000);
        // Update the timer
        let update_timer = () => this.setState({time: ++time}); // we need access to the current state of time
        this.setState({running: true});
    }

    /**
     * Stop the stopwatch
     */
    stop() {
        this.setState({running: false});
        clearInterval(this.timerInterval);
    }

    /**
     * Reset the stopwatch
     */
    reset() {
        this.setState({time: 0, running: false});
        clearInterval(this.timerInterval);
    }

    clickHandler(event) {
        event.preventDefault();
        // Check if a stopwatch action button was clicked
        let action = event.target.getAttribute('data-stopwatch');
        console.warn(`click action: ${action}`);

        switch (action) {
            case 'start': // If it's the start button, start
                this.start();
                break;
            case 'stop': // If it's the stop button, stop
                this.stop();
                break;
            case 'reset': // If it's the stopwatch button, reset
                this.reset();
                break;
            default:
                return;
        }
    }

    template(props) {
        const {time, running} = props;
        console.warn(props);
        let template = `
        <div id="stopwatch">
          ${this.formatTime(time)}
        </div>
        <div class="stopwatch_content">
          <button 
            data-stopwatch="${ running ? 'stop' : 'start' }"
          > 
            ${ running ? 'Stop' : 'Start' } 
          </button>
          <button data-stopwatch="reset">
            Reset
          </button>
        </div>
      `;
        return template;
    }
};

export default Stopwatch;