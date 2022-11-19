import Home from '../views/pages/home';
import Riwayat from '../views/pages/riwayat';
import Tes from '../views/pages/tes';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/tes': Tes,
    '/riwayat': Riwayat,
};

export default routes;