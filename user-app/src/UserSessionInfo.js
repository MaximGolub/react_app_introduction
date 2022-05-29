import React from "react";
import Moment from "moment";

class UserSessionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Moment(),
      count: 0,
    };
  }

  getTime() {
    return this.state.date.format("HH:mm");
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="user-session-info">
        <div className="user-session-started">
          Session started at: {this.getTime()}
        </div>
        <div className="user-session-time">
          Session time in second: {this.state.count}
        </div>
      </div>
    );
  }
}

export default UserSessionInfo;
