import AuthLayout from "./layout/AuthLayout";
import { LoginForm } from "./pages/auth/LoginForm";
import { createBrowserRouter } from "react-router-dom";
import { RegisterForm } from "./pages/auth/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
