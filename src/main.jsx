import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/index.jsx';
import "./index.css"
import axios from 'axios';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { CartContextProvider } from './contexts/CartContext.jsx';
axios.defaults.baseURL = 'http://localhost:8000';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </AuthContextProvider>,
)
