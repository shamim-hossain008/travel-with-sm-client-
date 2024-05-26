import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddTouristsSpot from "../pages/Add Tourists Spot/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyList from "../pages/MyList";
import Register from "../pages/Register";

import ViewDetails from "../components/ViewDetails";
import Profile from "../pages/Shared/Profile";
import UpdatePage from "../pages/UpdatePage";
import PrivetRoute from "./PrivetRoute";

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

      {
        path: "/addturestssport",
        element: (
          <PrivetRoute>
            <AddTouristsSpot />
          </PrivetRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivetRoute>
            <MyList />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },

      {
        path: "/viewDetails",
        element: (
          <PrivetRoute>
            <ViewDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/updatePage",
        element: (
          <PrivetRoute>
            <UpdatePage></UpdatePage>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
