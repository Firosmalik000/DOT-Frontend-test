import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarMe from './components/layout/NavbarMe';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  // {
  //   path: '/Register',
  //   element: <RegisterPage />,
  // },
  // {
  //   path: '/Products',
  //   element: <ProductsPage />,
  // },
  // {
  //   path: '/Profile',
  //   element: <ProfilePage />,
  // },
  // {
  //   path: '/Product/:id',
  //   element: <DetailProductPage />,
  // },
]);
function App() {
  return (
    <div>
      <NavbarMe />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
