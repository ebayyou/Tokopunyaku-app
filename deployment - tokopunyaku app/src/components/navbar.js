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
          nav {
            background-color: thistle;
            padding: 0.4em 0.6em;
          }

          nav h1 {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
        </style>

        <nav>
          <h1>Navbar</h1>
        </nav>
    `;
  }
}

customElements.define('navbar-app', Navbar);
