import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[72px] sm:pt-4">
        <Outlet />
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default AuthLayout;
