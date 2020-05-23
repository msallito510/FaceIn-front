import React, { Component } from 'react';
import Moment from 'react-moment';

export default class DateFormat extends Component {
  render() {
    const { dateStart, timeStart } = this.props;
    return (
      <div>
        <Moment format="D MMM YYYY" withTitle>
          {dateStart}
        </Moment>
        | {timeStart}
      </div>
    )
  }
}
