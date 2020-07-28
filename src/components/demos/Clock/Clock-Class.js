import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    constructor() {
      super(...arguments);
      this.state = this.getTimer();
    }
    componentDidMount() {
      this.setTimer();
    }
    componentWillUnmount() {
      clearTimeout(this._updateTimer);
    }
    getTimer() {
      let currentTime = new Date();
      let hours = currentTime.getHours();
      return {
        currentTime,
        hours,
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: hours >= 12 ? "pm" : "am"
      };
    }
    setTimer() {
      clearTimeout(this._updateTimer);
      this._updateTimer = setTimeout(() => {
        this.setState(this.getTimer(), this.setTimer);
      }, 1000);
    }
    render() {
      let { hours, minutes, seconds, ampm } = this.state;
      return (
        <>
          <h3>Using Class Component</h3>
          <div className="clock" style={{ backgroundColor: this.props.color }}>
            {hours == 0 ? 12 : hours > 12 ? hours - 12 : hours}:
            {minutes > 9 ? minutes : `0${minutes}`}:
            {seconds > 9 ? seconds : `0${seconds}`} {ampm}
          </div>
        </>
      );
    }
  }
  
  Clock.propTypes = {
    color: PropTypes.string
  }
  Clock.defaultProps = {
    color: "red"
  }

  export default Clock;