//const rootElement = document.getElementById('app');

// const myElement = document.createElement('h1');
// myElement.className = "red";
// myElement.innerText = 'Hello server side react';

const myReactElement = React.createElement(
  "h1",
  { className: "red" },
  "Hello server side react"
);

ReactDOM.render(myReactElement, document.getElementById("app"));
