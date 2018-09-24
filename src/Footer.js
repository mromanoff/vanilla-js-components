import Component from './Component';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {...props}; // Spread in the props from our initial state as the state.
    }

    template(props) { // the data is passed in as props here.
        let template = `
        <footer>
            footer content going here
        </footer>
      `;
        return template;
    }
};

export default Footer;