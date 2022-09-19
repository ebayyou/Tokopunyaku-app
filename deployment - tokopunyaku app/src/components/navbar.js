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
        <nav>Navbar</nav>
    `;
  }
}

customElements.define('navbar-app', Navbar);
