import logo from '../image/toko-logo.png'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    footer {
      margin-top: 350px;
      padding: 0.8em;
      background-color: #E4DCEA;
    }

    .container {
      max-width: 1267px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .footer__group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8em;
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

    .footer__info {
      margin-top: 2em;
      padding-top: 1em;
      font-family: 'Satoshi', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      color: #a8a8a5;
      border-top: 1px solid #a8a8a5;
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
    }
  </style>

  <footer>
    <div class="container">
      <div class="footer__col">
        <div class="footer__group">
          <img class="footer__logo" src="${logo}" alt="alt" />
          <h3 class="footer__brand">Tokopunyaku</h3>
        </div>

        <div class="footer__media">
          <a href="" class="social_link"><box-icon class='social-icon' size='md' name='instagram-alt' type='logo' ></box-icon></a>
          <a href="" class="social_link"><box-icon type='logo' class='social-icon' size='md' name='linkedin-square'></box-icon></a>
          <a href="" class="social_link"><box-icon class='social-icon' size='md' name='github' type='logo' ></box-icon></a>
        </div>

        <p class="footer__copy">Weekday fit your wear with us</p>
        <p class="footer__copy">Copyright &copy; 25-09-2022 Firts Ebayyou. All right reserved.</p>
      </div>


      <div class="footer__col">
        <h5 class="footer__heading">About Us</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="">Project</a></li>
          <li class="footer__item"><a href="">Track Record</a></li>
          <li class="footer__item"><a href="">Pricing</a></li>
          <li class="footer__item"><a href="">Services</a></li>
          <li class="footer__item"><a href="">Professional Worker</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Pricing</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="">About Product</a></li>
          <li class="footer__item"><a href="">Management</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Media</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="">Privacy Police</a></li>
          <li class="footer__item"><a href="">Development</a></li>
          <li class="footer__item"><a href="">Terms & services</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5 class="footer__heading">Contact ME</h5>
        <ul class="footer__list">
          <li class="footer__item"><a href="">WhatsApp</a></li>
        </ul>
      </div>
    </div>

    <p class="footer__info">by using this website, you understand the information being presented is provided for informational purposes only </p>
  </footer>
`


class footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('footer-ui', footer);
