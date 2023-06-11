import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "../components/NavBar";
import { Cart } from "../pages/Cart";
import { NewOrder } from "../pages/NewOrder";
import { OrderStatus } from "../pages/OrderStatus";
import { Products } from "../pages/Products";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/NewOrder",
        element: <NewOrder />,
      },
      {
        path: "/Orde",
        element: <OrderStatus />,
      },
      {
        path: "/produtos",
        element: <Products />,
      },
    ],
  },
]);

export default function PrivateRoute() {
  return <RouterProvider router={router} />;
}
