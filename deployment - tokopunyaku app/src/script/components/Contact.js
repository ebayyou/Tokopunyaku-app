import 'boxicons';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      max-width: 967px;
      height: 400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .contact__group {
      font-family: 'Satoshi', sans-serif;
      text-align: center;
      width: 50%;
    }
    .contact__head {
      font-size: 1.4rem;
      margin-bottom: 0.3em;
    }
    .contact__desc {
      font-size: 0.9rem;
      margin-bottom: 1.2em;
    }

    .input__group {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .input__group input {
      outline: none;
      border: none;
      padding: 0.7em 0.8em 0.8em;
      background-color: #191919;
      color: #fff;
    }
    .input__group input::placeholder {
      color: #fff;
    }
    .icon_contact {
      background-color: #d2d2d2;
      padding: 0.2em;
    }
    box-icon #icon svg {
      transform: rotate(-15deg);
      color: white;
    }

    .social_link {
      padding-left: 0.6em;
    }

    .border-left {
      border-left: 1px solid #1d1b43;
    }
    .p-left {
      padding-left: 5em;
    }
    .p-right {
      padding-right: 5em;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        height: 300px;
        justify-content: center;
        padding: 2em 0 3em;
      }
      
      .contact__group { 
        width: 80%;
      }

      .border-left {
        border-left: none;
      }
      .p-left {
        padding-left: 0;
      }
      .p-right {
        padding-right: 0;
      }
    }

    @media (max-width: 568px) {
      .contact__group { 
        width: 90%;
      }

      .contact__head {
        font-size: 1.2rem;
      }
    }
  </style>

  <section id="contact-me">
    <div class="container">
      <div class="contact__group p-right">
        <h3 class="contact__head">Follow Us On</h3>
        <p class="contact__desc">Don't forget follow my social media, why follow me? because follow is free.</p>
        <div class="contact__social">
            <a href="https://www.instagram.com/byanggoro_/" target="_blank" class="social_link"><box-icon class='social-icon' name='instagram-alt' type='logo' ></box-icon></a>
            <a href="https://www.linkedin.com/in/bayu-anggoro-53204b250/" target="_blank" class="social_link"><box-icon type='logo' class='social-icon' name='linkedin-square'></box-icon></a>
            <a href="https://github.com/ebayyou" target="_blank" class="social_link"><box-icon class='social-icon' name='github' type='logo' ></box-icon></a>
            <a href="https://github.com/ebayyou" target="_blank" class="social_link"><box-icon type='logo' name='codepen' class='social-icon'></box-icon></a>
        </div>
      </div>

      <div class="contact__group border-left p-left">
        <h3 class="contact__head">Let's Stay In Touch</h3>
        <p class="contact__desc">Enter your email and what will happen?.</p>
        <form>
          <div class="input__group">
            <input type="email" name="email" id="input__email" placeholder="Enter Your Email">
            <div class="icon_contact">
              <box-icon name='send' ></box-icon>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
`;

class Contact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  //   connectedCallback() {
  //   }
}

customElements.define('contact-ui', Contact);
