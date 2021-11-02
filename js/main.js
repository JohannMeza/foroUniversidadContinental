const d = document;
import { styleBarra } from "./dom/barraScroll.js";
import { btnMenu } from "./dom/btnMenu.js";
import { headerScroll } from "./dom/header.js";
import { navObserver } from "./dom/navObserver.js";
import { behavior } from "./dom/scrollBehavior.js";
import { darkMode } from "./library/darkMode.js";

d.addEventListener("DOMContentLoaded", e => {
  headerScroll('.header-mode')
  darkMode("mode-theme")
  navObserver()
  behavior()
  styleBarra()
  btnMenu()
})