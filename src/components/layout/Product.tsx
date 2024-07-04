import { useEffect, useState } from 'react';
import CardProduct from '../fragment/CardProduct';
import { getProducts, ProductProps } from '../../services/product.service';
import CategorySection from '../fragment/CategorySection';

const Product = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    getProducts((data: ProductProps[]) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="relative">
      <CategorySection onCategoryChange={handleCategoryChange} />
      <div className="container mx-auto flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 my-4">
          {filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <div key={product.id} className="col-span-1">
                <CardProduct>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}></CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} item={product} />
                </CardProduct>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
