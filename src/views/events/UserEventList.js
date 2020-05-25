import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';

import eventService from "../../services/eventService";
import { TitleDh1, FormWrapper, SimpleContainer_scroll, Link_div_primary, StyledLink_L, Button_secundary, Container_row } from "../../styles/styledComponents";

class UserEventList extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const events = await eventService.getAllEventsByOwner()

      this.setState({
        events,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  handleDelete = async (eventId) => {
    const { history: { push } } = this.props;

    await eventService.deleteEvent(eventId)
      .then(() => {
        push(`/user-profile`);
        toast.success('the event was deleted.');

      })
      .catch(error => {
        toast.error(`ERROR. The event was not deleted! - ${error}`);
      })

  };

  render() {
    const { events, loading } = this.state;

    return (
      <FormWrapper>
        <SimpleContainer_scroll>
          <TitleDh1>user event</TitleDh1>
          {loading && <div>loading...</div>}
          {!loading && events.map((event) => {
            return (
              <div key={event._id}>
                <div>
                  <h2>{event.title}</h2>
                  <h2>{event.description}</h2>
                </div>
                <Container_row>
                  <Link_div_primary>
                    <StyledLink_L to={`/event-edit/${event._id}`}>edit</StyledLink_L>
                  </Link_div_primary>
                  <div>
                    <Button_secundary onClick={() => this.handleDelete(event._id)} >delete</Button_secundary>
                  </div>
                </Container_row>
              </div>
            );
          })
          }
        </SimpleContainer_scroll>
      </FormWrapper>
    );
  }
}

export default withAuth(withTheme(UserEventList));