import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import SearchBar from "../../components/SearchBar";
import DateFormat from "../../components/DateFormat";

import {
  TitleLh1,
  HeaderBackground,
  SearchBackground,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3,
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
                  <EventCardContainer>
                    <ContentEventCard>
                      <TitleEventCardLh1>{event.title}</TitleEventCardLh1>
                      <TimeEventCardLh3>
                        <DateFormat dateStart={event.dateStart} timeStart={event.timeStart} />
                      </TimeEventCardLh3>
                    </ContentEventCard>
                  </EventCardContainer>
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
