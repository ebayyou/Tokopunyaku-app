import './components/detailComponent/Categories';
import DataSource from './data/DataSource';
import './components/ProductList';

const main = () => {
  const Categories = document.querySelector('search-category');
  const ProductList = document.querySelector('search-category');

  Categories.categoryElement.forEach((category) => {
    category.addEventListener('click', async (e) => {
      const dataProduct = await DataSource.categoryProduct(e.path[0].innerHTML);
      console.log(dataProduct);
      ProductList.products = dataProduct;
    });
  });
};

export default main;
