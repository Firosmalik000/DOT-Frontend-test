import CardProduct from './components/fragment/CardProduct';
import NavbarMe from './components/layout/NavbarMe';

function App() {
  return (
    <div>
      <NavbarMe />
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body name={'arararar'}>'ararararar</CardProduct.Body>
        <CardProduct.Footer price={500} />
      </CardProduct>
    </div>
  );
}

export default App;
