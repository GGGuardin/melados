import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FlavorContextProvider } from "./FlavorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlavorContextProvider>
      <App />
    </FlavorContextProvider>
  </StrictMode>
);
