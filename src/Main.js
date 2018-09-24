import Component from './Component';
import Stopwatch from './Stopwatch';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    componentDidMount() {
        const INITIAL_STATE = {
            element: '[data-component="timer"]',
            data: {
                time: 0,
                running: false
            }
        };
        const stopwatch = new Stopwatch(INITIAL_STATE);
        stopwatch.render();
    }

    template(props) {
        let template = `
        <main>
          <div data-component="timer">
            Loading...
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere, nisl in pharetra tincidunt, leo lectus fringilla orci, vitae dignissim purus mi eu turpis. Pellentesque a laoreet velit, sit amet tincidunt urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. In lorem felis, sagittis nec pharetra nec, porta eu est. Mauris gravida, justo sit amet finibus eleifend, enim arcu feugiat mi, et rhoncus sem ligula scelerisque augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquam nibh risus, vitae dictum lorem sollicitudin ac. Sed ac enim est. Praesent id dolor ligula. Praesent sollicitudin sed turpis sed rutrum. Curabitur eget varius tortor. Ut quis consectetur odio. Phasellus iaculis, metus ac volutpat auctor, dui nibh ornare quam, imperdiet aliquam tellus quam sit amet mi.</p>
        </main>
      `;
        return template;
    }
};

export default Main;