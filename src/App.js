import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("props====", props);
    console.log(this);
  }
  render() {
    return <h1>Hellow World</h1>;
  }
}
