import { Footer, Navbar } from "../component";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
