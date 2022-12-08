const template = document.createElement('template');
template.innerHTML = `
  <style>
    .button {
      outline: none;
      border: none;
      background-color: transparent;
      color: #717171;
      font-family: 'Satoshi', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      transition: color .3s;
      cursor: pointer;
    }
  
    .button:hover {
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
      background-color: #e4dcea; 
      opacity: 1;
      visibility: visible;
      transition: all .3s ease-in;
      padding: 0;
      margin:0;
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
      border: 2px solid #1d1b43;
      border-radius: 0.5em;
    }
    .about__flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #1d1b43;
      padding: 1em;
    }
    .about__file {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.6em;
    }

    .about__body {
      padding: 1em;
    }

    .about__desc {
      font-family: 'Satoshi', sans-serif;
      font-weight: 500;
    }
  </style>

  <button class="button">About us</button>

  <div class="detail__about hidden">
    <div class="container">
      <div class="about__flex">
        <div class="about__file">
          <svg class="about__svg-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M14.481 14.015c-.238 0-.393.021-.483.042v3.089c.091.021.237.021.371.021.966.007 1.597-.525 1.597-1.653.007-.981-.568-1.499-1.485-1.499z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.934 15.951-.07-1.807a53.142 53.142 0 0 1-.042-1.94h-.021a26.098 26.098 0 0 1-.525 1.828l-.574 1.842H9l-.504-1.828a21.996 21.996 0 0 1-.428-1.842h-.013c-.028.638-.049 1.366-.084 1.954l-.084 1.793h-.988L7.2 13.23h1.422l.462 1.576c.147.546.295 1.135.399 1.688h.021a39.87 39.87 0 0 1 .448-1.694l.504-1.569h1.394l.26 4.721h-1.044zm5.25-.56c-.498.413-1.253.609-2.178.609a9.27 9.27 0 0 1-1.212-.07v-4.636a9.535 9.535 0 0 1 1.443-.099c.896 0 1.478.161 1.933.505.49.364.799.945.799 1.778 0 .904-.33 1.528-.785 1.913zM14 9h-1V4l5 5h-4z"></path></svg>
          <p class="about__filename">TOKOPUNYAKU-app.md</p>
        </div>
        <svg class="close__button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg>
      </div>

      <div class="about__body">
        <h1 class="about__heading">Tokopunyaku APP</h1>
        <p class="about__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae deserunt tempora molestias amet recusandae laborum aspernatur, soluta aliquam error iusto praesentium sequi, nesciunt, quod enim cupiditate itaque fugit. Recusandae, possimus aspernatur perferendis sapiente inventore rerum hic maxime. </p>
        <p class="about__desc">Consequatur repudiandae aperiam assumenda obcaecati voluptates porro laborum, recusandae, nobis quos dolorum odit alias fuga quia blanditiis aut! Voluptas temporibus a sapiente vel obcaecati consectetur ea modi iure tempora odio, eaque ratione. Voluptates repellat placeat autem necessitatibus obcaecati aperiam, animi, molestias cupiditate ullam vel, illum facere? Eligendi veniam adipisci, unde deserunt mollitia minus non commodi cumque quod, distinctio dolorem aperiam quaerat expedita.</p>
        <p class="about__desc">Consequatur repudiandae aperiam assumenda obcaecati voluptates porro laborum, recusandae, nobis quos dolorum odit alias fuga quia blanditiis aut! Voluptas temporibus a sapiente vel obcaecati consectetur ea modi iure tempora odio, eaque ratione.</p>
      </div>
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
    this.shadowRoot.querySelector('.button').addEventListener('click', (e) => {
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
