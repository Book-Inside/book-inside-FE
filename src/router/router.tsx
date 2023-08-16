import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import NotFound from "../pages/not_found";
import Splash from "../pages/splash";
import Info from "../pages/info";
import Main from "../pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Splash /> },
      { path: "info", element: <Info /> },
      { path: "main", element: <Main /> },
    ],
  },
]);

export default router;
