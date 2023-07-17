import logo from "../assets/logo.svg";
import background from "../assets/background.jpg";

const homepage = function () {
  const content = document.querySelector(".content");

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const headingLogo = document.createElement("img");
  headingLogo.src = logo;

  heading.appendChild(headingLogo);
  navbar.appendChild(heading);

  const menus = document.createElement("div");
  menus.classList.add("menus");

  const ul = document.createElement("ul");

  const menuList = ["HOME", "MENUS", "ABOUT US"];

  for (let i = 0; i < menuList.length; i++) {
    const li = document.createElement("li");
    if (i == 0) {
      li.setAttribute("class", "active");
    }
    li.setAttribute("id", `${menuList[i]}`);
    li.innerText = menuList[i];
    ul.appendChild(li);
  }

  menus.appendChild(ul);
  navbar.appendChild(menus);

  content.appendChild(navbar);

  const container = document.createElement("div");
  container.classList.add("container");
  container.style.backgroundImage = `url(${background})`;

  const containerContents = document.createElement("div");
  containerContents.classList.add("container-contents");

  const containerHeading = document.createElement("div");
  containerHeading.classList.add("container-heading");
  containerHeading.innerText = "Spice & Sizzle Supper Club";

  const containerText = document.createElement("div");
  containerText.classList.add("container-text");
  containerText.innerText =
    "A fancy 4-course Spice & Sizzle dine-in experience that will leave you in smoke. \
                                Get your tickets now for July, August & September.";

  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "GET YOUR TICKET";

  containerContents.appendChild(containerHeading);
  containerContents.appendChild(containerText);
  containerContents.appendChild(button);

  container.appendChild(containerContents);

  content.appendChild(container);
};

export default homepage;
