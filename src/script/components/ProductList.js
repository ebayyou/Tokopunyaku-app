import './ProductItem';
import diamond from '../../image/diamond-heart.png';

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
    this.renderLoading();
    const getProduct = async () => {
      try {
        const request = await fetch('https://dummyjson.com/products?limit=10');
        const response = await request.json();
        // this.lengthProduct = response.products.length;
        this.products = response.products;
      } catch (error) {
        console.log('error');
        this.productNotFound('on this server');
      }
    };

    getProduct();
  }

  renderLoading() {
    this.shadowRoot.innerHTML = `
      <style>
        .product__list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 6em 2em 3em;
        }

        .Load {
          font-size: 1.6rem;
          color: rgb(35 35 35);
        }
        .Load span:nth-child(1) {
          color: #af7397;  
        }
        .Load span:nth-child(2) {
          color: #7badfd;
        }
        .Load span:nth-child(3) {
          color: #6c65bf;
        }


        @media (min-width: 780px) {
          .Load {
            font-size: 2.2rem;
          }
        }

        /* loader animation, source : https://codepen.io/object505/pen/LLOOOq */
        .cssLoader17 {
          position: relative;
          width: 2.5em;
          height: 2.5em;
          transform: rotate(165deg);
        }
        .cssLoader17:before, .cssLoader17:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 0.5em;
          height: 0.5em;
          border-radius: 0.25em;
          transform: translate(-50%, -50%);
        }
        .cssLoader17:before {
          animation: before 2s infinite;
        }
        .cssLoader17:after {
          animation: after 2s infinite;
        }
        
        @keyframes before {
        0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
        }
        35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
        }
        70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
        }
        100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
        }
        }
        @keyframes after {
        0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
        }
        35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
        }
        70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
        }
        100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
        }
        }
        .loader {
        position: absolute;
        top: calc(50% - 1.25em);
        left: calc(50% - 1.25em);
        }
      </style>

      <div class="product__list">
        <div id="cssLoader17" class="main-wrap main-wrap--white">
          <div class="cssLoader17"></div>
        </div>
        <h1 class="Load">Loading<span>.</span><span>.</span><span>.</span></h1>
      </div>
    `;
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
          <p class="product__desc">Im sorry, the product <span class="product__keyword">${keyword}</span> you're looking for not found.</p>
        <div>
      <div>
    `;
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
