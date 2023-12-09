import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Im h1 tag 🚀"),
        React.createElement("h2",{},"Im h2 tag"),
    ])
);
const heading = React.createElement("h1",{id:"heading"},"Hllo World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);