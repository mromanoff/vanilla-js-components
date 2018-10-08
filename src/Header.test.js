/**
 * @jest-environment jsdom
 */

import Header from './Header';

it('Header renders correctly', () => {

  document.componentRegistry = {};
  document.nextId = 0;

  const title = 'JS Component POC';

  const element = document.createElement('div');
  element.setAttribute('data-component', 'header');
  let component = new Header({element, data: {title}});
  component.render();

  expect(component).toMatchSnapshot();
});