import { createHashRouter } from 'react-router-dom';
import FrontendLayout from './layout/FrontendLayout';
import Home from './pages/front/Home/Home';
import Products from './pages/front/Products/Products';
import SingleProduct from './pages/front/singleProduct/SingleProduct';
import Cart from './pages/front/Cart/Cart';
import Checkout from './pages/front/Checkout/Checkout';
import Login from './pages/Login/Login';
import NotFound from './pages/front/NotFound';

export const router = createHashRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
