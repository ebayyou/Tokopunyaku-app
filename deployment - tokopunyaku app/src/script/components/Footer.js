import logo from '../../image/toko-logo.png';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    footer {
      background-color: #d8d8d8;
    }

    .container {
      padding: 1.5em 0.8em 0;
      max-width: 1267px;
      margin: 0 auto 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .footer__group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4em;
    }

    .footer__media {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8em;
    }
    .social-icon {
      color: #191919;
    }

    .footer__brand {
      font-family: 'General Sans', sans-serif;
      font-size: 1.2em;
      font-weight: bold;
      font-style: italic;  
      color: #191919
    }

    .footer__logo {
      width: 50px;
    }

    .footer__copy {
      font-family: 'Satoshi', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      color: #191919;
      text-align: center;
    }

    .footer__heading {
      margin-bottom: 0.2em;
      font-family: 'General Sans', sans-serif;
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      color: #191919
    }
    .footer__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer__item {
      font-family: 'Satoshi', sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      text-align: center;
    }
    .footer__item a {
      text-decoration: none;
      color: #191919;
    }
    .footer__item a:hover {
      color: #3770CD;
    }

    .footer__info {
      margin: 0;
      padding: 1em;
      font-family: 'Satoshi', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      color: #717171;
      background-color: #d2d2d2;
    }

    .fw-500 {
      font-weight: 500;
    }

    @media (min-width: 968px) {
      .container {
        flex-direction: row;
        justify-content: space-between;
        align-items:start;
        flex-wrap: wrap;
      }

      .footer__copy {
        text-align: left;
      }

      .footer__group, .footer__media {
        justify-content: start;
      }

      .w-25 {
        width: 30%;
      }
    }

    @media (max-width: 568px) {
      .footer__info {
        font-size: 0.9rem;
      }

      .container {
        padding: 1.5em 0 0;
      }
    }
  </style>

  <footer>
    <div class="container">
      <div class="footer__col w-25">
        <div class="footer__group">
          <img class="footer__logo" src="${logo}" alt="alt" />
          <h3 class="footer__brand">Tokopunyaku</h3>
        </div>

        <p class="footer__copy fw-500">A simple style is everything, because actually this is the key for you to look the way you are wherever you are</p>
        <p class="footer__copy">Copyright &copy; 25-09-2022 Ebayyou Anggoro. All right reserved.</p>
        <p class="footer__copy">www.tokopunyaku-app.com</p>
      </div>


      <div class="footer__col">
        <h5 class="footer__heading">About Us</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="https://github.com/ebayyou/tokopunyaku-app" target="_blank">Project</a></li>
          <li class="footer__item"><a href="https://obsidian-notebook-90d.notion.site/Submission-Tugas-Akhir-Front-End-Web-Development-fe903d7c010b409aa493e622788f5db5" target="_blank">ReadME APP</a></li>
          <li class="footer__item"><a href="" target="_blank">Pricing</a></li>
          <li class="footer__item"><a href="" target="_blank">Services</a></li>
          <li class="footer__item"><a href="https://dummyjson.com/docs/products" target="_blank">API Reference</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Navigation</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="#home">Home</a></li>
          <li class="footer__item"><a href="">Contact me</a></li>
          <li class="footer__item"><a href="">About me</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Design Inspiration</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="https://dribbble.com/shots/19192406/attachments/14347994?mode=media" target="_blank">AtHing - E-Commerce</a></li>
          <li class="footer__item"><a href="https://dribbble.com/shots/19110485-AtHing-E-Commerce-Mobile-App" target="_blank">Mobile Design</a></li>
          <li class="footer__item"><a href="https://dribbble.com/farizzakky" target="_blank">by Farizzakky</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Contact ME</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="https://api.whatsapp.com/send?phone=0895383121719&text=Hello,%20im%20bay!"  target="_blank">WhatsApp</a></li>
        </ul>
      </div>
    </div>

    <p class="footer__info">Dicoding Submission - Fundamentals of Front End Web Development: Creating Web Applications with ES6, Custom Elements, NPM, Webpack, and AJAX. </p>
  </footer>
`;

class footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('footer-ui', footer);
