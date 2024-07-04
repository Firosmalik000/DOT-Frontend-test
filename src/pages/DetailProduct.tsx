import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import { addToCart } from '../slice/CartSlice';
import { useDispatch } from 'react-redux';

interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const DetailProductPage = () => {
  const [product, setProduct] = useState<Product>({});
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const handleAddToCart = (items: any) => {
    dispatch(addToCart(items));
  };
  useLogin();
  useEffect(() => {
    if (id) {
      getDetailProduct(id, (data) => {
        setProduct(data);
      });
    }
  }, [id]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-6xl min-h-[500px] gap-5">
          <div className="flex-none w-1/3 relative">
            <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-contain" loading="lazy" />
          </div>
          <form className="flex-auto px-6 py-6 flex flex-col w-full justify-center ">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">{product.title}</h1>
              <div className="text-lg font-semibold text-slate-500">${product.price}</div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Review {product.rating?.rate}/5 ({product.rating?.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">{product.description}</div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-blue-600 transition duration-300" type="submit">
                  Buy now
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-blue-600 transition duration-300 hover:text-white" type="button" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">Free shipping on all continental US orders.</p>
          </form>
        </div>
      )}
    </div>
  );
};
