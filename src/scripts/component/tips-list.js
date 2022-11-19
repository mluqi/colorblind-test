/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import './tips-item';

class tipsList extends HTMLElement {
    set datas(datas) {
        this._datas = datas.tips;
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="setup">
        <div class="container">
            <div id="tips" class="text-header text-center">
                <h3>Tips & Trik</h3>
                <p>Menjaga Kesehatan Mata</p>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">

            </div>
        </div>
        </section>
        `;
        this._datas.forEach(data => {
          const tipsItemElement = document.createElement('tips-item');
          const containerElement = document.getElementById('accordionFlushExample');

          tipsItemElement.data = data;
          this.appendChild(tipsItemElement);

          containerElement.appendChild(tipsItemElement);
          document.getElementById('accordionFlushExample').appendChild(tipsItemElement);
        });
    }
}

customElements.define('tips-list', tipsList);
