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

// All the page tabs will be nested and styled within this container div,
// making this the only HTML other than the footer not loaded dynamically by a call to a module
const tabBar = document.createElement("div");
tabBar.setAttribute("class", "tabBar");
root.appendChild(tabBar);

// Replace all content on the page with scripted elements from home.js module
// when home tab is clicked
const tabHome = document.createElement("div");
tabHome.innerHTML = "Home";
tabHome.setAttribute("class", "tabButton");
tabHome.addEventListener("click", loadHome);
tabBar.appendChild(tabHome);

// Replace all content on the page with scripted elements from about.js module
// when about tab is clicked
const tabAbout = document.createElement("div");
tabAbout.innerHTML = "About";
tabAbout.setAttribute("class", "tabButton");
tabAbout.addEventListener("click", loadAbout);
tabBar.appendChild(tabAbout);

// Replace all content on the page with scripted elements from menu.js module
// when menu tab is clicked
const tabMenu = document.createElement("div");
tabMenu.innerHTML = "Menu";
tabMenu.setAttribute("class", "tabButton");
tabMenu.addEventListener("click", loadMenu);
tabBar.appendChild(tabMenu);

// Create footer with attribution and GitHub logo at the bottom of home page, the only HTML other
// than the page tabs that is not loaded dynamically by a call to a module
const footer = document.createElement("div");
footer.setAttribute("class", "footer");
root.appendChild(footer);
const footerText = document.createElement("p");
footerText.innerHTML = "Copyright © 2023 Matt Talley (socrastein)";
const footerLogo = new Image();
footerLogo.src = gitLogo;
footerLogo.setAttribute("id", "gitLogo");
footer.appendChild(footerText);
footer.appendChild(footerLogo);

// Initial call to home module to append page content to the root div
loadHome();
