import React from "react"
import {  Outlet , RouterProvider, createBrowserRouter } from "react-router-dom"
import Mainheader from "../Veiw/Mainheader"
import Home from "../Veiw/Home"
import About from "../Veiw/About"
import Contact from "../Veiw/Contact"
import Portfolio from "../Veiw/Portfolio"
import PortfolioDetails from "../PortfolioDetails" 
import Error from "../Veiw/Error"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainheader />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/portfolio/:id",
                element: <PortfolioDetails />,
            },
            {
                path: "*",
                element: <Error />,
            },
            
]    
    },
    
])
function Router() {
    return (
        <>
            <RouterProvider router={router} />


        </>
    )
}

export default Router