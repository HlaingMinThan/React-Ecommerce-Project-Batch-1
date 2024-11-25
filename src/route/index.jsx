import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Layout from '../components/Layout.jsx';

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products/:id",
      element: <ProductDetail />,
    },
  ]
}]);

export default router;