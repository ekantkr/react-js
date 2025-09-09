import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Abc from "./ekant.jsx";

function MyAPP() {
  const username = "ekant kukar";
  return (
    <div>
      <h1> my APP{username} </h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyAPP />
  </StrictMode>
);
