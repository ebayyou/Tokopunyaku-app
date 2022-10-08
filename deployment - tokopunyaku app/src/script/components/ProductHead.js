class ProductHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set result(result) {
    this._result = result;
    this.render();
  }

  set lengthProduct(length) {
    this._length = length;
  }

  connectedCallback() {
    const getQoute = async () => {
      const request = await fetch('https://dummyjson.com/quotes/random');
      const response = await request.json();
      this.result = response;
    };

    getQoute();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      .product__head {
        display: flex;
        justify-content: space-around;
        padding: 1em;
        background-color: #e4dcea;
      }

      .product__group {
        display: flex;
        align-items: center;
        width: 500px;
      }

      .product__heading {
        font-size: 1.8rem;
        font-style: italic;
      }
      .product__span {
        color: #717171;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Satoshi', sans-serif;
      }

      .product__qoute {
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Satoshi', sans-serif;
      }

      .gap-1 {
        gap: 0.6rem;
      }
      .gap-2 {
        gap: 1.5rem;
      }

      @media (max-width: 1100px) {
        .product__head {
          flex-direction: column;
          justify-content: center;
        }

        .product__group {
          width: 100%;
          justify-content: space-between;
        }  
      }

      @media (max-width: 550px) {
        .product__group {
          flex-direction: column;
        }  

        .product__heading {
          margin: 0;
        }
        .product__head, .product__qoute, .product__group span{
          text-align: center;
        }
      }
    </style>
  
    <div class="product__head">
      <div class="product__group gap-1">
        <h3 class="product__heading">Product Item on Search</h3>
        <p class="product__span">(${this._length} Results)</p>
      </div>
      <div class="product__group gap-2">
        <h3 class="product__qoute">${this._result.quote}</h3>
        <span>${this._result.author}</span>
      </div>
    </div>
    `;
  }
}

customElements.define('product-head', ProductHead);