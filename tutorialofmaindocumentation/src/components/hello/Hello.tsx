import * as React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// helpers

const getExclamationMarks = (numChars: number) => {
  const testArray = Array(3);
  debugger;
  return Array(numChars + 1).join("!");
};

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You cold be a little more enthusiastic. :D");
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;
