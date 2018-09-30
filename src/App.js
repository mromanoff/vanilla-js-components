import Component from "./Component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props }; // Spread in the props from our initial state as the state.
  }

  template(props) {
    // the data is passed in as props here.
    return `
        <div class="App">
          <header class="App-header" data-component="header"></header>
          <main class="App-main" data-component="main"></main>
          <footer class="App-footer" data-component="footer"></footer>
        </div>
      `;
  }
}

export default App;
