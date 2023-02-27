import { createBrowserRouter, Outlet } from "react-router-dom";
import { RedirectQ1 } from "../components/RedirectQ1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    errorElement: <RedirectQ1 />,
    children: [
      { index: true, element: <h2>null</h2> }, // 默认路径，路径为 /
      {
        path: "questions",
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          { index: true, element: <h2>null</h2> },
          { path: "1", element: <div>question 1</div> },
          { path: "2", element: <div>question 2</div> },
        ],
      },
    ],
  },
  {
    path: "/a",
    element: <div>A</div>,
  },
]);
