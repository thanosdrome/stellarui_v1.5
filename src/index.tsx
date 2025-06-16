import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeDesktop } from "./screens/HomeDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeDesktop />
  </StrictMode>,
);
