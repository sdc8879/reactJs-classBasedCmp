import React from "react";
export default class EventBinding extends React.Component {
  constructor(props) {
    super(props);
    this.callOnClick1 = this.callOnClick1.bind(this);
    this.callOnClick2 = this.callOnClick2.bind(this);
  }
  callOnClick1() {
    console.log("Button is clicked");
  }
  callOnClick2(data) {
    console.log("Button 2s clicked", data);
  }
  render() {
    return (
      <div>
        <button onClick={this.callOnClick1}> Click-1 me!</button>
        <br></br>
        <br></br>
        <br></br>
        <button
          onClick={() => {
            this.callOnClick2("abc");
          }}
        >
          Click-2 me!!!
        </button>
      </div>
    );
  }
}
