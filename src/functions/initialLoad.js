import homepage from "../pages/homepage";
import favicon from "../assets/favicon.png";

const initialLoad = () => {
  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = favicon;

  document.head.appendChild(faviconLink);

  homepage();
};

export default initialLoad;
