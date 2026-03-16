import "./styles/reset.css";
import "./styles/main.css";
import "./styles/header-navbar.css";
import "./styles/footer-navbar.css";
import "./styles/home-page.css";
import "./styles/menu-page.css";
import "./styles/about-page.css";

import { DisplayHome } from "./scripts/home-page.js";
import { MenuDisplay } from "./scripts/menu-page.js";
import { AboutDisplay } from "./scripts/about-page.js";

const mainBlock = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

const displayHome = new DisplayHome(mainBlock, document);
const displayMenu = new MenuDisplay(mainBlock, document);
const displayAbout = new AboutDisplay(mainBlock, document);

displayHome.displayHomeElements();

homeButton.addEventListener("click", () => {
  mainBlock.replaceChildren();
  displayHome.displayHomeElements();
});

menuButton.addEventListener("click", () => {
  mainBlock.replaceChildren();
  displayMenu.displayMenuElements();
});

aboutButton.addEventListener("click", () => {
  mainBlock.replaceChildren();
  displayAbout.displayAboutElements();
});

