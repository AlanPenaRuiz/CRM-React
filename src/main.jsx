import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts";
import NewClient, { action as newClientAction } from "./pages/newClient";
import Index /*, {loader as clientLoader} */ from "./pages/index";
import ErrorPage from "./components/errorPage";
import EditClient, {
  action as editClientAction,
  loader as editClientLoader,
} from "./pages/editClient";
import {action as removeClientAction} from './components/client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        errorElement: <ErrorPage />,
        //loader: clientLoader,
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:clientId/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientId/remove',
        action: removeClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
