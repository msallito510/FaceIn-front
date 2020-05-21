import React, { Component } from 'react'
import { InputLight, ContinerAlineCenter } from "../styles/styledComponents";

export default class SearchBar extends Component {
  state = {
    search: "",
  };

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <ContinerAlineCenter>
          <InputLight
            id="search"
            type="text"
            name="search"
            value={search}
            onChange={this.handleInput}
            placeholder="Search"
          ></InputLight>
          <span >
            <i aria-hidden="true"></i>
          </span>
        </ContinerAlineCenter>
      </div>
    );
  }
}
