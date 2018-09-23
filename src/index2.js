import printMe from './print.js';


// This is an es6 re-write of Chris Ferdinandi's stopwatch fiddle below:
// http://jsfiddle.net/cferdinandi/nb40j6rf/6/?mc_cid=1d481e891a&mc_eid=a3f6fd745a
// Great job to Chris for the fiddle and explaination.

/**
 * A vanilla JS helper for creating state-based components
 * @param {String|Node} elem    The element to make into a component
 * @param {Object}      options The component options
 */
const Component = ((win, doc, undefined) => { // es6 IIFE
    'use strict';
    /**
     * Create the Component object
     * @param {String|Node} elem    The element to make into a component
     * @param {Object}      options The component options
     */
        // Creating a new class (declaration-form)
        // A base class is defined using the new reserved 'class' keyword
    class Component {
        constructor(props) {
            // ..and an (optional) custom class constructor. If one is
            // not supplied, a default constructor is used instead:
            // constructor() { }
            if (!props.elem) throw 'Component: You did not provide an element to make into a component.';

            this._id = ++doc.nextId; // creating a unique id
            doc.componentRegistry[this._id] = this; // assigning id for every new component created

            this.state = {  // defining the initial state
                elem: props.elem, // the target dom elem we will be injecting the component into. ( i.e. #app for <div id="app"></div> )
                data: props.data || null // the data we want to pass to our component or null, ( i.e an object with key/value pairs )
            }
        }

        // Add a setState() method, just like other js frameworks.
        setState(props) {
            // Shallow merge new properties into state object
            for (var key in props) {
                if (props.hasOwnProperty(key)) {
                    this.state.data[key] = props[key];
                }
            }
            // trigger a re-render
            this.render(); // basically updating the UI with the new state, this function is down below.
        }
        /**
         * Sanitize and encode all HTML in a user-submitted string
         * @param  {String} str  The user-submitted string
         * @return {String}      The sanitized string
         */
        sanitize(str) { // currently not using this, but it will be useful later.
            let temp = doc.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        };

        template(props) { // this is where our template markup will go.
            let template = `
        <div>Hello, whats up</div>
      `;
            return template ? template : null;
        }
        /**
         * Render a template into the DOM
         * @return {[type]} The element
         */

        render() {

            const { elem, data } = this.state; // here we're grabbing the elem and data deconstructed from the state.

            // Make sure there's a template
            if (!this.template) throw 'ComponentJS: No template was provided.';

            // If elem is an element, use it.
            // If it's a selector, get it.
            let _elem = typeof elem === 'string'
                ? doc.querySelector(elem)
                : elem;

            if (!elem) return; // if there's no elem, stop and return.

            // Get the template, data will be passed as props to the template.
            let _template = typeof this.template === 'function'
                ? this.template(data)
                : this.template;

            // array indexOf === -1 true if index value is not found.
            if (['string', 'number'].indexOf(typeof _template) === -1) return;

            // Render the template into the element
            if (_elem.innerHTML === _template) return; // if they're the same, return
            _elem.innerHTML = _template; // else update with new template

            // Dispatch a render event -> https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
            if (typeof win.CustomEvent === 'function') {
                let event = new CustomEvent('render', {
                    bubbles: true
                });
                _elem.dispatchEvent(event);
            }
            // Return the _elem for use elsewhere
            return _elem;
        } // render

    }; // class Component

    return Component;

})(window, document);

/**
 * Setup the navbar on page load
 */
const setup_navbar = () => {

    class Navbar extends Component {
        constructor(props) {
            super(props);
            this.state = { ...props }; // Spread in the props from our initial state as the state.
        }

        template(props) { // the data is passed in as props here.
            const { heading } = props;
            let template = `
        <div class="nav">
          ${heading}
        </div>
      `;
            return template;
        }
    };

    const INITIAL_STATE = {
        elem: '#navbar', // The target DOM element we will be injecting the Navnar component into.
        data: {
            heading: 'Welcome to my stopwatch bro.'
        }
    };

    let navbar = new Navbar(INITIAL_STATE); // Create an instance of Navbar and pass in the initial state.
    navbar.render();  // Render the navbar onto the page.
};

/**
 * Setup the stopwatch on page load
 */
const setup_stopwatch = () => {
    let timer;
    // Create the stopwatch
    class Stopwatch extends Component {
        constructor(props) {
            super(props);
            this.state = { ...props };
            this.formatTime = this.formatTime.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.reset = this.reset.bind(this);
            this.clickHandler = this.clickHandler.bind(this);

            let timer = document.getElementById('timer');
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
            let { data: { time } } = this.state;
            // Start the timer
            timer = setInterval(() => { update_timer() }, 1000);
            // Update the timer
            let update_timer = () => this.setState({ time: ++time }); // we need access to the current state of time
            this.setState({ running: true });
        }
        /**
         * Stop the stopwatch
         */
        stop() {
            this.setState({ running: false });
            clearInterval(timer);
        }
        /**
         * Reset the stopwatch
         */
        reset() {
            this.setState({ time: 0, running: false });
            clearInterval(timer);
        }

        clickHandler(event) {
            event.preventDefault();
            // Check if a stopwatch action button was clicked
            let action = event.target.getAttribute('data-stopwatch');
            console.warn(`click action: ${action}`);

            switch(action) {
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
            const { time, running } = props;
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

    const INITIAL_STATE = {
        elem: '#timer',
        data: {
            time: 0,
            running: false
        }
    };

    let stopwatch = new Stopwatch(INITIAL_STATE);
    stopwatch.render();

};

const setup_footer = () => {
    'use strict';

    // https://w3c.github.io/webcomponents/spec/custom/
    class Footer extends HTMLElement {
        constructor() {
            super();

            let content = 'Stay awhile.';
            // Create a shadow root
            let shadow = this.attachShadow({mode: 'open'});

            // Create text node and add word count to it
            let text = document.createElement('div');
            text.textContent = content;
            text.setAttribute('class','footer');

            let style = document.createElement('style');
            style.textContent = `
            .footer {
              color: gray;
            }
          `;

            // attach the created elements to the shadow dom
            shadow.appendChild(style);
            // Append it to the shadow root
            shadow.appendChild(text);
        }

        // Fires when an instance of the element is created.
        createdCallback() {

        }
        // Fires when an instance was inserted into the document.
        attachedCallback() {

        }
        // Fires when an instance was removed from the document.
        detachedCallback() {

        }
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attr, oldVal, newVal) {

        }

    }
    // Define the new element

    customElements.define('foo-ter', Footer);

    const node = new Footer;
    console.log(node.constructor);
};

// Setup the app
((win, doc, log, si, ci, sto, loc) => {

    const { pathname } = loc;

    doc.componentRegistry = {}; // keep a record of the components we've created, accessible throught the document
    doc.nextId = 0;             // initial id

    setup_navbar();
    setup_stopwatch();
    setup_footer();

    console.warn(`
  App is currently running on pathname: ${pathname}
  Current registered components: `, doc.componentRegistry);

})(
    window,
    document,
    console,
    setInterval,
    clearInterval,
    setTimeout,
    window.location
);



// Functional composition like you learned in math class
const f = x => x + 1;
const g = x => x * 2;
const x = 3;

const result1 = f(g(x)); // 7

console.log(result1);

// Slightly more useful functions
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const string = 'hello';

// Nested
const result2 = repeat(exclaim(scream(string)));
// HELLO! HELLO!

const compose = (...fns) => x =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Instead of nesting, compose your functions into a new function
const enhance = compose(repeat, exclaim, scream);

console.log(enhance(string));
// HELLO! HELLO!
