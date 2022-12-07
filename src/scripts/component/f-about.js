class FooterSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="about" class="text-center text-lg-start bg-white text-muted">

            <!-- Section: Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <!-- Left -->
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div>
                    <a href="/" class="me-5 link-secondary"><i class="bi bi-facebook"></i></a>
                    <a href="/" class="me-5 link-secondary"><i class="bi bi-twitter"></i></a>
                    <a href="/" class="me-5 link-secondary"><i class="bi bi-google"></i></a>
                    <a href="/" class="me-5 link-secondary"><i class="bi bi-instagram"></i></a>
                </div>
                <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4"><i class="bi bi-eye-fill"></i> About us
                            </h6>
                            <p>
                                Colod blind test merupakan website untuk menguji kepekaan mata anda terhadap warna dengan menggunakan metode tes berupa ishihara. 
                                Anda dapat menemukan tes buta warna, hasil, berita, test dan trik untuk menjaga kesehatan mata anda disini.
                            </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Developer</h6>
                            <p>
                                <a href="https://github.com/mluqi" class="text-reset">Mohammad Luqi Wiharto</a>
                            </p>
                            <p>
                                <a href="https://github.com/Ardywsptr" class="text-reset">Ardy Wirasaputra</a>
                            </p>
                            <p>
                                <a href="https://github.com/wiraaji" class="text-reset">Wira Aji Nugraha</a>
                            </p>
                            <p>
                                <a href="https://github.com/isamsd26" class="text-reset">Isa Mas'ud</a>
                            </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#tips" class="text-reset">Tips & Trik</a>
                            </p>
                            <p>
                                <a href="#news" class="text-reset">Berita</a>
                            </p>
                            <p>
                                <a href="#/tes" class="text-reset">Test</a>
                            </p>
                            <p>
                                <a href="#/riwayat" class="text-reset">Riwayat</a>
                            </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="bi bi-house-door-fill"></i> Jakarta, JKT 10012, ID</p>
                            <p>
                                <i class="bi bi-envelope-fill"></i>
                                clbltest@yahoo.com
                            </p>
                            <p><i class="bi bi-telephone-fill"></i> + 021 625 942 12</p>
                            <p><i class="bi bi-printer-fill"></i> + 021 274 634 22</p>
                        </div>
                        <!-- Grid column -->

                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4" style="background-color: #303841;">
                © 2022 Copyright : C22-138
                <a class="text-reset fw-bold" href="https://colorbtest.netlify.app/.com">www.colorbtest.netlify.app.com</a>
            </div>
            <!-- Copyright -->

        </footer>
    `;
    }
}
customElements.define('f-about', FooterSection);