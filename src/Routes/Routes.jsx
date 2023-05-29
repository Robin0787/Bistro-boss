import { createBrowserRouter } from "react-router-dom";
import DashboardRoute from "../Layouts/DashboardRoute/DashboardRoute";
import Main from "../Layouts/Main/Main";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Our_Menu from "../Pages/Our_Menu/Our_Menu";
import Our_Shop from "../Pages/Our_Shop/Our_Shop";
import SignUp from "../Pages/SignUp/SignUp";
import AddReview from "../Pages/User/AddReview/AddReview";
import UserBooking from "../Pages/User/UserBooking/UserBooking";
import UserCart from "../Pages/User/UserCart/UserCart";
import UserHome from "../Pages/User/UserHome/UserHome";
import UserPayment from "../Pages/User/UserPayment/UserPayment";
import UserReservation from "../Pages/User/UserReservation/UserReservation";
import PrivateRoutes from "../Routes/PrivateRoutes";

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
                path: '/dashboard',
                element: <UserHome />
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
                path: "/dashboard/add-review",
                element: <AddReview />
            },
            {
                path: "/dashboard/my-booking",
                element: <UserBooking />
            },
        ]
    }
])

export default Routes;