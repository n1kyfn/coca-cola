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
import ProtectedRoute from "./protectedRoute";

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
                path: routePaths.spaces,
                element:
                    <ProtectedRoute>
                        <SpacesPage />
                    </ProtectedRoute>,
            },
            {
                path: routePaths.myBookings,
                element:
                    <ProtectedRoute>
                        <MyBookingsPage />
                    </ProtectedRoute>,
            },
            {
                path: routePaths.manageBookings,
                element:
                    <ProtectedRoute>
                        <ManageBookingsPage />
                    </ProtectedRoute>,
            },
            {
                path: routePaths.admin,
                element:
                    <ProtectedRoute>
                        <AdminPage />
                    </ProtectedRoute>,
            },
            {
                path: routePaths.profile,
                element:
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>,

            },
            {
                path: routePaths.notFound,
                element: <NotFoundPage />,
            },
        ],
    },
]);
