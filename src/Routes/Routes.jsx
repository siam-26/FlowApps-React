import { createBrowserRouter } from "react-router";
import Home from "../Pages/Homepage/Home/Home";
import Main from "../Layout/Main";
import All_Apps from "../Pages/All_Apps_Page/All_Apps";
import App_Details from "../Pages/All_Apps_Page/App_Details";
import ErrorPage from "../Pages/Error/ErrorPage";


const appDetailsLoader = async ({ params }) => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data.find((item) => item.id === Number(params.id)) || null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all_apps",
        element: <All_Apps />,
      },
      {
        path: "/all_apps/:id",
        element: <App_Details />,
        loader: appDetailsLoader,
      },
    ],
  },
]);

export default router;
