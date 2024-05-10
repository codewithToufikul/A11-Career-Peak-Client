import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Pages/Root/Root';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
