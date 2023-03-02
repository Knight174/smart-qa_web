import { QuestionLayout } from "../layouts/QuestionLayout";
import { Question1 } from "../pages/Question1";
import { Question2 } from "../pages/Question2";

export const questionRoutes = {
  path: "questions",
  element: <QuestionLayout />,
  children: [
    { index: true, element: <h1>Welcome to Question Module</h1> },
    { path: "1", element: <Question1 /> },
    { path: "2", element: <Question2 /> },
  ],
};
