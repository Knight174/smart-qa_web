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
        <h1>root</h1>
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h2>请选择 1，2，3</h2> }, // 默认路径，路径为 /
      { path: "1", element: <div>1</div> }, // 路径为 /1
      { path: "2", element: <div>2</div> }, // 路径为 /2
      { path: "3", element: <div>3</div> }, // 路径为 /3
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
