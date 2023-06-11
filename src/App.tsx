

import { useEffect, useState } from "react";
import { Login } from "./pages/Login";
import PrivateRoute from "./routes/private"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewOrder } from "./pages/NewOrder";

function App() {
  const [user, setUser] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/private",
      element: <PrivateRoute />,
    },
  ]);

  useEffect(() => {
    setUser(1);
  }, []);

  return (
    <RouterProvider router={router} >
      {/* {user === 1? <PrivateRoute /> : <Login />}  */}
      <Login />
    </RouterProvider>
  )
}

export default App
