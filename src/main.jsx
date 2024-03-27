import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";

import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
