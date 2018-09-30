import Component from './Component';
import inject from './decorators/inject';

@inject('inventoryStore')
class Header extends Component {
  constructor(props, store) {
    super(props);
    this.state = {...props}; // Spread in the props from our initial state as the state.
    this.store = store;
  }

  template(props) { // the data is passed in as props here.
    const {title} = props;
    debugger;

    let template = `
        <div class="nav">
          ${this.state.title} ${this.store.title}
        </div>
      `;
    return template;
  }
};

export default Header;