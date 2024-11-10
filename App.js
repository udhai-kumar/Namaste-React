// const heading = React.createElement(
//   "h1",
//   { id: "Heading" },
//   "Hello world from React"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "child" }, [
  React.createElement("h1", { id: "heading" }, "Hello i am h1 tag"),
  React.createElement("h2", { id: "h2" }, "Hello i am h2 tag"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
