import "./style.css";
import gitLogo from "./pics/github.svg";

// import Picture from './picture.jpg';

// Add the image to an existing div
// const myPicture = new Image();
// myPicture.src = Picture;
// element.appendChild(myPicture)

import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";

const root = document.getElementById("root");

// Setup the header and subheader with restaurant name and tagline. Underneath, the page tabs
// will be nested inside a container div. These elements are the only HTML other than the footer
// that aren't loaded dynamically by a call to a page module
const pageHeader = document.createElement("h1");
pageHeader.setAttribute("class", "header flexRow");
pageHeader.innerHTML = 'Chez Matthieu'
root.appendChild(pageHeader);

const subHeader = document.createElement("h2");
subHeader.setAttribute("class", "subHeader flexRow");
subHeader.innerHTML = 'Great food is our love language';
root.appendChild(subHeader);

const tabBar = document.createElement("div");
tabBar.setAttribute("class", "tabBar flexRow");
root.appendChild(tabBar);

// Replace all content on the page with scripted elements from home.js module
// when home tab is clicked
const tabHome = document.createElement("div");
tabHome.innerHTML = "Home";
tabHome.setAttribute("id", "tabHome");
tabHome.setAttribute("class", "tabButton tabCurrent");
tabHome.addEventListener("click", () => {
  clearPageHolder();
  loadHome();
  tabHome.setAttribute("class", "tabButton tabCurrent");
  tabAbout.setAttribute("class", "tabButton");
  tabMenu.setAttribute("class", "tabButton");
});
tabBar.appendChild(tabHome);

// Replace all content on the page with scripted elements from about.js module
// when about tab is clicked
const tabAbout = document.createElement("div");
tabAbout.innerHTML = "About";
tabAbout.setAttribute("id", "tabAbout");
tabAbout.setAttribute("class", "tabButton");
tabAbout.addEventListener("click", () => {
  clearPageHolder();
  loadAbout();
  tabAbout.setAttribute("class", "tabButton tabCurrent");
  tabHome.setAttribute("class", "tabButton");
  tabMenu.setAttribute("class", "tabButton");
});
tabBar.appendChild(tabAbout);

// Replace all content on the page with scripted elements from menu.js module
// when menu tab is clicked
const tabMenu = document.createElement("div");
tabMenu.innerHTML = "Menu";
tabMenu.setAttribute("id", "tabMenu");
tabMenu.setAttribute("class", "tabButton");
tabMenu.addEventListener("click", () => {
  clearPageHolder();
  loadMenu();
  tabMenu.setAttribute("class", "tabButton tabCurrent");
  tabAbout.setAttribute("class", "tabButton");
  tabHome.setAttribute("class", "tabButton");
});
tabBar.appendChild(tabMenu);


// This is the main container in which each module's page elements will be loaded and unloaded
// as tabs are selected
const pageHolder = document.createElement("div");
pageHolder.setAttribute("id", "pageHolder");
pageHolder.setAttribute("class", "flexColumn");
root.appendChild(pageHolder);

// Empties the pageHolder node so that new content from module can replace it
// Runs everytime a page tab is clicked
const clearPageHolder = () => {
  pageHolder.innerHTML = '';
}

// Create footer with attribution and GitHub logo at the bottom of home page, the only HTML other
// than the page tabs that is not loaded dynamically by a call to a module
const footer = document.querySelector("footer");
footer.setAttribute("class", "footer flexRow");
const footerText = document.createElement("p");
footerText.setAttribute("class", "footerText");
footerText.innerHTML = "Copyright © 2023 Matt Talley (socrastein)";
const footerLogo = new Image();
footerLogo.src = gitLogo;
footerLogo.setAttribute("id", "gitLogo");
footer.appendChild(footerText);
footer.appendChild(footerLogo);

// Initial call to home module to append page content to the root div
loadHome();
