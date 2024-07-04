import axios, { AxiosResponse } from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

export const getProducts = (callback: (products: Product[]) => void) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res: AxiosResponse<Product[]>) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

export const getDetailProduct = (_id: string, callback: (product: ProductDetail) => void) => {
  axios
    .get(`http://localhost:5000/api/product/${_id}`)
    .then((res: AxiosResponse<ProductDetail>) => {
      console.log('Response dari server:', res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log('Kesalahan dari server:', err);
    });
};
