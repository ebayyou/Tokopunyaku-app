import './ProductItem';
import diamond from '../../image/diamond-heart.png'

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set products(products) {
    this._products = products;
    this.render();
  }

  // get productLength() {
  //   return this.lengthProduct;
  // }

  connectedCallback() {
    const getProduct = async () => {
      try {
        const request = await fetch('https://dummyjson.com/products?limit=10');
        const response = await request.json();
        // this.lengthProduct = response.products.length;
        this.products = response.products;
      } catch(error) {
        this.productNotFound('on this server')
      }
    };

    getProduct();
  }

  productNotFound(keyword) {
    this.shadowRoot.innerHTML = `
      <style>
        .product__list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 3rem;
          padding: 6em 2em 3em;
          background-color: #e4dcea;
          border-top: 1px solid #717171;
        }

        .product__notFound {
          background-color: white;
          border: solid 4px #1d1b43;
          box-shadow: 
            15px 15px 0 -4px white,
            15px 15px #1d1b43;
          padding: 0.8em 2em;
        }

        .product__group {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product__img {
          width: 45px;
        }

        .product__desc {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          width: 350px;
        }

        .product__keyword {
          background-color: #3770cd;
          color: white;
          padding: 0.2em;
          border-radius: 0.2em;
        }

        @media (max-width: 550px) {
          .product__notFound {
            background-color: white;
            border: solid 4px #1d1b43;
            box-shadow: 
              10px 10px 0 -4px white,
              10px 10px #1d1b43;
            padding: 0.6em 1em;
          }
 
          .product__head {
            font-size: 1.8rem;
          }
          .product__desc {
            font-size: 1rem;
            width: 100%;
          }
      <style>
    `;
      
    this.shadowRoot.innerHTML += `
      <div class="product__list">
        <div class="product__notFound">
          <div class="product__group">
            <h1 class="product__head">404 : Ooops Error!</h1>
            <img class="product__img" src="${diamond}" alt="diamond-heart">
          </div>
          <p class="product__desc">Im sorry, the product <span class="product__keyword">${keyword}</span> you're looking for not found</p>
        <div>
      <div>
    `
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
  }
}

customElements.define('product-list', ProductList);
