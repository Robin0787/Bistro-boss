import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Our_Menu from "../Pages/Our_Menu/Our_Menu";
import Our_Shop from "../Pages/Our_Shop/Our_Shop";

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
                path: 'contact-us',
                element: <Contact_Us />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/our-shop',
                element: <Our_Shop />
            },
            {
                path: '/our-menu',
                element: <Our_Menu />
            }
        ]
    }
])

export default Routes;