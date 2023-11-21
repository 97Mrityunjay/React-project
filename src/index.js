import React from "react";
import ReactDOM from "react-dom/client";
// React Element ====> JS object =====>HTML
// const header = React.createElement("h1", {id: 1}, "Hello world using React");
// JSx -----> HTML like syntax or XML like syntax
//Babel-----> Javascript compiler or transpiler
// JSX------>React Element------>JS Object----->HTML
const header1 = (
    <div>
     <h1 id = "1">Hello world using React 1234</h1>
     <h2>hello</h2>
    </div>
   )
//React components :->
// Functional components---->New Way
//Class Based Components---->Old Way

//JS Function which returns JSX(React Element)

const headerComponent = ()=>{
    return <h1>Header Component</h1>
}

const headercc = ()=><h1></h1> 
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// const childDiv = React.createElement("div", {id:"child"}, "Hello child");
// const parentDiv = React.createElement("div",{id:"parent"}, [header, childDiv]);
root1.render(header1);
