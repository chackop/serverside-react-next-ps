// const myReactElement = React.createElement('h1',
//     {className: 'red'},
//     'Hello World');

const Hello = props => {
  return React.createElement(
    "h1",
    { className: "red" },
    "Hello WOrld" + props.time
  );
};

ReactDOM.render(
  React.createElement(Hello, { time: new Date().toLocaleTimeString() }, null),
  document.getElementById("app")
);
