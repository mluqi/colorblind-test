import '../../component/tips-list';
import datas from '../../data/DATA.json';

const Home = {
    async render() {
        return `
            <!--hero jumbotron-->
            <hero-section></hero-section>

            <!--Tips & trik-->
            <tips-list></tips-list>
            
            <!--Berita-->
            <news-list></news-list>
        `;
    },

    async afterRender() {
        const tipsListElement = document.querySelector('tips-list');
        tipsListElement.datas = datas;
    },
};

export default Home;