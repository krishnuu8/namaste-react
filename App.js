import React from "react"
import ReactDOM from "react-dom/client"
const element="okay"
const element2=<h1>Normal element</h1>
const Title=()=>(<h1>NORMAL FUNCTION CALL!</h1>)
const Main=()=>(
    <div>
    <Title/>
    {10+element}
    {Title()}
    {element2}
    <h1>Inside Main Component!</h1>
    </div>
)


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Main/>)

// * JSX =>transpiled by Babel to createReact()=>converted to object by Core React => HTMLelement