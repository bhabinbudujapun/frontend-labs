import "./index.css";
import router from "./router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENTID}
    authorizationParams={{
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    }}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Auth0Provider>
);
