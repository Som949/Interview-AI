import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";
import ProtectedRoute from "./utils/ProtectedRoutes.jsx";
import Home from "./features/interview/pages/Home.jsx";
import InterviewLayout from "./features/interview/components/InterviewLayout.jsx";
import Reports from "./features/interview/pages/Reports.jsx";
import ReportDetails from "./features/interview/pages/ReportDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <InterviewLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "reports/:interviewId",
        element: <ReportDetails />,
      },
    ],
  }
]);

export default router;
