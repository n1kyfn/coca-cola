import { createBrowserRouter } from "react-router";
import { HomePage } from "pages/home-page";
import { LoginPage } from "pages/loign-page";
import { RegisterPage } from "pages/register-page";
import { SpacesPage } from "pages/spaces-page";
import { MyBookingsPage } from "pages/my-bookings-page";
import { ManageBookingsPage } from "pages/manage-bookings-page";
import { AdminPage } from "pages/admin-page";
import { ProfilePage } from "pages/profile-page";
import { NotFoundPage } from "pages/not-found-page";
import { routePaths } from "shared/config/routePaths";
import Layout from "app/layouts/layout";

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Layout />,
    children: [
      {
        path: routePaths.home,
        element: <HomePage />,
      },
      {
        path: routePaths.login,
        element: <LoginPage />,
      },
      {
        path: routePaths.register,
        element: <RegisterPage />,
      },
      {
        path: routePaths.sapces,
        element: <SpacesPage />,
      },
      {
        path: routePaths.myBookings,
        element: <MyBookingsPage />,
      },
      {
        path: routePaths.manageBookings,
        element: <ManageBookingsPage />,
      },
      {
        path: routePaths.admin,
        element: <AdminPage />,
      },
      {
        path: routePaths.profile,
        element: <ProfilePage />,
      },
      {
        path: routePaths.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
