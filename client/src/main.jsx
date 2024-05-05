import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';
import ContextApi from './provider/ContextApi';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
      <Toaster />
    </ContextApi>
  </React.StrictMode>,
)
