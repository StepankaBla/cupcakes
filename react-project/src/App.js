import "./App.css";
import Cupcake from "./components/Cupcake/Cupcake";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";
import Strawberry from "./components/Strawberry/Strawberry";
import Chocolate from "./components/Chocolate/Chocolate";
import Vanilla from "./components/Vanilla/Vanilla";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Cupcake />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: "/strawberry",
        element: <Strawberry />,
      },
      {
        path: "/chocolate",
        element: <Chocolate />,
      },
      {
        path: "/vanilla",
        element: <Vanilla />,
      },



    ],
  },
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
