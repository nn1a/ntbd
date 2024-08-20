import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export const Routes: React.FC = () => {
    return <RouterProvider router={router} />
  }