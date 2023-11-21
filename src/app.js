/**
 * Header
 *   logo
 *   Nav bar items(Home, About us, Contact, Cart)
 * 
 * Body
 *   Search bar
 *   Restaurant cards(Separate Components)
 * 
 * Footer
 *   Copyright
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./app.css" 
const root = ReactDOM.createRoot(document.getElementById("root"));
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import RestaurantDetails from "./Components/RestaurantDetails";
// React Fragment
//Component Composition

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    },

                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurantdetails/:id",
                element: <RestaurantDetails/>
            }
        ]
    },

])

function  App() {
    return(
        <>
            <Header/>
             <Outlet/> 
            <Footer/>
        </>
    )
}

root.render(<RouterProvider router = {appRouter}/>)