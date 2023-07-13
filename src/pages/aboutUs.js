
import logoDark from '../assets/logo-dark.svg';
import about from '../assets/about.jpg';


const aboutPage = () => {

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


    const menuList = ['HOME', 'MENUS', 'ABOUT US'];

    for (let i = 0; i < menuList.length; i++) {
        const li = document.createElement('li');
        if (i == 2) {
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
    container.classList.add('aboutContainer');

    const aboutHeading = document.createElement('h1');
    aboutHeading.innerHTML = 'ALL THE BBQ. ALL ON ONE PLATE. ALL GOOD.';

    const paragraph1 = document.createElement('p');
    paragraph1.innerHTML = 'In order to form a more perfect BBQ, the Spice & Sizzle is determined to bring all the best flavors together.';

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = 'Our menu is a walk around the country — and the world. We\'re paying homage to the American Southern traditions that first inspired us, and the global traditions that made us curious. From fan favorites, ribs, wings, brisket, and sausage to creative sandwiches to captivating sides, you can find our inspo du jour — international, national, or something in between — front and center on our menu. The best way to learn about us is to join us for a plate of BBQ.';

    const paragraph3 = document.createElement('p');
    paragraph3.innerHTML = 'So come on in and get to know our small, passionate, and hardworking crew of folks. Spice & Sizzle is a place where you can feel like a regular, whether it\'s your first visit or your fiftieth. Start your own BBQ tradition with us.';


    const imgDiv = document.createElement('div');
    imgDiv.classList.add('aboutImg');

    const aboutImg = document.createElement('img');
    aboutImg.src = about;

    imgDiv.appendChild(aboutImg);

    container.appendChild(aboutHeading);
    container.appendChild(paragraph1);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);
    container.appendChild(imgDiv);

    content.appendChild(container);


    const footer = document.createElement('div');
    footer.classList.add('footer');

    content.appendChild(footer);

}

export default aboutPage;