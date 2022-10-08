import './components/ProductList';
import './components/detailComponent/Categories';
import './components/SearchElement';
import DataSource from './data/DataSource';

const main = () => {
  const SearchElement = document.querySelector('search-element');
  const Categories = document.querySelector('search-category');
  const ProductList = document.querySelector('product-list');
  
  Categories.categoryElement.forEach((category) => {
    category.addEventListener('click', async (e) => {
      const dataProducts = await DataSource.categoryProduct(e.path[0].innerHTML);
      ProductList.products = dataProducts;
    });
  });

  const onButtonSearchClick = async () => {
    try {
      const resultProducts = await DataSource.searchProduct(SearchElement.value)  
      ProductList.products = resultProducts
    } catch(error) {
      console.log(error)
    }
  }
  SearchElement.event = onButtonSearchClick
};

export default main;