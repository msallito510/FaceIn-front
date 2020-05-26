import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';

import eventService from "../../services/eventService";
import { TitleDh1, FormWrapper, SimpleContainerScroll, LinkDivPrimary, StyledLinkLight, ButtonSecundary, ContainerRow } from "../../styles/styledComponents";

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
        <SimpleContainerScroll>
          <TitleDh1>user event</TitleDh1>
          {loading && <div>loading...</div>}
          {!loading && events.map((event) => {
            return (
              <div key={event._id}>
                <div>
                  <h2>{event.title}</h2>
                  <h2>{event.description}</h2>
                </div>
                <ContainerRow>
                  <LinkDivPrimary>
                    <StyledLinkLight to={`/event-edit/${event._id}`}>edit</StyledLinkLight>
                  </LinkDivPrimary>
                  <div>
                    <ButtonSecundary onClick={() => this.handleDelete(event._id)} >delete</ButtonSecundary>
                  </div>
                </ContainerRow>
              </div>
            );
          })
          }
        </SimpleContainerScroll>
      </FormWrapper>
    );
  }
}

export default withAuth(withTheme(UserEventList));