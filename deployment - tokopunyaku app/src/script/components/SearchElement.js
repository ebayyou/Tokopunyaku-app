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
            display: flex;
            justify-content: space-between;
            background-color: #E4DCEA;
            box-shadow:
            4.1px 4.1px 1.9px -5px rgba(0, 0, 0, 0.017),
            8.2px 8.2px 4.5px -5px rgba(0, 0, 0, 0.024),
            12.7px 12.7px 8.4px -5px rgba(0, 0, 0, 0.03),
            18.5px 18.5px 15px -5px rgba(0, 0, 0, 0.036),
            28.8px 28.8px 28px -5px rgba(0, 0, 0, 0.043),
            60px 60px 67px -5px rgba(0, 0, 0, 0.06)
            ;
            border-radius: 0.6em;
          } 
      
          .input__group {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8em;
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

          .button {
            margin: 0.3em;  
            padding: 0.3em 0.7em;
            font-family: 'Satoshi', sans-serif;
            font-size: 1rem;
            color: rgb(228, 228, 228);
            background-color: #1d1b43;
            border-radius: 0.6em;
            cursor: pointer;
            transition: all .3s;
            outline: none;
            border: none;
          }
      
          .button:hover {
            transform: scale(0.92);
          }
      
          @media (min-width: 768px) {
            .search__group {
              width: 450px;
            }
      
            #input__search, #input__select {
              font-size: 1.15rem;
            }

            .button {
              padding: 0.3em 1em;
              font-size: 1.2rem;
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
              </div>
              <button type="button" class="button">Search</button>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('search-element', SearchElement);
