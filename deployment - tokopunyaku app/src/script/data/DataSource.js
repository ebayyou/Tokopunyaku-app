class DataSource {
  static async categoryProduct(category) {
    try {
      const request = await fetch(`https://dummyjson.com/products/category/${category}`);
      const response = await request.json();

      return response.products;
    } catch (error) {
      console.log(error);
    }
  }
}

export default DataSource;
