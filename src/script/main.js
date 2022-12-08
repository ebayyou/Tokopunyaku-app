import './components/ProductList';
import './components/ProductHead';
import './components/detailComponent/Categories';
import './components/SearchElement';
import DataSource from './data/DataSource';

const main = () => {
  const SearchElement = document.querySelector('search-element');
  const Categories = document.querySelector('search-category');
  const ProductList = document.querySelector('product-list');
  const ProductHead = document.querySelector('product-head');

  Categories.categoryElement.forEach((category) => {
    category.addEventListener('click', async (e) => {
      ProductList.renderLoading();
      try {
        const dataProducts = await DataSource.categoryProduct(e.path[0].innerHTML);
        ProductList.products = dataProducts;
        ProductHead.lengthProduct = dataProducts.length;
        // Categories.searchKeyword = category.innerHTML

        if (dataProducts.length === 0) ProductList.productNotFound(category.innerHTML);
      } catch (error) {
        console.error(error);
        ProductList.productNotFound('Internet Error');
      }
    });
  });

  const onButtonSearchClick = async () => {
    ProductList.renderLoading();
    try {
      const resultProducts = await DataSource.searchProduct(SearchElement.value);
      ProductList.products = resultProducts;
      ProductHead.lengthProduct = resultProducts.length;
      // Categories.searchKeyword = SearchElement.value

      if (resultProducts.length === 0) ProductList.productNotFound(SearchElement.value);
    } catch (error) {
      console.error(error);
      ProductList.productNotFound('Internet Error');
    }
  };
  SearchElement.event = onButtonSearchClick;
};

export default main;
