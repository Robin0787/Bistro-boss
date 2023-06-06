import { createBrowserRouter } from "react-router-dom";
import DashboardRoute from "../Layouts/DashboardRoute/DashboardRoute";
import Main from "../Layouts/Main/Main";
import AddItems from "../Pages/Admin/AddItems/AddItems";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import AllUsers from "../Pages/Admin/AllUsers/AllUsers";
import ManageBookings from "../Pages/Admin/ManageBookings/ManageBookings";
import ManageItems from "../Pages/Admin/ManageItems/ManageItems";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Our_Menu from "../Pages/Our_Menu/Our_Menu";
import Our_Shop from "../Pages/Our_Shop/Our_Shop";
import SignUp from "../Pages/SignUp/SignUp";
import AddReview from "../Pages/User/AddReview/AddReview";
import Payment from "../Pages/User/Payment/Payment";
import UserBooking from "../Pages/User/UserBooking/UserBooking";
import UserCart from "../Pages/User/UserCart/UserCart";
import UserHome from "../Pages/User/UserHome/UserHome";
import UserPayment from "../Pages/User/UserPayment/UserPayment";
import UserReservation from "../Pages/User/UserReservation/UserReservation";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AdminRoute from "./AdminRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/contact-us',
                element: <Contact_Us />
            },
            {
                path: '/our-shop/:category',
                element: <Our_Shop />
            },
            {
                path: '/our-menu',
                element: <Our_Menu />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardRoute/></PrivateRoutes>,
        children: [
            {
                path: 'user',
                element: <UserHome />
            },
            {
                path: 'admin',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "/dashboard/my-cart",
                element: <UserCart />
            },
            {
                path: "/dashboard/my-home",
                element: <UserHome />
            },
            {
                path: "/dashboard/my-reservation",
                element: <UserReservation />
            },
            {
                path: "/dashboard/my-payment",
                element: <UserPayment />
            },
            {
                path: "/dashboard/payment",
                element: <Payment />
            },
            {
                path: "/dashboard/add-review",
                element: <AddReview />
            },
            {
                path: "/dashboard/my-booking",
                element: <UserBooking />
            },
            {
                path: "/dashboard/add-items",
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: "/dashboard/manage-items",
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: "/dashboard/manage-bookings",
                element: <AdminRoute><ManageBookings /></AdminRoute>
            },
            {
                path: "/dashboard/all-users",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
        ]
    }
])

export default Routes;