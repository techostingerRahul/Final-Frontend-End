import { AuthNavbar, AuthFooter } from "../features/authentication/components";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  console.log("Auth Layout Reached!");
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <AuthFooter />
    </>
  );
}
