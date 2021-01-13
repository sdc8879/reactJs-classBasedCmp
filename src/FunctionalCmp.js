import React from "react";

export default function FunctionalCmp() {
  function callOnClick3() {
    console.log("Button 3 clicked");
  }
  function callOnClick4(data) {
    console.log("Button 4 clicked", data);
  }

  return (
    <div>
      <button onClick={callOnClick3}> Click-3 me!</button>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          callOnClick4("abc");
        }}
      >
        Click-4 me!!!
      </button>
    </div>
  );
}
