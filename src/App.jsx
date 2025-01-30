import Shop from "./pages/Shop/Shop";
import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Third from "./pages/Third/Third";
import Login from "./pages/Login/Login";
import { API } from "./util/config";

function App() {
  const getFlowers = async () => {
    const data = API.getFlower();
    return data.data;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/shopcard",
      element: <Third />,
    },
    {
      path: "/shop/check",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
