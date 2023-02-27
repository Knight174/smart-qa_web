import { createBrowserRouter } from "react-router-dom";
import { RedirectQ1 } from "../components/RedirectQ1";
import { MainLayout } from "../layouts/MainLayout";
import { questionRoutes } from "./questionRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RedirectQ1 />,
    children: [questionRoutes],
  },
  {
    path: "/a",
    element: <div>A</div>,
  },
]);
