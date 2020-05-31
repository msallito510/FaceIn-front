import React, { Component } from 'react';

import { Input, ContinerAlineCenter } from "../styles/styledComponents";

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
          <Input
            id="search"
            type="text"
            name="search"
            value={search}
            onChange={this.handleInput}
            placeholder="Search..."
          ></Input>
          <span >
            <i aria-hidden="true"></i>
          </span>
        </ContinerAlineCenter>
      </div>
    );
  }
}
