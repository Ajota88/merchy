import React from "react";
import { Navbar, Footer } from "./components";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Loading,
  Products,
  SingleProduct,
} from "./pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
