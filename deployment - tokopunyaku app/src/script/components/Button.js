const template = document.createElement('template');
template.innerHTML = `
  <style>
    .button {
      padding: 0.8em;
      font-family: 'Satoshi', sans-serif;
      color: rgb(228, 228, 228);
      border-radius: 3em;
      cursor: pointer;
      transition: all .3s;
      outline: none;
      border: none;
    }

    .button:hover {
      transform: scale(0.92);
    }
  </style>


  <button type="button" class="button"></button>
`;

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.getAttribute('name_button')) {
      this.shadowRoot.querySelector('button').innerText = this.getAttribute('name_button');
    }
    if (this.getAttribute('color_button')) {
      this.shadowRoot.querySelector('button').style.backgroundColor = this.getAttribute('color_button');
    }
  }
}

customElements.define('button-ui', Button);
