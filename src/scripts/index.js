import 'regenerator-runtime';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import swal from 'sweetalert';
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

const btn = document.getElementById('scroll-btn');
btn.addEventListener('click', topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scroll-btn').style.display = 'block';
  } else {
    document.getElementById('scroll-btn').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('load', () => {
  const spinner = document.querySelector('.spinner');

  spinner.classList.add('spinner-hidden');
  spinner.addEventListener('transitionend', () => {
    document.body.removeAttribute('.spinner');
  });
});