import type { NavigationLink} from "./contentTypes.tsx";
import Home from "../pages/Home.tsx";
import Search from "../pages/Search.tsx";
import Categories from "../pages/Categories.tsx";
import Library from "../pages/Library.tsx";
import Favorite from "../pages/Favorite.tsx";
import Profile from "../pages/Profile.tsx";
import Settings from "../pages/Settings.tsx";
import Cart from "../pages/Cart.tsx";
import CheckOut from "../pages/CheckOut.tsx";
import Wallet from "../pages/Wallet.tsx";
import Transactions from "../pages/Transactions.tsx";
import Events from "../pages/Events.tsx";
import Event from "../pages/Event.tsx";
import MyEvents from "../pages/MyEvents.tsx";
import SupervisorEvents from "../pages/SupervisorEvents.tsx";
import CreateEvent from "../pages/CreateEvent.tsx";
import Attendees from "../pages/Attendees.tsx";
import LogInPage from "../pages/LogInPage.tsx";
import Register from "../pages/Register.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
export const navigationLinks: NavigationLink[] = [
    {
        id: 1,
        href: "/",
        text: "Home",
        dropdown: false,
        noToken:false,
        element:<Home/>
    },
    {
        id: 2,
        href: "/search",
        text: "Search",
        dropdown: false,
        noToken:false,
        element:<Search/>
    },
    {
        id: 3,
        href: "/categories",
        text: "Categories",
        dropdown: false,
        noToken:false,
        element:<Categories/>
    },
    {
        id: 4,
        href: "/library",
        text: "Library",
        dropdown: false,
        noToken:false,
        element:<Library/>
    },
    {
        id: 5,
        href: "/library/favorites",
        text: "Favorites",
        dropdown: false,
        noToken:false,
        element:<Favorite/>
    },
    {
        id: 6,
        href: "/profile",
        text: "Profile",
        dropdown: false,
        noToken:false,
        element:<Profile/>
    },
    {
        id: 7,
        href: "/profile/settings",
        text: "Settings",
        dropdown: false,
        noToken:false,
        element:<Settings/>
    },
    {
        id: 8,
        href: "/cart",
        text: "Cart",
        dropdown: false,
        noToken:false,
        element:<Cart/>
    },
    {
        id: 9,
        href: "/cart/checkout",
        text: "CheckOut",
        dropdown: false,
        noToken:false,
        element:<CheckOut/>
    },
    {
        id: 10,
        href: "/wallet",
        text: "Wallet",
        dropdown: false,
        noToken:false,
        element:<Wallet/>
    },
    {
        id: 11,
        href: "/wallet/transactions",
        text: "Transactions",
        dropdown: false,
        noToken:false,
        element:<Transactions/>
    },
    {
        id: 12,
        href: "/events",
        text: "Events",
        dropdown: false,
        noToken:false,
        element:<Events/>
    },
    {
        id: 13,
        href: "/event",
        text: "Event",
        dropdown: false,
        noToken:false,
        element:<Event/>
    },
    {
        id: 14,
        href: "/myEvents",
        text: "MyEvents",
        dropdown: false,
        noToken:false,
        element:<MyEvents/>
    },
    {
        id: 15,
        href: "/supervisorEvents",
        text: "Supervisor Events",
        dropdown: false,
        noToken:false,
        element:<SupervisorEvents/>
    },
    {
        id: 16,
        href: "/create/event",
        text: "CreateEvent",
        dropdown: false,
        noToken:false,
        element:<CreateEvent/>
    },
    {
        id: 17,
        href: "/attendees",
        text: "Attendees",
        dropdown: false,
        noToken:false,
        element:<Attendees/>
    },{
        id: 17,
        href: "/login",
        text: "LogInPage",
        dropdown: false,
        noToken:true,
        element:<LogInPage/>
    },{
        id: 18,
        href: "/register",
        text: "Register",
        dropdown: true,
        noToken:true,
        element:<Register/>
    },{
        id: 19,
        href: "/forgot/password",
        text: "Forgot Password",
        dropdown: true,
        noToken:true,
        element:<ForgotPassword/>
    }
];
