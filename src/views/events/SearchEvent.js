import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import SearchBar from "../../components/SearchBar";
import {
  TitleLh1,
  HeaderBackground,
  SearchBackground,
  CardContainer,
  EventCard,
  ContentEventCard,
  TitleEventCardLh1,
  InfoEventCardLh3,
  StyledLink
} from "../../styles/styledComponents";

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
        <HeaderBackground>
          <TitleLh1>Search</TitleLh1>
          {loading && <div>loading...</div>}
          <SearchBar onChange={this.handleFilter} />
        </HeaderBackground>

        <SearchBackground>
          {!loading && filter.map((event) => {
            return (
              <CardContainer>
                <StyledLink to={`/events/${event._id}`}>
                  <EventCard>
                    <ContentEventCard>
                      <TitleEventCardLh1>{event.title}</TitleEventCardLh1>
                      <InfoEventCardLh3>{event.dateStart} | {event.timeStart}</InfoEventCardLh3>
                    </ContentEventCard>
                  </EventCard>
                </StyledLink>
              </CardContainer>
            );
          })}
        </SearchBackground>
      </div>
    );
  }
}

export default withAuth(withTheme(SearchEvent));
