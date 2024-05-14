import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Pages/Root/Root";
import ErrorPage from "./Pages/Errorpage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import AllJobs from "./Pages/AllJobs/AllJobs";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import AddJob from "./Pages/AddJob/AddJob";
import JobDetails from "./Pages/JobDetails/JobDetails";
import MyJob from "./Pages/MyJob/MyJob";
import UpdateJob from "./Pages/UpdateJob/UpdateJob";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedjobs",
        element: <PrivetRoute><AppliedJobs></AppliedJobs></PrivetRoute>,
      },
      {
        path: "/addjob",
        element: <PrivetRoute><AddJob></AddJob></PrivetRoute>,
      },
      {
        path: "/jobdetails/:id",
        element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: "myjobs",
        element: <PrivetRoute><MyJob></MyJob></PrivetRoute>,
      },
      {
        path: "/updatejob/:id",
        element: <PrivetRoute><UpdateJob></UpdateJob></PrivetRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
