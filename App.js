import React from "react"
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
        <img alt="logo" className="logo" src="https://img.pikbest.com/png-images/20241031/black-and-red-line-style-fast-food-restaurant-logo_11033328.png!sw800"/><span className="logo-name">QuickBite</span>
            </div>
        <ul className="nav-items">
            <li>Home</li>
            <li>Menu</li>
            <li>Service</li>
            <li>Contact</li>
            <li><img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75SELy7I8F_vR2KQwSl9kI92TgoGW26UtSA&s"/></li>
        </ul>
        
        <ul className="buttons">
            <li><button className="login">Login</button></li>
            <li><button className="register">Register</button></li>
        </ul>

        </div>
    )
}
const ImageSection = () => {
    return (
        <>
        <div className="image-text">Order Your <span className="orange">Favorite</span> Foods</div>
    <div className="image-section">
    </div>
    </>);
  };
const AppLayout =() =>{
    return(
    <div className="app">
    <Header/>      
    <ImageSection/>
    </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

// * JSX =>transpiled by Babel to createReact()=>converted to object by Core React => HTMLelement