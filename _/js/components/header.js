import { publish, getState, subscribe } from "../vendor/figoya-state-manager.js";
import template from "./templates/header.js";

// <main-header page="/services">: the site's navigation and logo. The markup
// comes from source/site.md (templates/header.js is derived); the look comes
// from _/css/component/header.css, linked from inside the shadow root.
class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const page = this.getAttribute("page");
    this.shadowRoot.querySelectorAll("ul > li").forEach((item) => {
      if (item.querySelector("a").getAttribute("href") === page) item.setAttribute("class", "selected");
    });
    // WC-6: the page attribute becomes a class on the root element.
    if (page !== "/") this.shadowRoot.querySelector("header").classList.add("alt");
  }
  connectedCallback() {
    const matchMobileOrTablet = window.matchMedia(`(max-width: 1040px)`);
    const burger = this.shadowRoot.querySelector("header > .burger");
    const menu = this.shadowRoot.querySelector("header > .menu");
    const logo = this.shadowRoot.querySelector("header > .logo");

    if (matchMobileOrTablet.matches) {
      subscribe({
        event: ["MAIN_MENU_OPENED", "MAIN_MENU_CLOSED", "DOM_CONTENT_LOADED"],
        action: () => {
          const state = getState();
          if (state.mainMenuOpen === true) {
            burger.setAttribute("class", "burger open");
            menu.setAttribute("class", "menu open");
          } else {
            burger.setAttribute("class", "burger");
            menu.setAttribute("class", "menu");
          }
        },
      });
      burger.addEventListener("click", (domEvent) => {
        const state = getState();
        if (state.mainMenuOpen === true) {
          publish({ event: "MAIN_MENU_CLOSED", domEvent });
        } else {
          publish({ event: "MAIN_MENU_OPENED", domEvent });
        }
      });
      logo.addEventListener("click", (domEvent) => {
        publish({ event: "MAIN_MENU_CLOSED", domEvent });
      });
    }
  }
}
customElements.define("main-header", MainHeader);

export default MainHeader;
