/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import App from './views/app';

const home = new App({
    home: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    home.renderPage();
});

window.addEventListener('load', () => {
    home.renderPage();
});