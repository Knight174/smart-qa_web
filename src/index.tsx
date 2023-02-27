import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <h1>问题</h1>
        <h2>Please select your answer in 60 seconds.</h2> */}
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
