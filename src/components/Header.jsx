import { useEffect, useState } from "react";
import { LOGO_URL,SEARCH_LOGO_URL } from "../utils/config"; 
import Search from "./Search";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnText,setBtnText]=useState("Login");
    useEffect(()=>{
        console.log("Header fully rendered!")
    },[])
    return(
        <>
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="flex">
        <img alt="logo" className="w-24" src={LOGO_URL}/><span className="mt-9">QuickBite</span>
            </div>
            <div className="flex items-center">
        <ul className="flex p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link>Menu</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><button 
            className="login"
            onClick={()=>btnText==="Login"?setBtnText("Logout"):setBtnText("Login")}
            >{btnText}</button></li>
            <li><button className="register">Register</button></li>
        </ul>
        </div>
        {/* <ul className="buttons">
            <li><button 
            className="login"
            onClick={()=>btnText==="Login"?setBtnText("Logout"):setBtnText("Login")}
            >{btnText}</button></li>
            <li><button className="register">Register</button></li> */}
        {/* </ul> */}
        </div>
        </>
    )
}
export default Header;