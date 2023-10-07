import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "@/shared/assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
