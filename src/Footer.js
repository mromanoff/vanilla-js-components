import Component from './Component';
import inject from './inject';

@inject('mmyStore')
class Footer extends Component {
  instanceProperty = 'bork';

  constructor(props, store) {
    super(props);
    this.state = {...props}; // Spread in the props from our initial state as the state.
    this.store = store;
  }

  template(props) { // the data is passed in as props here.
    let template = `
        <footer>
            <p>footer content going here ${this.instanceProperty}</p>
            <p>store value: ${this.store.a}</p>
            <p>store value: ${this.store.b}</p> 
        </footer>
      `;
    return template;
  }
};

export default Footer;