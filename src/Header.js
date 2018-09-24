import Component from './Component';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }; // Spread in the props from our initial state as the state.
    }

    template(props) { // the data is passed in as props here.
        const { title } = props;
        let template = `
        <div class="nav">
          ${title}
        </div>
      `;
        return template;
    }
};

export default Header;