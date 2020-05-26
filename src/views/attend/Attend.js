import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';

import { Container, Table, Th, TdRight, TdLeft, Thead } from "../../styles/tableStyle";
import { TitleDh1 } from "../../styles/styledComponents";

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
      <div>
        <TitleDh1>Social attend</TitleDh1>
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
                  <Container div key={item.participant._id}>

                    <TdRight>{item.participant.username}</TdRight>
                    <TdLeft>{item.faceScanned.toString() === "false" ? "Not yet" : "Scanned"}</TdLeft>
                  </Container>
                </tr>
              </tbody>

            );
          })
          }
        </Table>
      </div>
    );
  }
}

export default withAuth(withTheme(Attend));