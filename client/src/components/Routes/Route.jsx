import { createBrowserRouter } from "react-router-dom";

import AdminDashboardLayout from "../../Layout/AdminDashboardLayout";
import Main from "../../Layout/Main";
import DailyMarketExpensesList from "../../Pages/Accounts/DailyMarketExpensesList/DailyMarketExpensesList";
import RecordDailyMarketExpenses from "../../Pages/Accounts/RecordDailyMarketExpenses/RecordDailyMarketExpenses";
import AdminHomePage from "../../Pages/AdminHomePage/AdminHomePage";
import MealRateSet from "../../Pages/ManageMeal/MealRateSet/MealRateSet";
import MealRegister from "../../Pages/ManageMeal/MealRegister/MealRegister";
import MealsList from "../../Pages/ManageMeal/MealsList/MealsList";
import AddNewUser from "../../Pages/ManageUser/AddNewUser/AddNewUser";
import UsersList from "../../Pages/ManageUser/Users List/UsersList";
import AdvanceMealBooking from "../../Pages/MealBooking/AdvanceMealBookings/AdvanceMealBooking";
import BookedMealsList from "../../Pages/MealBooking/BookedMealsList/BookedMealsList";
import AddNewPayment from "../../Pages/Payments/AddNewPayment/AddNewPayment";
import PaymentsHistory from "../../Pages/Payments/PaymentHistory/PaymentsHistory";
import Profile from "../../Pages/Profile/Profile";
import Settings from "../../Pages/Settings/Settings";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../ui/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  /* Admin Dashboard Routes */
  {
    path: "/dashboard",
    element: <AdminDashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <AdminHomePage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-new-user",
        element: <AddNewUser />,
      },
      {
        path: "users-list",
        element: <UsersList />,
      },
      {
        path: "meal-register",
        element: <MealRegister />,
      },
      {
        path: "meal-list",
        element: <MealsList />,
      },
      {
        path: "meal-rate-set",
        element: <MealRateSet />,
      },
      {
        path: "advance-meal-booking",
        element: <AdvanceMealBooking />,
      },
      {
        path: "booked-meal-list",
        element: <BookedMealsList />,
      },
      {
        path: "add-new-payment",
        element: <AddNewPayment />,
      },
      {
        path: "payment-history",
        element: <PaymentsHistory />,
      },
      {
        path: "record-daily-market-expenses",
        element: <RecordDailyMarketExpenses />,
      },
      {
        path: "daily-market-expenses-list",
        element: <DailyMarketExpensesList />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
