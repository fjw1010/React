import React from "react";

function App() {
  return <GrandFather />;
}
function GrandFather() {
  const name = "르탄"
  return <Monter name={name} />;
}

function Monter(props) {
  const name = props.name
  return <Child name={name}/>;
}

function Child(props) {
  const name = props.name
  return <div>{name}</div>
}

export default App;