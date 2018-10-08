/**
 * @jest-environment jsdom
 */

import Footer from './Footer';

it('Footer renders correctly', () => {

  document.componentRegistry = {};
  document.nextId = 0;

  const element = document.createElement('div');
  element.setAttribute('data-component', 'footer');
  let component = new Footer({element});
  component.render();

  expect(component).toMatchSnapshot();
});