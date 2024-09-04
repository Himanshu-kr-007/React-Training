import React, { lazy, Suspense, useEffect, useState } from "react"; // Default Import
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Owner from "./components/Owner";
import OwnerClass from "./components/Owner";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

// App Chunking / Code Splitting / Dynamic Bundling / Lazy Loading / On Demand Loading : We have to make application in smaller codes or do dynamic bundling to break down app into smaller chunks
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication Code
  useEffect(() => {
    // Make An API CALL & Send Username & Password
    const data = {
      name: "Himanshu Kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
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
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
