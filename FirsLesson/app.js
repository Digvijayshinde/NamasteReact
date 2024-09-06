
// ReactElement is object which understood by browser
// React can be applied to small portions of your app
// React only works in the place where you make root
// Root and order of files matter 

const parent = React.createElement("div"
               ,{id:"parent"},
               React.createElement("div",{id:"child"},
               [React.createElement("h1",{},"I'm a H1 tag"),React.createElement("h2",{},"I'm a H2 tag")]))



               console.log(parent)
const heading = React.createElement("h1", { id: "heading" }, "Hello World From React!!!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);