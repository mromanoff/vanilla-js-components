/**
 * @jest-environment jsdom
 */

import Stopwatch from './Stopwatch';

xit('Stopwatch renders correctly', () => {

  document.componentRegistry = {};
  document.nextId = 0;

  const element = document.createElement('div');
  element.setAttribute('data-component', 'timer');

  const data = {
    time: 0,
    running: false,
  };

  let component = new Stopwatch({element, data});
  component.render();

  expect(component).toMatchSnapshot();
});