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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#tips">Tips & Trik</a>
            <a class="nav-link" href="#news">Berita</a>
            <a class="nav-link" href="#/tes">Tes</a>
            <a class="nav-link" href="#/riwayat">Riwayat</a>
            <a class="nav-link" href="#about">About</a>
          </div>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);