const template = document.createElement('template');
template.innerHTML = `
  <style>
    .nav__item {
      font-family: 'Satoshi', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: color .3s;
    }
  
    .nav__item:hover {
      color: #322d69;
    }

    .detail__about {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      z-index: 1000;
      background-color: #737eaf; 
      opacity: 1;
      visibility: visible;
      transition: all .3s ease-in;
    }

    .close__button {
      cursor: pointer;
    }

    .hidden {
      opacity: 0;
      visibility: hidden;
      transform: translateY(0);
    }

    .container {
      max-width: 968px;
      margin: 3.5em auto;
      padding: 1em;
    }
  </style>

  <a href="#" class="nav__item">About us</a>

  <div class="detail__about hidden">
    <div class="container">
      <box-icon name='x' size='md' class="close__button"></box-icon>
      <h1 class="about__heading">Tokopunyaku APP</h1>
      <p class="about__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae deserunt tempora molestias amet recusandae laborum aspernatur, soluta aliquam error iusto praesentium sequi, nesciunt, quod enim cupiditate itaque fugit. Recusandae, possimus aspernatur perferendis sapiente inventore rerum hic maxime. </p>
      <p class="about__desc">Consequatur repudiandae aperiam assumenda obcaecati voluptates porro laborum, recusandae, nobis quos dolorum odit alias fuga quia blanditiis aut! Voluptas temporibus a sapiente vel obcaecati consectetur ea modi iure tempora odio, eaque ratione. Voluptates repellat placeat autem necessitatibus obcaecati aperiam, animi, molestias cupiditate ullam vel, illum facere? Eligendi veniam adipisci, unde deserunt mollitia minus non commodi cumque quod, distinctio dolorem aperiam quaerat expedita.</p>
    </div>
  </div>
`;

class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.nav__item').addEventListener('click', (e) => {
      e.preventDefault();
      this.showButton();
    });
    this.shadowRoot.querySelector('.close__button').addEventListener('click', () => {
      this.closeButton();
    });
  }

  showButton() {
    const detailAbout = this.shadowRoot.querySelector('.detail__about');
    if (detailAbout.classList.contains('hidden')) detailAbout.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  closeButton() {
    const detailAbout = this.shadowRoot.querySelector('.detail__about');
    if (!detailAbout.classList.contains('hidden')) detailAbout.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

customElements.define('detail-about', About);
