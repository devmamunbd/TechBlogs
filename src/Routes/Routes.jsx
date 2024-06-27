import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home/Home";
import Article from "../Home/Article/Article";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/article',
                element: <Article/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])
