import { useState } from "react";

export function RandomColour() {
  const [colour, setColour] = useState("#0000FF");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createColour() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    console.log(hexColour);
    setColour(hexColour);
  }
  return (
    <div
      className="container flex flex-col items-center justify-center height:100vh width:100wh"
      style={{ background: colour }}
    >
      <button
        onClick={() => createColour()}
        className="border-2 rounded-md px-4 py-4 mx-4"
      >
        Generate random colour
      </button>
      <div className="text-blue text-4xl my-10">{colour}</div>
    </div>
  );
}
