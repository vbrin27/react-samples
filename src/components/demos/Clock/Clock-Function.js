import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Clock(props) {
    let getTimer = function () {
      let currentTime = new Date();
      let hours = currentTime.getHours();
      return {
        currentTime,
        hours,
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: hours >= 12 ? "pm" : "am"
      };
    };
    let [timeElement, setTimeElements] = useState(getTimer());
    let [updateTimer, setUpdateTimer] = useState(false);
  
    let setTimer = function () {
      clearTimeout(updateTimer);
      let updateTimerlocal = setTimeout(() => {
        setTimeElements(getTimer());
      }, 1000);
      setUpdateTimer(updateTimerlocal);
    };
    useEffect(() => {
      console.log('useEffect mail call');
      console.log(timeElement);
      setTimer();
      console.log('Set Timer');
      return function(){
        console.log('useEffect return fn call');
        console.log(timeElement);
        console.log('When Destroyed!!!!');
        return false;
      }
    }, [timeElement]);
    /* To call cleanup codes when destroyed useEffect with empty array needs to be passed */
    useEffect(()=>{
       return function () {
        console.log("called when destroyed!!");
        clearTimeout(setTimer);
      };
    },[])
    
    return (
      <>
        <h3>Using Functional Component</h3>
        <div className="clock" style={{ backgroundColor: props.color }}>
          {timeElement.hours == 0
            ? 12
            : timeElement.hours > 12
            ? timeElement.hours - 12
            : timeElement.hours}
          :
          {timeElement.minutes > 9
            ? timeElement.minutes
            : `0${timeElement.minutes}`}
          :
          {timeElement.seconds > 9
            ? timeElement.seconds
            : `0${timeElement.seconds}`}{" "}
          {timeElement.ampm}
        </div>
      </>
    );
  }
  Clock.propTypes = {
    color: PropTypes.string
  }
  Clock.defaultProps = {
    color: "red"
  }
  export default Clock;