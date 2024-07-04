import CartDrawer from '../components/layout/CartDrawer';
import Hero from '../components/layout/Hero';
import Product from '../components/layout/Product';

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <CartDrawer />
    </div>
  );
};

export default Home;
