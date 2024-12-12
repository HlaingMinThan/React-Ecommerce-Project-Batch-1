import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import AdminProductList from '../pages/admin/AdminProductList.jsx';
import AdminProductForm from '../pages/admin/AdminProductForm.jsx';
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
      path: "/login",
      element: <Login />,
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
      element: <AdminProductForm />,
    },
    {
      path: "/admin/products/:id/edit",
      element: <AdminProductForm />,
    },
  ]
}
]);

export default router;