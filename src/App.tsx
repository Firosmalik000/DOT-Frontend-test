import CardProduct from './components/fragment/CardProduct';
import CartDrawer from './components/layout/CartDrawer';
import Hero from './components/layout/Hero';
import NavbarMe from './components/layout/NavbarMe';

function App() {
  return (
    <div>
      <NavbarMe />
      <Hero />
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body name={'arararar'}>'ararararar</CardProduct.Body>
        <CardProduct.Footer price={500} />
      </CardProduct>
      <CartDrawer />
    </div>
  );
}

export default App;
