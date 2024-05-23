import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltouristsspot",
        element: <AllTouristsSpot />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
