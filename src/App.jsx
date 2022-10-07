import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
        },
        {
          path: "/orders",
          element: <Orders></Orders>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/profile",
          element: <Profile></Profile>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;