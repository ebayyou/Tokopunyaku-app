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
    });

    this.shadowRoot.querySelector('.close__button').addEventListener('click', () => {
      this.closeButton();
    });
  }

  showProduct() {
    const showElement = this.shadowRoot.querySelector('.show__product');
    if (showElement.classList.contains('hidden')) showElement.classList.remove('hidden');
    else showElement.classList.add('hidden');
  }

  closeButton() {
    const detailAbout = this.shadowRoot.querySelector('.show__product');
    if (!detailAbout.classList.contains('hidden')) detailAbout.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  convertToRupiah(value) {
    const number = parseFloat(value);
    return number * 15290;
  }

  formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  }

  render() {
    const idr = this.convertToRupiah(this._product.price);
    const rupiah = this.formatRupiah(idr);

    this.shadowRoot.innerHTML = `
          <style>
            p, span {
              font-family: 'Satoshi', sans-serif;
              font-weight: 500;
            }

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
              box-shadow:
              4.1px 4.1px 1.9px -5px rgba(0, 0, 0, 0.017),
              8.2px 8.2px 4.5px -5px rgba(0, 0, 0, 0.024),
              12.7px 12.7px 8.4px -5px rgba(0, 0, 0, 0.03),
              18.5px 18.5px 15px -5px rgba(0, 0, 0, 0.036),
              28.8px 28.8px 28px -5px rgba(0, 0, 0, 0.043),
              60px 60px 67px -5px rgba(0, 0, 0, 0.06)
              ;
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
            }

            .show__img {
              width: 50%;
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
              border-radius: 0.6rem;
              object-fit: cover;
            }

            .show__info {
              width: 45%;
            }
            .show__text {
              margin-bottom: 0.9rem;
            }
            .item__title {
              font-size: 2.2rem;
              margin: 0 0 0.5em;
            }
            .item__rating {
              font-size: 0.8rem;
              margin-right: 1rem;
              position: relative;
            }
            .item__rating .code-1 {
              position: absolute;
              right: -8px;
              top: 1px;
              font-size: 0.7rem;
              background: #353338;
            }
            .item__rating .star {
              font-size: 0.9rem;
              color: #fbff00;
              background-color: #322d69;
            }
            .item__price {
              margin-bottom: 0;
              font-size: 1.3rem;
            }
            .item__percentage { 
              width: 60px;
              margin-top: 0.2em;
              text-align: center;
              background-color: #737eaf;
              color: white;
              border-radius: 0.3rem;
            }
            .item__desc {
              margin: 0.5em 0 0;
            } 
            .item__desc-info {
              margin: 0 0 0.4em;
            } 
            .show__desc h5 {
              margin-bottom: 0; 
              padding-top: 0.6em;
              border-top: 1px solid #000;
            }

            
            .close__button {
              cursor: pointer;
            }
        
            .hidden {
              opacity: 0;
              visibility: hidden;
              transform: translateY(0);
            }

            @media (min-width: 1250px) {
              .container {
                width: 968px;
              }

              .item__title {
                font-size: 2.4rem;
              }
              .item__price {
                font-size: 1.5rem;
              }
              .show__desc h5, .item__rating {
                font-size: 1rem;
              }
              .item__desc {
                font-size: 1.2rem;
              }
              .item__desc-info {
                font-size: 1.1rem;
              }
            }

            @media (max-width: 780px) {
              .show__group {
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }  

              .container {
                width: 100%;
              }

              .show__img {
                width: 100%;
                height: 250px;
              }
              .show__info {
                width: 100%;
              }

              .item__img {
                height: 100%;
              }

              .item__title {
                font-size: 2rem;
                margin: 0.5em 0 0.2em;
              }
            }

            @media (max-width: 450px) {
              .show__img {
                height: 220px;
              }

              .item__title {
                font-size: 1.4rem;
                margin: 0.5em 0 0.2em;
              }
              .item__price {
                margin-top: 0.5em;
                font-size: 1.1rem;
              }
              .item__desc-info {
                font-size: 0.9rem;
              }
            }

            @media (max-width: 320px) {
              .show__img {
                height: 150px;
              }
              .show__text {
                margin-bottom: 0.5rem;
              }
              .show__desc h5 {
                margin: 0.5em 0 0;
                padding-top: 0.3em;
              } 
              .item__desc {
                margin: 0.2em 0 0;
                font-size: 0.95rem;
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
                    <h3 class="item__title">${this._product.title}</h3>
                    
                    <div class="show__rating">
                      <span class="item__rating">Terjual $rb+ <span class="code-1">&#10072;</span></span>
                      <span class="item__rating"><span class="star">&#10030;</span> ${this._product.rating} (none rating) <span class="code-1">&#10072;</span></span>
                      <span class="item__rating">Diskusi (none diskusi)</span>
                    </div>
                  </div>

                  <div class="show__text">
                    <h4 class="item__price">${rupiah}</h4>
                    <p class="item__percentage">${this._product.discountPercentage}&#37;</p>
                  </div>
                  

                  <div class="show__desc">
                    <p class="item__desc-info">brand : ${this._product.brand}</p>
                    <p class="item__desc-info">stock : ${this._product.stock}</p>
                    <p class="item__desc-info">category : ${this._product.category}</p>
                    <h5>Description :</h5>
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
