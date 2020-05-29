import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Container, Table, Th, TdRight, TdLeft, Thead } from "../../styles/tableStyle";
import { TitleH1, GeneralContainer } from "../../styles/commonStyle";

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

    return (
      <GeneralContainer>
        <TitleH1>Participants</TitleH1>
        {loading && <div>loading...</div>}
        <Table>
          <Thead>
            <tr>
              <Th>user</Th>
              <Th>face Scanned</Th>
            </tr>
          </Thead>
          {!loading && participants.map((item) => {
            return (
              <tbody>
                <tr>
                  <Container key={item.participant._id}>

                    <Link to={`/scan-face/${item._id}`}>
                      <TdRight>{item.participant.username}
                      </TdRight>
                    </Link>
                    <TdLeft>{item.faceScanned.toString() === "false" ? "Not yet" : "Scanned"}</TdLeft>

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