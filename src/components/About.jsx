import React, { Component } from "react";
import logo from "../logo.svg";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="text-center">About</h2>
        <div class="text-center">
          <img src={logo} className="App-logo rounded" alt="logo" />
          <img src={logo} className="App-logo rounded float-left" alt="logo" />
          <img src={logo} className="App-logo rounded float-right" alt="logo" />
        </div>

        <div className="text-center">
          This example shows how to use React Router!
        </div>

        <figure class="figure">
          <img src={logo} className="App-logo rounded" alt="logo" />
          <figcaption class="figure-caption text-right">
            A caption for the above image.
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default About;
