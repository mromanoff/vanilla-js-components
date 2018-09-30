import './styles.css';

import App from './App';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

document.componentRegistry = {}; // keep a record of the components we've created, accessible through the document
document.nextId = 0;             // initial id


let root = document.getElementById('root');
root.addEventListener('render', event => console.log('custom event render. got fired', event));


let app = new App({element: root}); // Store the element to re-render on print.js changes
app.render();

let headerElement = '[data-component="header"]';
let header = new Header({element: headerElement, data: {title: 'JS Component POC'}});
header.render();

let mainElement = '[data-component="main"]';
let main = new Main({element: mainElement});
main.render();

let footerElement = '[data-component="footer"]';
let footer = new Footer({element: footerElement});
footer.render();


if (module.hot) {
    module.hot.accept('./App.js', function () {
        console.log('Accepting the updated App module!');
        document.body.removeChild(root);
        app = App({element: root}); // Re-render the "app" to update the click handler
        app.render();
    })
}