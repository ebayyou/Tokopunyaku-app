import 'boxicons';

const template = document.createElement('template')
template.innerHTML = `
  <style>
    select, input {
      outline: none;
      border: none;
    }

    .wrapper {
      background-color: #E4DCEA;
      font-family: 'Satoshi', sans-serif;
      position: relative;
    }

    .container {
      max-width: 967px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .frame {
      background-color: #3770CD;
      width: 100%;
      height: 75px; 
    }

    .frame__group {
      position: absolute;
      top: 50px;
    }

    .input__group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8em;
      border-radius: 0.6em;
      background-color: #E4DCEA;
    }

    #input__search {
      width: 100%;
      padding: 0.5em;
      background-color: transparent;
      font-size: 1rem;
    }
    #input__search::placeholder {
      color: #191919;
    } 

    .search__icon {
      color: #191919; 
      font-size: 1.2rem;
    }

    #input__select {
      padding: 0.5em;
      background-color: transparent;
      color: #737EAF;
    }

    .frame__recenlty {
      margin: 80px;
      text-align: center;
    }

    .recenlty__box {
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
      align-items: center;
      gap: 1rem;
    }
    .recenlty__result {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      .recenlty__name {
        font-size: 2.4rem
      }
      .recenlty__result {
        font-size: 1.15rem;
      }

      .frame__group {
        width: 500px;
      }

      #input__search, #input__select {
        font-size: 1.15rem;
      }
    }

    @media (min-width: 1200px) {
      .frame__group {
        width: 600px;
      }

      .recenlty__box {
        gap: 1.7rem;
      }

      .recenlty__result {
        font-size: 1.25rem;
      }
    }
  </style>  

  <div class="wrapper">
    <div class="frame"></div>
    <div class="container">
      <div class="frame__group">
        <div class="input__group">
          <box-icon size='md' name='search-alt' class="search__icon"></box-icon>
          <input type="search" name="search" id="input__search" placeholder="Search Here">
          <select name="select-category" id="input__select">
            <option value="Shoes">Shoes</option>
          </select>
        </div>
      </div>
      <div class="frame__recenlty">
        <h1 class="recenlty__name">Adidas Sneaker</h1>
        <div class="recenlty__box">
          <span class="recenlty__result">Related</span>
          <span class="recenlty__result">Converse Shoes</span>
          <span class="recenlty__result">Nike Air Jordan</span>
          <span class="recenlty__result">Vans Shoes</span>
          <span class="recenlty__result">VentelaxRabbit</span>
        </div>
      </div>
    </div>
  </div>
`
//90px
class SearchElement extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('search-element', SearchElement)