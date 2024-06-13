import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Lending from "./pages/Lending"
import Stuff from "./pages/Stuff";
import TrashStuff from "./pages/TrashStuff";
import Inbound from "./pages/Inbound";
import LendingAdmin from "./pages/LendingAdmin"


export const router = createBrowserRouter ([
    {path: '/', element: <App /> },
    {path: '/login', element: <Login /> },
    {path: '/profile', element: <Profile /> },
    {path: '/dashboard', element: <Dashboard /> },
    {path: '/lending', element: <Lending /> },
    {path: '/stuff', element: <Stuff /> },
    {path: '/stuff/trash', element: <TrashStuff /> },
    {path: '/inbound-stuff', element: <Inbound /> },
    {path: '/lending-admin', element: <LendingAdmin /> },
])