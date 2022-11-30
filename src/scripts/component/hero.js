import heroImg from '../../public/images/heros/hero-img.svg';

class HeroSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text">
                            Selamat datang, kami menyediakan tes buta warna
                        </div>
                        <div class="buttons">
                            <a href="#/tes" class="btn btn-primary">Start Test</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <img class="heroImg" src="${heroImg}" alt="">
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('hero-section', HeroSection);