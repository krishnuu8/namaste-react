import React from "react"
import ReactDOM from "react-dom/client"
/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag!</h1>
        <h2>I am an h2 tag!</h2>
    </div>
    <div id="child">
        <h1>I am an h1 tag!</h1>
        <h2>I am an h2 tag!</h2>
    </div>
</div>

*/
const heading=React.createElement(
    "div",
    {id:"parent"}, //attributes
  [ React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am an h1 tag!"),React.createElement("h2",{},"I am an h2 tag!")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag!"),React.createElement("h2",{},"I am an h2 tag!")]) ]
)
console.log(heading) //object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) //takes object=>converts it into h1 tag=>attaches it to the DOM
//React is a piece of code that is able to work independently in your web page! ; not a full fledged framework!
//react will work only in tha portion of your web page which you have made as root!
//we can import react as js file!