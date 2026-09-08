// Derived by figoya-site from source/site.md; do not edit. The look is in
// /_/css/component/header.css, which is yours.
const template = document.createElement("template");
template.innerHTML = `
  <header>
    <div class="burger" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="menu">
      <li><a href="/">Home</a></li>
      <li><a href="/the-internet-pollutes">The Internet Pollutes</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/how-we-work">How We Work</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
    </ul>
    <div class="logo">
      <img src="/_/img/figoya-logo-18.svg" alt="Figoya Logo">
    </div>
  </header>
  <link rel="stylesheet" href="/_/css/component/header.css">
`;

export default template;
