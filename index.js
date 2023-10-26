import React from "react";
import ReactDOM from "react-dom/client";

// const header = document.createElement(`h2`);
// header.innerHTML =`Hello world using Javascript`
// const root = document.querySelector("#root");
// root.appendChild(header);

const header = React.createElement("h1", {id: 1}, "Hello world using React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(header);
console.log("learning react...");
// console.log(root1);
// console.log(root1);