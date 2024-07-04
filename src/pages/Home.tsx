import CartDrawer from '../components/layout/CartDrawer';
import Hero from '../components/layout/Hero';
import Product from '../components/layout/Product';
import { useLogin } from '../hooks/useLogin';

const Home = () => {
  useLogin();

  return (
    <div>
      <Hero />
      <Product />
      <CartDrawer />
    </div>
  );
};

export default Home;
