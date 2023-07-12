import logoDark from '../assets/logo-dark.svg';

const menuPage = function() {

    const content = document.querySelector(".content");

    const navbar = document.createElement('div');
    navbar.classList.add('dark-navbar');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const headingLogo = document.createElement('img');
    headingLogo.src = logoDark;

    heading.appendChild(headingLogo);
    navbar.appendChild(heading);

    const menus = document.createElement('div');
    menus.classList.add('menus-dark');

    const ul = document.createElement('ul');


    const menuList = ['HOME', 'MENUS', 'CATERING', 'LOCATIONS', 'BBQ BOX', 'GIFT CARDS', 'ABOUT US'];

    for (let i = 0; i < menuList.length; i++) {
        const li = document.createElement('li');
        if (i == 1) {
            li.setAttribute('class', 'active');
        }
        li.setAttribute('id', `${menuList[i]}`);
        li.innerText = menuList[i];
        ul.appendChild(li);
    }

    menus.appendChild(ul);
    navbar.appendChild(menus);

    content.appendChild(navbar);

    const container = document.createElement('div');
    container.classList.add('menuContainer');

    container.innerText = "HEllo this is container";

    content.appendChild(container);
}

 
export default menuPage;