import axios, { AxiosResponse } from 'axios';
export interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  qty?: number;
}

export const getProducts = (callback: (products: ProductProps[]) => void) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res: AxiosResponse<ProductProps[]>) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getDetailProduct = (id: string, callback: (product: ProductDetail) => void) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`, { timeout: 5000 })
    .then((res: AxiosResponse<ProductDetail>) => {
      console.log('Response dari server:', res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log('Kesalahan dari server:', err);
    });
};
