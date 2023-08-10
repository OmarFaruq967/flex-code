import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import OurPartners from "../Home/OurPartners/OurPartners";
import UserCount from "../Home/UserCount/UserCount";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ],
  },
]);

export default router;
