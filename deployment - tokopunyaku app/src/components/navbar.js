import 'boxicons'
import logo from '../image/toko-logo.png'

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      max-width: 1267px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .wrapper {
      padding: 0.2rem 0.4rem;
      background-color: #fff;
    }

    .header__brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header__name {
      font-family: 'General Sans', sans-serif;
      font-size: 0.8em;
      font-weight: 600;
      color: rgb(175, 171, 171);
    }

    nav .nav__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      width: 300px;
    }

    .nav__item {
      color: rgb(175, 171, 171);
      text-decoration: none;
    }

    .header__name-brand {
      font-family: 'General Sans', sans-serif;
      font-size: 1.1em;
      font-weight: bold;
      font-style: italic;  
      color: rgb(5, 3, 3);
    }

    .header__logo {
      width: 45px;
    }

    .header__info {
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header__icons {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .header__profile {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    .button {
      outline:none;
      border:none; 
      padding: 0.8em;
      font-family: 'Satoshi', sans-serif;
      background-color: rgb(5, 4, 4);
      color: rgb(228, 228, 228);
      border-radius: 3em;
    }
  </style>

  <header>
    <div class="wrapper">
      <div class="container">
        <div class="header__brand">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(175, 171, 171);transform: ;msFilter:;"><path d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path><circle cx="11.75" cy="18" r="1"></circle></svg>
          <h3 class="header__name">Download Tokopunyaku App Here</h3>
        </div>

        <nav class="nav">
          <ul class="nav__group">
            <li class="nav__list"><a href="" class="nav__item">home</a></li>
            <li class="nav__list"><a href="" class="nav__item">contact us</a></li>
            <li class="nav__list"><a href="" class="nav__item">about us</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="wrapper">
      <div class="container">
        <div class="header__brand">
          <img class="header__logo" src="${logo}" alt="alt" />
          <h1 class="header__name-brand">Tokopunyaku</h1>
        </div>

        <div class="header__info">
          <div class="header__icons">
          <box-icon name='message-square-dots' ></box-icon>
            <box-icon name='shopping-bag' ></box-icon>
            <box-icon name='bell' ></box-icon>
            <box-icon name='headphone' ></box-icon>
          </div>

          <div class="header__profile">
            <img src="" alt="profile" class="profile_img" />
            <h3 class="profile_name">ebayyou</h3>
          </div>

          <button type="submit" class="button">Become Merchant</button>
        </div>
      </div>
    </div>
  </header>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('navbar-app', Navbar);
