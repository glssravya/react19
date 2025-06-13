import React from 'react';
import ReactDOM from 'react-dom/client';

const htmlStructure = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1",key:"child1"},
        [
         React.createElement("h1", { id: "heading",key: "child1h1" },"Im h1 tag"),
         React.createElement("h2", { id: "heading2",key: "child1h2" },"Im h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2",key:"child2"},
        [
         React.createElement("h1", { id: "heading3",key: "child2h1" },"Im h1 tag"),
         React.createElement("h2", { id: "heading4",key:"child2h2" },"Im h2 tag")
        ]
    )
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(htmlStructure);