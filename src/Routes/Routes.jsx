import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/AboutUs/About";
import LogIn from "../Layouts/LogIn/LogIn";
import SignIn from "../Layouts/LogIn/SignIn";
import Details from "../Layouts/Home/details/Details";
import Service from "../Layouts/services/Service";



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
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader:()=>fetch('/file.json')
        }
      ]
    },
  ]);

  export default routes;