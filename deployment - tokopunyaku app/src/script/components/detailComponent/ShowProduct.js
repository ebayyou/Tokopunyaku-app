class ShowProduct extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    set product(product) {
      this._product = product;
    }
  
    connectedCallback() {
      this.render();

      this.shadowRoot.querySelector('.button').addEventListener('click', () => {
        this.showProduct();
      })

      this.shadowRoot.querySelector('.close__button').addEventListener('click', () => {
        this.closeButton();
      });
    }

    showProduct() {
      const showElement = this.shadowRoot.querySelector('.show__product')
      if (showElement.classList.contains('hidden')) showElement.classList.remove('hidden')
      else showElement.classList.add('hidden')
    }

    closeButton() {
      const detailAbout = this.shadowRoot.querySelector('.show__product');
      if (!detailAbout.classList.contains('hidden')) detailAbout.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <style>
            .button {
              width: 100%;
              padding: 0.8em;
              font-family: 'Satoshi', sans-serif;
              font-size: 1.1em;
              color: rgb(228, 228, 228);
              background-color: #3770cd;
              border-radius: 0.6em;
              cursor: pointer;
              transition: all .3s;
              outline: none;
              border: none;
            }
        
            .button:hover {
              transform: scale(0.92);
            }

            .show__product {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 9999;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              margin: 0 auto;
              background-color: #1919190c;
              opacity: 1;
              visibility: visible;
              transition: all .3s ease-in;
            }

            .container {
              width: 800px;
              padding: 1.2em;
              background-color: #e4dcea;
              border-radius: 0.8rem;
            }

            .show__group {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .show__img {
              width: 55%;
              height: 450px;
              background: #737eaf;
              padding: 0.8em;
              display: flex;
              align-items: center;
            }

            .item__img {
              max-width: 100%;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .show__info {
              width: 40%;
            }

        
            .close__button {
              cursor: pointer;
            }
        
            .hidden {
              opacity: 0;
              visibility: hidden;
              transform: translateY(0);
            }

            @media (max-width: 550px) {
              .show__group {
                flex-direction: column;
              }  
            }
          </style>  
        
          <button type="button" class="button">Show more</button>

          <div class="show__product hidden">
            <div class="container">
              <svg class="close__button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>

              <div class="show__group" id="${this._product.id}">
                <div class="show__img">
                  <img class="item__img" src="${this._product.images[1]}" alt="product img item"/>
                </div>
                
                <div class="show__info">
                  <div class="show__text">
                    <h4 class="item__title">${this._product.title}</h4>
                    <p class="item__desc">${this._product.rating}</p>
                    <span class="item__price">${this._product.price}</span>
                    <span class="item__percentage">${this._product.discountPercentage}&#37;</span>
                  </div>

                  <div class="show__price">
                    <span class="item__percentage">${this._product.brand}</span>
                    <span class="item__percentage">${this._product.stock}</span>
                    <span class="item__percentage">${this._product.category}</span>
                    <p class="item__desc">${this._product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    }
  }
  
  customElements.define('show-product', ShowProduct);
  