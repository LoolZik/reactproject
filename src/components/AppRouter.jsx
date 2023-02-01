import React, { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
 
function AppRouter() {
    const {isAuth} = useContext(AuthContext)
    const pablic = useRoutes([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/*',
            element: <Login/>
        },
    ])

    const privat = useRoutes([
        {
            path: '/posts',
            element: <Posts/>
        },
        {
            path: '/about',
            element: <About/>
        },
        // {
        //     path: '/posts',
        //     element: <About/>
        // },
        {
            path: '/*',
            element: <Posts/>
        },
    ])

    return (
        <div>
            {isAuth ? privat : pablic}
        </div>
    )
}

export default AppRouter;