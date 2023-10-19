import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../ui/Error";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/profile",
    //     element: <h1>Admin Dashboard</h1>,
    //   },
    // ],
  },
]);

export default router;
