import 'boxicons';
import './detailComponent/Categories';

class SearchElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set event(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowRoot.querySelector('#input__search').value;
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          input,
          select {
            outline: none;
            border: none;
          }

          .wrapper {
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
      
          .search__group {
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
      
          @media (min-width: 768px) {
            .search__group {
              width: 500px;
            }
      
            #input__search, #input__select {
              font-size: 1.15rem;
            }
          }
      
          @media (min-width: 1200px) {
            .search__group {
              width: 600px;
            }
          }
        </style>  
      
        <section class="wrapper">
          <div class="frame"></div>
          <div class="container">
            <div class="search__group">
              <div class="input__group">
                <box-icon size='md' name='search-alt' class="search__icon"></box-icon>
                <input type="search" name="search" id="input__search" placeholder="Search Here">
                <select name="select-category" id="input__select">
                  <option value="Shoes">Shoes</option>
                </select>
              </div>
            </div>
            <search-category></search-category>
          </div>
        </section>
      `;

    this.shadowRoot.querySelector('#input__search').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-element', SearchElement);
