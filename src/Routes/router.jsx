import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import ServiceDeatils from "../Pages/ServiceDetails/ServiceDeatils";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDeatils />,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-nine-red.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-nine-red.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
