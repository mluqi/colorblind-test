import DataSource from '../data/data-source';

class NewsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="setup">
        <div class="container">
            <div id="news" class="text-header text-center">
                <h3>Berita</h3>
                <p>Berita Kesehatan Indonesia</p>
            </div class="container text-center">
                <div class="row">
                    <div class="card mb-3 ms-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      `;
  }
}

customElements.define('news-section', NewsSection);
