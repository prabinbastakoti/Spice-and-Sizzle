import initialLoad from './functions/initialLoad';
import cleanDOM from './functions/cleanDOM';
import homepage from './pages/homepage';
import menuPage from './pages/menu';
import './styles/homepage.css';
import './styles/menu.css';


initialLoad();

document.querySelector('.content').addEventListener('click', function (e) {

    if (e.target.id == 'HOME') {
        cleanDOM();
        homepage();
    }

    if (e.target.id == 'MENUS') {
        cleanDOM();
        menuPage();
    }
})