import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import ImageSection from "./components/ImageSection"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const AppLayout =() =>{
    return(
    <div className="app">
    <Header/>      
    <ImageSection/>
    <Outlet/> {/**this will be replaced by component according to the Route! */}
    </div>
    );
}

const Grocery=lazy(()=>import("./components/Grocery"))
const appRoutes=createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[{
        path:"/",
        element:<Body/>
    },{
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Contact/>
    },{
        path:"/menu/:resId",
        element:<RestaurantMenu/>
    },{
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
    }],
    errorElement:<Error/>
}])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoutes}/>)

// * JSX =>transpiled by Babel to createReact()=>converted to object by Core React => HTMLelement