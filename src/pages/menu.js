import logoDark from "../assets/logo-dark.svg";
import bbq from "../assets/bbq.jpg";
import wings from "../assets/wings.jpg";
import sandwich from "../assets/sandwich.jpg";

const menuPage = function () {
  const content = document.querySelector(".content");

  const navbar = document.createElement("div");
  navbar.classList.add("dark-navbar");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const headingLogo = document.createElement("img");
  headingLogo.src = logoDark;

  heading.appendChild(headingLogo);
  navbar.appendChild(heading);

  const menus = document.createElement("div");
  menus.classList.add("menus-dark");

  const ul = document.createElement("ul");

  const menuList = ["HOME", "MENUS", "ABOUT US"];

  for (let i = 0; i < menuList.length; i++) {
    const li = document.createElement("li");
    if (i == 1) {
      li.setAttribute("class", "active");
    }
    li.setAttribute("id", `${menuList[i]}`);
    li.innerText = menuList[i];
    ul.appendChild(li);
  }

  menus.appendChild(ul);
  navbar.appendChild(menus);

  content.appendChild(navbar);

  // Container Starts here

  const container = document.createElement("div");
  container.classList.add("menuContainer");

  const barbeque = document.createElement("div");
  barbeque.classList.add("barbeque");

  const barbequeHeading = document.createElement("h1");
  barbequeHeading.innerHTML = "Barbeque";

  const headingParagraph = document.createElement("p");
  headingParagraph.innerHTML =
    "Smoked daily, all served with Texas toast & pickles. Sold by the 1/2 lb.";

  const barbequeImage = document.createElement("img");
  barbequeImage.src = bbq;

  const brisketHeading = document.createElement("h3");
  brisketHeading.innerHTML = "Brisket";

  const brisketParagraph = document.createElement("p");
  brisketParagraph.innerHTML = "chopped or sliced";

  const porkRibTips = document.createElement("h3");
  porkRibTips.innerHTML = "Pork rib tips";

  const porkSpareRibs = document.createElement("h3");
  porkSpareRibs.innerHTML = "Pork spare ribs";

  const pulledPorkShoulder = document.createElement("h3");
  pulledPorkShoulder.innerHTML = "Pulled Pork Shoulder";

  const porkBelly = document.createElement("h3");
  porkBelly.innerHTML = "Pork Belly";

  const turkeyBreast = document.createElement("h3");
  turkeyBreast.innerHTML = "Turkey Breast";

  const chickenHeading = document.createElement("h3");
  chickenHeading.innerHTML = "Chicken";

  const chickenImg = document.createElement("img");
  chickenImg.src = wings;

  const chickenWings = document.createElement("h3");
  chickenWings.innerHTML = "Chicken Wings";

  const JalapenoCheeseSausage = document.createElement("h3");
  JalapenoCheeseSausage.innerHTML = "JALAPEÑO CHEESE SAUSAGE";

  const hr = document.createElement("hr");

  barbeque.appendChild(barbequeHeading);
  barbeque.appendChild(headingParagraph);
  barbeque.appendChild(barbequeImage);
  barbeque.appendChild(brisketHeading);
  barbeque.appendChild(brisketParagraph);
  barbeque.appendChild(porkRibTips);
  barbeque.appendChild(porkSpareRibs);
  barbeque.appendChild(pulledPorkShoulder);
  barbeque.appendChild(porkBelly);
  barbeque.appendChild(turkeyBreast);
  barbeque.appendChild(chickenHeading);
  barbeque.appendChild(chickenImg);
  barbeque.appendChild(chickenWings);
  barbeque.appendChild(JalapenoCheeseSausage);
  barbeque.appendChild(hr);

  container.appendChild(barbeque);

  const signatureSandwiches = document.createElement("div");
  signatureSandwiches.classList.add("signatureSandwiches");

  const signatureSandwichesHeading = document.createElement("h1");
  signatureSandwichesHeading.innerHTML = "SIGNATURE SANDWICHES";

  const signatureSandwichesParagraph = document.createElement("p");
  signatureSandwichesParagraph.innerHTML =
    "When bread meets what could go between bread, there's no end to the culinary possibilities.";

  const carolinaHeading = document.createElement("h3");
  carolinaHeading.innerHTML = "CAROLINA ON MY MIND";

  const carolinaParagraph = document.createElement("p");
  carolinaParagraph.innerHTML =
    "pulled pork, crispy skin, coleslaw, spicy vinegar sauce, sesame bun";

  const musicCity = document.createElement("h3");
  musicCity.innerHTML = "MUSIC CITY";

  const musicCityParagraph = document.createElement("p");
  musicCityParagraph.innerHTML =
    "spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun";

  const bigCheese = document.createElement("h3");
  bigCheese.innerHTML = "BIG CHEESE";

  const bigCheeseParagraph = document.createElement("p");
  bigCheeseParagraph.innerHTML =
    "chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun";

  const club = document.createElement("h3");
  club.innerHTML = "CLUB";

  const clubParagraph = document.createElement("p");
  clubParagraph.innerHTML =
    "smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast";

  const SANDWICHESImage = document.createElement("img");
  SANDWICHESImage.src = sandwich;

  const jiveTurkey = document.createElement("h3");
  jiveTurkey.innerHTML = "JIVE TURKEY";

  const jiveTurkeyParagraph = document.createElement("p");
  jiveTurkeyParagraph.innerHTML =
    "smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast";

  const texasRanger = document.createElement("h3");
  texasRanger.innerHTML = "TEXAS RANGER";

  const texasRangerParagraph = document.createElement("p");
  texasRangerParagraph.innerHTML =
    "sliced brisket, crispy onions, house pickles, BBQ sauce, texas toast";

  const jimmyMuscles = document.createElement("h3");
  jimmyMuscles.innerHTML = "JIMMY MUSCLES";

  const jimmyMusclesParagraph = document.createElement("p");
  jimmyMusclesParagraph.innerHTML =
    "crispy chicken breast, pork belly, jalapeño relish, sticky garlic sauce, ranch, herbs, sesame bun";

  const texasFlood = document.createElement("h3");
  texasFlood.innerHTML = "TEXAS FLOOD";

  const texasFloodParagraph = document.createElement("p");
  texasFloodParagraph.innerHTML =
    "chopped brisket, jalapeño cheese sausage, spicy pickles, crispy onions, bbq sauce, sesame bun";

  const tofuBanhMi = document.createElement("h3");
  tofuBanhMi.innerHTML = "TOFU BANH MI";

  const tofuBanhMiParagraph = document.createElement("p");
  tofuBanhMiParagraph.innerHTML =
    "crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, sticky garlic, aioli, hoagie roll";

  const hr2 = document.createElement("hr");

  signatureSandwiches.appendChild(signatureSandwichesHeading);
  signatureSandwiches.appendChild(signatureSandwichesParagraph);
  signatureSandwiches.appendChild(carolinaHeading);
  signatureSandwiches.appendChild(carolinaParagraph);
  signatureSandwiches.appendChild(musicCity);
  signatureSandwiches.appendChild(musicCityParagraph);
  signatureSandwiches.appendChild(bigCheese);
  signatureSandwiches.appendChild(bigCheeseParagraph);
  signatureSandwiches.appendChild(club);
  signatureSandwiches.appendChild(clubParagraph);
  signatureSandwiches.appendChild(SANDWICHESImage);
  signatureSandwiches.appendChild(jiveTurkey);
  signatureSandwiches.appendChild(jiveTurkeyParagraph);
  signatureSandwiches.appendChild(texasRanger);
  signatureSandwiches.appendChild(texasRangerParagraph);
  signatureSandwiches.appendChild(jimmyMuscles);
  signatureSandwiches.appendChild(jimmyMusclesParagraph);
  signatureSandwiches.appendChild(texasFlood);
  signatureSandwiches.appendChild(texasFloodParagraph);
  signatureSandwiches.appendChild(tofuBanhMi);
  signatureSandwiches.appendChild(tofuBanhMiParagraph);
  signatureSandwiches.appendChild(hr2);

  container.appendChild(signatureSandwiches);

  content.appendChild(container);

  const footer = document.createElement("div");
  footer.classList.add("footer");

  content.appendChild(footer);
};

export default menuPage;
