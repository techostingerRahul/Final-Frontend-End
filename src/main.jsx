// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Auth,
  Landing,
  Registration,
  PageNotFound,
  Home,
  Login,
} from "./pages";
import { BaseLayout, AuthLayout } from "./layouts";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<AuthLayout />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="landing" element={<Landing />} />
        <Route path="registration" element={<Registration />} />
        <Route path="auth" element={<Auth />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
