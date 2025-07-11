import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const LoginHandler = ({ children }: Props) => {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const storeAndRedirect = async () => {
      if (!isLoading && isAuthenticated && user) {
        const token = await getAccessTokenSilently();
        localStorage.setItem("accessToken", token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: user.name,
            email: user.email,
            role: "USER",
          })
        );
        navigate("/profile", { replace: true });
      }
    };
    storeAndRedirect();
  }, [isAuthenticated, isLoading, user, getAccessTokenSilently, navigate]);

  return <>{children}</>;
};

export default LoginHandler;
