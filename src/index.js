import initialLoad from "./functions/initialLoad";
import cleanDOM from "./functions/cleanDOM";
import homepage from "./pages/homepage";
import menuPage from "./pages/menu";
import aboutPage from "./pages/aboutUs";
import "./styles/homepage.css";
import "./styles/menu.css";
import "./styles/about.css";

initialLoad();

document.querySelector(".content").addEventListener("click", (e) => {
  if (e.target.id == "HOME") {
    cleanDOM();
    homepage();
  }

  if (e.target.id == "MENUS") {
    cleanDOM();
    menuPage();
  }
  if (e.target.id == "ABOUT US") {
    cleanDOM();
    aboutPage();
  }
});
