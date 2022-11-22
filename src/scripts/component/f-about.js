import ghLogo from '../../public/icons/github.svg';

class FooterSection extends HTMLElement{
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="footer" id="about">
            <div class="container">
            <div class="left-footer text-left">
                <p>Color Blind Test<span style="font-size: 12px; vertical-align: top;">&reg;</span></p>
            </div>
           
            <div class="right-footer">
                <p>About Us</p>
                <ul>
                <li><a class="img-svg" href="https://github.com/mluqi"><img src="${ghLogo}"></a>F225X0440 - Mohammad Luqi Wiharto</li>
                <li><a class="img-svg" href="https://github.com/Ardywsptr"><img src="${ghLogo}"></a>F288X0693 - Ardy Wirasaputra</li>
                <li><a class="img-svg" href="https://github.com/wiraaji"><img src="${ghLogo}"></a>F225X0446 - Wira Aji Nugraha</li>
                <li><a class="img-svg" href="https://github.com/isamsd26"><img src="${ghLogo}"></a>F007X0030 - Isa Mas'ud</li>
                </ul>
            </div>
           
            </div>
        </section>
    `;
    }

}
customElements.define('f-about', FooterSection);