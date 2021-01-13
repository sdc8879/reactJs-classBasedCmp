import React from "react";
import EventBinding from "./EventBinding";
import FunctionalCmp from "./FunctionalCmp";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("props====", props);
    console.log(this);
  }
  render() {
    return (
      <div>
        <div
          className="class1"
          style={{ border: "2px solid red", padding: "10px" }}
        >
          <h1>Class Based Cmp event</h1>
          <EventBinding></EventBinding>
        </div>
        <div
          className="class2"
          style={{ border: "2px solid black", padding: "10px" }}
        >
          <h1>Functional Cmp based event</h1>
          <FunctionalCmp></FunctionalCmp>
        </div>
      </div>
    );
  }
}
