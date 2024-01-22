import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login.page";
import { Perfil } from "./perfil.page";
import { Tweets } from "./tweets.page";


export const router = createBrowserRouter([
    {
      path: "/",
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