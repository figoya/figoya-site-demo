// Derived by figoya-site from source/site.md; do not edit. The look is in
// /_/css/component/footer.css, which is yours.
const template = document.createElement("template");
template.innerHTML = `
  <footer>
    <div>
      <section class="s social-media">
        <h2 class="c social-media heading">Social Media</h2>
        <ul class="c social-media items">
          <li><a href="https://twitter.com/FigoyaLowCarbon"><img src="/_/img/icon/twitter-1.svg" alt="Twitter icon"></a></li>
          <li><a href="https://www.linkedin.com/company/figoya/"><img src="/_/img/icon/linkedin-1.svg" alt="Linked In icon"></a></li>
        </ul>
      </section>
    </div>
    <div>
      <section class="s contact">
        <h2 class="c contact heading">Contact Us</h2>
        <div class="c contact text">
          <p>Use our <a href="/contact-us">contact us page</a></p>
        </div>
      </section>
    </div>
    <div>
      <section class="s company">
        <h2 class="c company heading">Company details</h2>
        <dl class="c company items">
          <div>
            <dt>Figoya is a trading name of</dt>
            <dd>Nat Darke Limited</dd>
          </div>
          <div>
            <dt>Company Registration No.</dt>
            <dd>07163440</dd>
          </div>
          <div>
            <dt>Registered in</dt>
            <dd>England and Wales</dd>
          </div>
          <div>
            <dt>VAT No.</dt>
            <dd>GB987160092</dd>
          </div>
          <div>
            <dt>Registered Office</dt>
            <dd>92 The High, London, SW16 1EZ</dd>
          </div>
        </dl>
      </section>
    </div>
    <div>
      <section class="s legal">
        <h2 class="c legal heading">Copyright and Privacy Policy</h2>
        <ul class="c legal items">
          <li>Copyright © 2022. Nat Darke Limited. All rights reserved.</li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </section>
    </div>
  </footer>
  <link rel="stylesheet" href="/_/css/component/footer.css">
`;

export default template;
