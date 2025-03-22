import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import { router } from './routes/Routes.jsx';
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import  { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthProvider>
  </React.StrictMode>
);
