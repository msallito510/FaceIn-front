import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Tr, Table, TdRight, TdLeft } from "../../styles/tableStyle";
import { TitleH1, GeneralContainer, LoadingContainer } from "../../styles/commonStyle";
import { DualRing } from 'react-awesome-spinners';

const Img = styled.img`
  width:4em;
  border-radius: 50%;
`;

const ParticipantsContainer = styled.div`
  position: relative;
  bottom: 6em;
`;

const ParticipantsContainerTable = styled.div`
  position: absolute;
  margin: 2em;
  right: 12em;
`;

class ParticipantsEvent extends Component {
  state = {
    event: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    try {
      const event = await eventService.getEventById(id);
      this.setState({
        event,
        loading: false
      })
    } catch (error) {
      toast.error(`ERROR. The event not found! - ${error}`);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { event: { participants }, loading } = this.state;

    return (
      <GeneralContainer>
        <TitleH1>Participants who will attend the event</TitleH1>
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
        <ParticipantsContainer>
          <ParticipantsContainerTable>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {!loading && participants.map((item, index) => {
                return (
                  <tbody key={index}>
                    <Tr>
                      <TdRight>{item.participant.username}
                      </TdRight>
                      <TdLeft>
                        {item.participant.imageUrl ?
                          <Img src={item.participant.imageUrl} alt={item.participant.username} />
                          : <Img src="/images/user.png" alt='default avatar' />}
                      </TdLeft>
                    </Tr>
                  </tbody>

                );
              })
              }
            </Table>
          </ParticipantsContainerTable>
        </ParticipantsContainer>
      </GeneralContainer>
    );
  }
}

export default withAuth(withTheme(ParticipantsEvent));