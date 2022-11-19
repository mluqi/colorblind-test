import '../component/navbar';
import '../component/hero';
import '../component/news-list';
import '../component/news-item';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({
        home,
        tes,
    }) {
        this._home = home;
        this._tes = tes;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._home.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
