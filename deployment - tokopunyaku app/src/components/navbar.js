class Navbar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
          header {
            background-color: thistle;
            padding: 0.4em 0.6em;
          }

          nav h1 {
            font-family: 'Satoshi', sans-serif;
            font-weight: 800;
          }
        </style>

        <header>
          <div class="header__brand">
            <h1 class="header__name">Tokopunyaku</h1>
            <img src='../assets/Logo - favicon/tokopunyaku-app-32.png' class="header__logo">
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
  }
}

customElements.define('navbar-app', Navbar);
