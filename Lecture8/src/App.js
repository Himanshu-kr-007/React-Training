import React from "react"; // Default Import
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Owner from "./components/Owner"
import OwnerClass from "./components/Owner"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/owner",
        element: <Owner />,
      },
      {
        path: "/ownerclass",
        element: <OwnerClass />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
