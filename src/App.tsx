import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarMe from './components/layout/NavbarMe';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { DetailProductPage } from './pages/DetailProduct';
import Footer from './components/layout/Footer';
import SidebarProvider from './context/SidebarContext'; // Pastikan jalur ini benar
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  {
    path: '/Product/:id',
    element: <DetailProductPage />,
  },
  {
    path: '*', // Penanganan 404
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <SidebarProvider>
      <div>
        <NavbarMe />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;
