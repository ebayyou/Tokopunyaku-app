import './detailComponent/ShowProduct'

class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .product__item {
          width: 400px;
        }
        .product__info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.3em;
          margin-bottom: 0.8em;
        }
        .product__text {
          width: 75%;
        }
        .item__img {
          width: 100%;
          height: 250px;
          max-width: 100%;
          object-fit: cover;
          border-radius: 1em;
        }
        .item__title {
          height: 25px;
          overflow: hidden;
          margin: 0.4em 0 0;
          font-size: 1.2em;
        }
        .item__desc {
          height: 20px;
          overflow: hidden;
          color: #717171;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: 'Satoshi', sans-serif;
        }
        .item__price {
          font-size: 1.1rem;
          font-weight: 500;
        }
        .item__percentage {
          color: #717171;
          font-size: 0.6rem;
          font-weight: 500;
          font-family: 'Satoshi', sans-serif;
          text-decoration: line-through;
        }

        @media (max-width: 1050px) {
          .product__item {
            width: 350px;
          }  
        }

        @media (max-width: 550px) {
          .product__item {
            width: 100%;
          }  
        }
      </style>
    
      <div class="product__item">
        <img src="${this._product.thumbnail}" alt="product img item" class="item__img" />
        <div class="product__info">
          <div class="product__text">
            <h4 class="item__title">${this._product.title}</h4>
            <p class="item__desc">${this._product.description}</p>
          </div>
          <div class="product__price">
            <span class="item__price">${this._product.price}&#36;</span>
            <span class="item__percentage">${this._product.discountPercentage}&#37;</span>
          </div>
        </div>
      </div>
    `;

    const showProduct = document.createElement('show-product');
    showProduct.product = this._product;
    this.shadowRoot.appendChild(showProduct);
  }
}

customElements.define('product-item', ProductItem);
