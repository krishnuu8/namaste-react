import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import ImageSection from "./components/ImageSection"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import { useEffect,useState,useContext } from "react";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";
// import Grocery from "./components/Grocery"
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout =() =>{
    const [userName,setUserName]=useState();
    useEffect(()=>{
        //logic for authentication
          const data={
                name:"Krish"
            }
            setUserName(data.name)
    },[])


    return(
    <Provider store={store}>
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
    <Header/>      
    <Outlet/> {/**this will be replaced by component according to the Route! */}
    </div>
    </UserContext.Provider>
    </Provider>
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
    },{
        path:"/cart",
        element:<Cart/>
    }],
    errorElement:<Error/>
}])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoutes}/>)

// * JSX =>transpiled by Babel to createReact()=>converted to object by Core React => HTMLelement