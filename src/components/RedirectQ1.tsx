import * as React from "react";
import { useNavigate } from "react-router-dom";

export const RedirectQ1: React.FC = () => {
  const nav = useNavigate();
  React.useEffect(() => {
    nav("/questions/1");
  }, []);
  return null;
};
