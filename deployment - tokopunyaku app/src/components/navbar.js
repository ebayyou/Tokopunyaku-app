const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import '../style/main.scss'
  </style>

  <header>
  <div class="header__brand">
    <h1 class="header__name">Tokopunyaku</h1>
    <img src='' class="header__logo">
  </div>

  <nav class="nav">
    <ul class="nav__group">
      <li class="nav__list"><a href="" class="nav__item"></a></li>
      <li class="nav__list"><a href="" class="nav__item"></a></li>
      <li class="nav__list"><a href="" class="nav__item"></a></li>
    </ul>
  </nav>
  </header>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('navbar-app', Navbar);
