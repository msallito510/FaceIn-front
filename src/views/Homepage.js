import React, { Component } from "react";
import { withTheme } from "../context/themeContext";
import Navlist from "../components/HomeList";

class Homepage extends Component {
  render() {
    return (<div>
      <Navlist />
    </div>);
  }
}

export default withTheme(Homepage);
