import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/AboutUs/About";
import LogIn from "../Layouts/LogIn/LogIn";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element:  <Home></Home>,
        },
        {
          path: '/aboutus',
          element: <About></About>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        }
      ]
    },
  ]);

  export default routes;