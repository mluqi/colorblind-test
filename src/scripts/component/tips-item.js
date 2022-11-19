/* eslint-disable no-underscore-dangle */
class tipsItem extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ${this._data.title}
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${this._data.description}</div>
          </div>
        </div>
      `;
    }
}

customElements.define('tips-item', tipsItem);