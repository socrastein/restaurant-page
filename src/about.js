function loadAbout() {
  const pageHolder = document.getElementById("pageHolder");
  pageHolder.style.backgroundImage = "";

  const page = document.createElement("div");
  page.setAttribute("class", "flexColumn aboutPage");
  page.setAttribute("id", "aboutPage");

  const welcome = document.createElement("div");
  welcome.setAttribute("class", "pageHeader");
  welcome.innerHTML =
    "Chef Matt has been cooking for over 20 years <br> His food speaks for itself.";
  page.appendChild(welcome);

  pageHolder.appendChild(page);
}

export default loadAbout;
