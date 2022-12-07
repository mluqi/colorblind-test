import logo from '../../public/logo.svg';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
            <img src="${logo}" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent, #navbarNavDarkDropdown" aria-controls="navbarSupportedContent navbarNavDarkDropdow" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav ms-auto">
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
                </a>
                <ul class="dropdown-menu">
                  <li><a class="nav-link" href="#tips">Tips & Trik</a></li>
                  <li><a class="nav-link" href="#news">Berita</a></li>
                  <li><a class="nav-link" href="#about">About</a></li>
                </ul>
              </li>
            </ul>
          </div>
            <a class="nav-link" href="#/tes">Tes</a>
            <a class="nav-link" href="#/riwayat">Riwayat</a>
          </div>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);