{/* <div id="parent">
    <div id="child">
        <h1 id="heading"></h1>
    </div>
</div> */}

// const htmlStructure = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},React.createElement("h1", 
//         { id: "heading" },
//     "Hello world from React")));


{/* 
    <div id="parent">
        <div id="child1">
            <h1>Im h1 tag</h1>
            <h2>Im h2 tag</h2>
        </div>
        <div id="child2">
            <h1>Im h1 tag</h1>
            <h2>Im h2 tag</h2>
        </div>
    </div> 
*/}

const htmlStructure = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [
         React.createElement("h1", { id: "heading" },"Im h1 tag"),
         React.createElement("h2", { id: "heading" },"Im h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [
         React.createElement("h1", { id: "heading" },"Im h1 tag"),
         React.createElement("h2", { id: "heading" },"Im h2 tag")
        ]
    )
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(htmlStructure);