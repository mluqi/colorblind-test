import ghLogo from '../../public/icons/github.svg';

class FooterSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="">
            <!-- Footer -->
            <footer class="text-white mb-0" style="background-color: #303841;">
                <!-- Grid container -->
                <div id="about" class="container p-4">
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-3">Color Blind Test</h5>
                        <p>
                            Dalam bidang kesehatan mata teknologi berkembang sangat pesat, tetapi masih banyak orang  datang langsung ke dokter mata untuk cek kesehatan mata mereka terutama tes Buta Warna.  
                        </p>
                    </div>
                    <!--Grid column-->
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-3">About Us</h5>
                        <ul class="list-unstyled">
                            <li>
                            <p><a class="img-svg" href="https://github.com/mluqi" class="text-white"><img src="${ghLogo}"></a>F225X0440 - Mohammad Luqi Wiharto</p>
                            
                            </li>
                            <li>
                            <p><a class="img-svg" href="https://github.com/Ardywsptr" class="text-white"><img src="${ghLogo}"></a>F288X0693 - Ardy Wirasaputra</p> 
                            </li>
                            <li>
                            <p><a class="img-svg" href="https://github.com/wiraaji" class="text-white"><img src="${ghLogo}"></a>F225X0446 - Wira Aji Nugraha</p> 
                            </li>
                            <li>
                                <p><a class="img-svg"href="https://github.com/isamsd26" class="text-white"><img src="${ghLogo}"></a>F007X0030 - Isa Mas'ud</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--Grid row-->
                </div>
                <!-- Grid container -->
                <!-- Copyright -->
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.63);">
                Copyright © 2022 Color Blind Test
                </div>
                <!-- Copyright -->
            </footer>
            <!-- Footer -->
        </section>
    `;
    }
}
customElements.define('f-about', FooterSection);