import React, { Component } from 'react'

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
        <div >
          <p className="control has-icons-left">
            <input

              id="search"
              type="text"
              name="search"
              value={search}
              onChange={this.handleInput}
              placeholder="Search"
            ></input>
            <span >
              <i aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
