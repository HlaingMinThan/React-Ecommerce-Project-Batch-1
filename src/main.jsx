import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/index.jsx';
import "./index.css"
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
