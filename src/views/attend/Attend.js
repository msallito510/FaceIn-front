import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Container, Table, Th, TdRight, TdLeft, TdScan, Thead } from "../../styles/tableStyle";
import { TitleH1, GeneralContainer, LoadingContainer } from "../../styles/commonStyle";
import { PlayCircleIcon } from "../../styles/icon-style";
import { DualRing } from 'react-awesome-spinners';

class Attend extends Component {
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
          {!loading && participants.map((item) => {
            return (
              <tbody>
                <tr>
                  <Container key={item.participant._id}>
                    <TdRight>{item.participant.username}
                    </TdRight>
                    <TdLeft>{item.faceScanned.toString() === "false" ? "Not yet" : "Scanned"}</TdLeft>
                    <Link to={`/scan-face/${item._id}`}>
                      <TdScan>
                        <PlayCircleIcon color={theme.color} />
                      </TdScan>
                    </Link>
                  </Container>
                </tr>
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