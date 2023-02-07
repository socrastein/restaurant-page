function loadMenu() {
  const pageHolder = document.getElementById("pageHolder");
  pageHolder.style.backgroundImage = "";

  const page = document.createElement("div");
  page.setAttribute("class", "menuPage");
  page.setAttribute("id", "menuPage");

  const welcome = document.createElement("div");
  welcome.setAttribute("class", "pageHeader");
  welcome.innerHTML =
    "Our menu is changing all the time <br><br> Here's what is in season right now:";
  page.appendChild(welcome);

  const mac = document.createElement("div");
  mac.setAttribute("class", "menuItem");
  mac.setAttribute("id", "menuMac");
  const macText = document.createElement("p");
  macText.innerHTML = 'Four-Cheese Mac - $26';
  mac.appendChild(macText);
  page.appendChild(mac);

  const enchilada = document.createElement("div");
  enchilada.setAttribute("class", "menuItem");
  enchilada.setAttribute("id", "menuEnchilada");
  const enchText = document.createElement("p");
  enchText.innerHTML = 'Chicken Enchilada - $32';
  enchilada.appendChild(enchText);
  page.appendChild(enchilada);

  const cheesecake = document.createElement("div");
  cheesecake.setAttribute("class", "menuItem");
  cheesecake.setAttribute("id", "menuCheesecake");
  const chzText = document.createElement("p");
  chzText.innerHTML = 'Vanilla Cheesecake - $18';
  cheesecake.appendChild(chzText);
  page.appendChild(cheesecake);

  pageHolder.appendChild(page);

}

export default loadMenu;
