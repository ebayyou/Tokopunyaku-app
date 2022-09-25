const template = document.createElement('template')
template.innerHTML = `
  <style>
  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }

  .alert div {
    padding: 0.3em 0.7em;
    background-color: #fff;
    color: rgb(5, 4, 4);
    font-size: 0.8em;
    border-radius: 1.3em;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .alert p {
    font-family: 'Satoshi', sans-serif;
    color: rgb(228, 228, 228);
    text-transform: uppercase;
    font-size: 0.8em;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
  </style>

  <div class="alert">
    <div>DEAL</div>
    <p>We got a special deal for you</p>
  </div>
`


class Alert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    if(this.getAttribute('color_alert')) this.shadowRoot.querySelector('.alert').style.backgroundColor = this.getAttribute('color_alert')
  }
}

customElements.define('alert-info', Alert);
