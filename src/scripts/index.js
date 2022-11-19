/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './views/app';
// import '../styles/scss/styles.scss';
// import './component/navbar';
// import './component/hero';
// const myLogo = new Image();

// myLogo.src = logo;

// element.appendChild(myLogo);
const home = new App({
    home: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    home.renderPage();
});

window.addEventListener('load', () => {
    home.renderPage();
});