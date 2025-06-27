import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";
import AuthProvider from "./Contexts/Firebase/AuthProvider.jsx";
import DashboardDataProvider from "./Contexts/Firebase/Dashboard/DashboardDataProvider.jsx";
import ThemeProvider from "./Contexts/Theme/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <DashboardDataProvider>
          <RouterProvider router={router} />
        </DashboardDataProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
