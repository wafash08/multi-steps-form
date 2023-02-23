import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SteplistProvider } from "./context/SteplistContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SteplistProvider>
      <App />
    </SteplistProvider>
  </React.StrictMode>
);
