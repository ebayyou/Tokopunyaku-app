import './ProductItem';

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set products(products) {
    this._products = products;
    this.render();
  }

  connectedCallback() {
    fetch('https://dummyjson.com/products?limit=15&select=title,price,thumbnail,description,discountPercentage')
      .then((response) => response.json())
      .then((result) => {
        // this.length = result.products.length
        this.products = result.products;
      });
  }

  render() {
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
  }
}

customElements.define('product-list', ProductList);
