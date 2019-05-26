// const myReactElement = React.createElement('h1',
//     {className: 'red'},
//     'Hello world');

const myReactElement = React.createElement(
  "h1",
  { className: "red" },
  "Hello world"
);

ReactDOM.render(myReactElement, document.getElementById("app"));
