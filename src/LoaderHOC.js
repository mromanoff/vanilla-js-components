import Component from './Component';

const LoaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return WrappedComponent;
    }
  };
};

export default LoaderHOC;