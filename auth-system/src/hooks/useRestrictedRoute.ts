import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRestrictedRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (token) {
      navigate("/profile", { replace: true });
    }
  });
}

export default useRestrictedRoute;
