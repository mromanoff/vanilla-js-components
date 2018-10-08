/**
 * @jest-environment jsdom
 */

import App from './App';

jest.mock('./Stopwatch');


it('App renders correctly', () => {

  document.componentRegistry = {};
  document.nextId = 0;

  const element = document.createElement('div');
  element.setAttribute('id', 'root');
  let component = new App({element});
  component.render();

  expect(component).toMatchSnapshot();
});