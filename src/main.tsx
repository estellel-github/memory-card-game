import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GameProvider } from "./context/GameContext.tsx";
import "./styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);
