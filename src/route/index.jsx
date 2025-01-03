import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Checkout from '../pages/Checkout.jsx';
import AdminOrderList from '../pages/admin/AdminOrderList.jsx';
import AdminProductList from '../pages/admin/AdminProductList.jsx';
import AdminProductForm from '../pages/admin/AdminProductForm.jsx';
import Layout from '../components/Layout.jsx';
import AdminLayout from '../components/AdminLayout.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

import {
  createBrowserRouter,
} from "react-router-dom";
import GuestUserRoute from '../components/GuestUser.jsx';
import names from './names.js';

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
      element: <GuestUserRoute> <Login /> </GuestUserRoute>,
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
      path: "/checkout",
      element: <ProtectedRoute><Checkout /></ProtectedRoute>,
    },
    {
      path: "/order-history",
      element: <ProtectedRoute><Checkout /></ProtectedRoute>,
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
      path: "/admin/orders",
      element: <AdminOrderList />,
    },
    {
      path: names.PRODUCT_CREATE,
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