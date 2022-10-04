class Category extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  async clickHandler(value) {
    const respons = await fetch(`https://dummyjson.com/products/category/${value}`);
    const result = await respons.json();

    console.log(result.products);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .search__category {
          margin: 80px;
          text-align: center;
        }

        .category__box {
          display: flex;
          flex-wrap: wrap;
          justify-content:center;
          align-items: center;
          gap: 1rem;
        }
        .category__result {
          font-size: 1rem;
          cursor: pointer;
          text-transform: capitalize;
        }
        .category__result:hover {
          color: #3770cd; 
        }
          
        @media (min-width: 768px) {
          .category__name {
            font-size: 2.4rem
          }
          .category__result {
            font-size: 1.15rem;
          }
        }

        @media (min-width: 1200px) {
          .category__box {
            gap: 1.7rem;
          }

          .category__result {
            font-size: 1.25rem;
          }
        }
      </style>

      <div class="search__category">
        <h1 class="category__name">Laptop Gaming</h1>
        <div class="category__box">
          <span class="category__result">smartphones</span>
          <span class="category__result">laptops</span>
          <span class="category__result">skincare</span>
          <span class="category__result">womens-shoes</span>
          <span class="category__result">mens-shirts</span>
        </div>
      </div>
    `;

    const categories = this.shadowRoot.querySelectorAll('.category__result');
    categories.forEach((category) => {
      category.addEventListener('click', (e) => {
        this.clickHandler(e.path[0].innerHTML);
      });
    });
  }
}

customElements.define('search-category', Category);
