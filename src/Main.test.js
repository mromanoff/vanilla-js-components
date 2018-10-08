/**
 * @jest-environment jsdom
 */

import Main from './Main';

jest.mock('./Stopwatch');


it('Main renders correctly', () => {

  document.componentRegistry = {};
  document.nextId = 0;

  const element = document.createElement('div');
  element.setAttribute('data-component', 'main');
  let component = new Main({element: element});
  component.render();

  expect(component).toMatchSnapshot();
});