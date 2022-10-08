import './ProductItem';
import './ProductHead';

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set products(products) {
    this._products = products;
    this.render();
  }

  set lengthProduct(length) {
    this._length = length;
  }

  connectedCallback() {
    const getProduct = async () => {
      const request = await fetch('https://dummyjson.com/products?limit=10');
      const response = await request.json();
      this.lengthProduct = response.products.length;
      this.products = response.products;
    };

    getProduct();
  }

  render() {
    this.shadowRoot.innerHTML = ``;
    this.shadowRoot.innerHTML = `
      <style>
        .product__list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 3rem;
          padding: 3em 2em;
          background-color: #e4dcea;
          border-top: 1px solid #717171;
        }
      <style>
    `;

    const productList = document.createElement('section');
    productList.classList.add('product__list');
    this.shadowRoot.appendChild(productList);

    this._products.map((product) => {
      const productItem = document.createElement('product-item');
      productItem.product = product;
      productList.appendChild(productItem);
    });

    const productHead = document.createElement('product-head');
    productHead.lengthProduct = this._length;
  }
}

customElements.define('product-list', ProductList);
