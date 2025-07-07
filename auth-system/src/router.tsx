import AuthLayout from "./layout/AuthLayout";
import { LoginForm } from "./pages/auth/LoginForm";
import { createBrowserRouter } from "react-router-dom";
import { RegisterForm } from "./pages/auth/RegisterForm";
import HeroSection from "./pages/home/HeroSection";
import { UserProfile } from "./pages/profile/UserProfile";
import { ProtectedRoute } from "./components/proute/ProtectedRoute";
import NotFound from "./components/notfound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UserProfile />,
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
