class Alert extends HTMLElement {
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
            .alert {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.8rem;
              background-color: rgb(5, 4, 4);
            }

            .alert h3 {
              padding: 0.3em 0.7em;
              background-color: #fff;
              color: rgb(5, 4, 4);
              font-size: 0.8em;
              border-radius: 1.3em;
            }

            .alert p {
              font-family: 'Satoshi', sans-serif;
              color: rgb(228, 228, 228);
              text-transform: uppercase;
              font-size: 0.8em;
            }

          </style>

          <div class="alert">
            <h3>DEAL</h3>
            <p>We got a special deal for you</p>
          </div>
      `;
  }
}

customElements.define('alert-info', Alert);
