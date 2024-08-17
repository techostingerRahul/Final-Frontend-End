function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/vip", element: <Vip /> },
    { path: "/career", element: <Career /> },
    { path: "/*", element: <Error404 /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },

    // {
    //   path: "/dashboard",
    //   element: <ProtectedRoute element={<Dashboard />} />,
    //   children: [
    //     {
    //       path: "edit-profile",
    //       element: <ProtectedRoute element={<EditProfile />} />,
    //     },
    //     {
    //       path: "signuporlogin",
    //       element: <ProtectedRoute element={<Signuporlogin />} />,
    //     },
    //   ],
    // },
    {
      path: "/authform",
      element: (
        <ProtectedRoute>
          <RegistrationStep />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <UDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/edit-profile",
      element: (
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <div className="bg-slate-300">Hello World</div>
    </>
  );
}

export default App;
