class Component {
    constructor(props) {
        // ..and an (optional) custom class constructor. If one is
        // not supplied, a default constructor is used instead:
        // constructor() { }
        if (!props.element) throw 'Component: You did not provide an element to make into a component.';

        this._id = ++document.nextId; // creating a unique id
        document.componentRegistry[this._id] = this; // assigning id for every new component created

        this.state = {  // defining the initial state
            element: props.element, // the target dom elem we will be injecting the component into. ( i.e. #app for <div id="app"></div> )
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
        let temp = document.createElement('div');
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

        const {element, data} = this.state; // here we're grabbing the elem and data deconstructed from the state.

        // Make sure there's a template
        if (!this.template) throw 'ComponentJS: No template was provided.';

        // If elem is an element, use it.
        // If it's a selector, get it.
        let _element = typeof element === 'string'
            ? document.querySelector(element)
            : element;

        if (!element) return; // if there's no element, stop and return.

        // Get the template, data will be passed as props to the template.
        let _template = typeof this.template === 'function'
            ? this.template(data)
            : this.template;

        // array indexOf === -1 true if index value is not found.
        if (['string', 'number'].indexOf(typeof _template) === -1) return;

        // Render the template into the element
        if (_element.innerHTML === _template) return; // if they're the same, return
        _element.innerHTML = _template; // else update with new template

        // Dispatch a render event -> https://developer.mozilla.org/en-US/documents/Web/API/CustomEvent
        if (typeof window.CustomEvent === 'function') {
            let event = new CustomEvent('render', {
                bubbles: true
            });
            _element.dispatchEvent(event);
        }

        this.componentDidMount(_element);

        // Return the _elem for use elsewhere
        return _element;
    } // render

    componentDidMount(_element) {
        console.log('mounted', _element);
        return true;
    }

} // class Component

export default Component;