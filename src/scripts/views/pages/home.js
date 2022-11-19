import iconFirst from '../../../public/icons/icons-1.svg';
import iconSecond from '../../../public/icons/icons-2.svg';
import iconThird from '../../../public/icons/icons-3.svg';

const Home = {
    async render() {
        return `
        <!--hero jumbotron-->
        <hero-section></hero-section>

        <!--Tips & trik-->
        <section class="setup">
            <div class="container">
                <div id="tips" class="text-header text-center">
                    <h3>Tips & Trik</h3>
                    <p>Menjaga Kesehatan Mata</p>
                </div>
                <div class="items text-center">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="icons">
                                <img src="${iconFirst}" alt="icons">
                            </div>
                            <div class="desc">
                                <h5>Create account</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas voluptate
                                    temporibus velit recusandae nemo</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="icons">
                                <img src="${iconSecond}" alt="icons">
                            </div>
                            <div class="desc">
                                <h5>Setup your design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas voluptate
                                    temporibus velit recusandae nemo</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="icons">
                                <img src="${iconThird}" alt="icons">
                            </div>
                            <div class="desc">
                                <h5>Publish your work</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quas voluptate
                                    temporibus velit recusandae nemo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!--Berita-->
        <news-list></news-list>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Home;