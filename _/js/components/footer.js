import template from "./templates/footer.js";

// <main-footer>: the site's footer. The markup comes from source/site.md
// (templates/footer.js is derived); the look from _/css/component/footer.css.
class MainFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("main-footer", MainFooter);

export default MainFooter;
