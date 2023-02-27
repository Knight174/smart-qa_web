import { createBrowserRouter, Outlet } from "react-router-dom";
import { RedirectQ1 } from "../components/RedirectQ1";
import { MainLayout } from "../layouts/MainLayout";
import { QuestionLayout } from "../layouts/QuestionLayout";
import { Question1 } from "../pages/Question1";
import { Question2 } from "../pages/Question2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RedirectQ1 />,
    children: [
      {
        path: "questions",
        element: <QuestionLayout />,
        children: [
          { path: "1", element: <Question1 /> },
          { path: "2", element: <Question2 /> },
        ],
      },
    ],
  },
  {
    path: "/a",
    element: <div>A</div>,
  },
]);
