/* eslint-disable import/extensions */
import './news-item.js';

class newsList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class ="setup">
            <div class="container">
                <div id="news" class="text-header text-center">
                    <h3>Berita</h3>
                    <p>Berita Kesehatan Indonesia</p>
                </div class="container text-center">
            <div class="container">
                <div class="row">
                    <div class="col mt-5">            
                        <div class="row news-container"></div>
                    </div>
                </div>
            </div>      
            </div>
        </section>
        `;
    }
}

customElements.define('news-list', newsList);