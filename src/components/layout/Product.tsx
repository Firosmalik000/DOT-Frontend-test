import { useEffect, useState } from 'react';
import CardProduct from '../fragment/CardProduct';
import { getProducts } from '../../services/product.service';

interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number | string;
}

const Product = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  console.log({ products });
  return (
    <div className="container mx-auto flex justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {products.length > 0 &&
          products.map((product) => (
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
  );
};

export default Product;
