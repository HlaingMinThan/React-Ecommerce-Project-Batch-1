import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Register from '../pages/Register.jsx';
import AdminProductList from '../pages/admin/AdminProductList.jsx';
import AdminProductCreate from '../pages/admin/AdminProductCreate.jsx';
import Layout from '../components/Layout.jsx';
import AdminLayout from '../components/AdminLayout.jsx';

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
      path: "/register",
      element: <Register />,
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
},
{
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "",
      element: <AdminProductList />,
    },
    {
      path: "/admin/products/create",
      element: <AdminProductCreate />,
    },
  ]
}
]);

export default router;