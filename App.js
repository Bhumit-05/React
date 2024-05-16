const heading=React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "H1 tag used"), 
        React.createElement("h2", {}, "H2 tag used")
    ])
);

console.log(heading);

const r=ReactDOM.createRoot(document.getElementById("root"));

r.render(heading);
