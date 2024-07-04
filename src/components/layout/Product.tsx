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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  console.log({ products });
  return (
    <div className="container mx-auto flex justify-center">
      <div className="grid grid-cols-3 w-5/8  ">
        {products.length > 0 &&
          products.map((product: ProductProps) => (
            <div key={product.id} className="col-span-2 md:col-span-1">
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
