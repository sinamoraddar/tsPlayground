import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SillyButton from "./components/sillyButton/SillyButton";
import Hello from "./components/hello/Hello";

function App() {
  return <Hello name={"Sina"} enthusiasmLevel={10} />;
}

export default App;
