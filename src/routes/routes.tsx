import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home.page";
import { Login } from "../pages/login.page";
import { Perfil } from "../pages/perfil.page";
import { Tweets } from "../pages/tweets.page";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/perfil",
      element: <Perfil />,
    },
    {
        path: "/tweets",
        element: <Tweets />,
      },
  ]);