import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import SearchBar from "../../components/SearchBar";

class SearchEvent extends Component {
  state = {
    events: [],
    filter: [],
    loading: true,
  }

  async componentDidMount() {

    try {
      const events = await eventService.getAllEvents()
      this.setState({
        events,
        filter: [...events],
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  handleFilter = (el) => {
    const { events } = this.state;
    this.setState({
      filter: events.filter((element) =>
        element.title.toLowerCase().includes(el.toLowerCase())
      ),
    });
  };


  render() {
    const { filter, loading } = this.state;

    return (
      <div>
        <h1>Search</h1>
        {loading && <div>loading...</div>}
        <SearchBar onChange={this.handleFilter} />

        {!loading && filter.map((event) => {
          return (
            <div>
              <p>
                {event.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(withTheme(SearchEvent));
