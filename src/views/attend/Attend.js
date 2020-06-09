import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import { Tr, Table, Th, TdRight, TdLeft, TdScan, Thead } from "../../styles/tableStyle";
import { TitleH1, GeneralContainer, LoadingContainer } from "../../styles/commonStyle";
import { PlayCircleIcon } from "../../styles/icon-style";
import { DualRing } from 'react-awesome-spinners';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  padding: 0.1em; 
`;

class Attend extends Component {
  _isMounted = false;

  state = {
    event: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this._isMounted = true;

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

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleScanFace = (e, participantId) => {
    this.props.history.push(`/scan-face/${participantId}`)
  }

  render() {
    const { event: { participants }, loading } = this.state;
    const { theme } = this.props;

    return (
      <GeneralContainer>
        <TitleH1>Participants</TitleH1>
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
        <Table>
          <Thead>
            <tr>
              <Th>user</Th>
              <Th>face Scanned</Th>
              <th></th>
            </tr>
          </Thead>
          {!loading && participants.map((item, index) => {
            return (
              <tbody key={index}>
                <Tr>
                  <TdRight>{item.participant.username}
                  </TdRight>
                  <TdLeft>{item.faceScanned.toString() === "false" ? "Not yet" : "Scanned"}</TdLeft>
                  <TdScan>
                    <Button onClick={(e) => this.handleScanFace(e, item._id)}>
                      <PlayCircleIcon color={theme.color} />
                    </Button>
                  </TdScan>
                </Tr>
              </tbody>
            );
          })
          }
        </Table>
      </GeneralContainer>
    );
  }
}

export default withAuth(withTheme(Attend));