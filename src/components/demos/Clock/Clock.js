import React, {useEffect} from 'react';
import './Clock.scss';
import ClockUsingFunction from './Clock-Function';
import ClockUsingClass from './Clock-Class';
import randomColor from 'randomcolor';

  
  function Clock(props) {
    let [color, setColor] = React.useState(randomColor());
    let [show, setShow] = React.useState(true);
    let setTimer = function () {
      setTimeout(() => {
        console.log('wrong type color');
        setColor(randomColor());
      }, 4000);
    };
    useEffect(() => {
      setTimer();
    }, [color]);
    
    let displayBtnClickHandler = function(){
      setShow(!show);
      console.log(show);
    }
  
    let renderClock = function () {
      return(
      <>
         
        {/* Using Functional Component */}
        <ClockUsingFunction color={color} />
        {/* Using Class Component */}
        <ClockUsingClass color={color} />
      </>);
    };
    return <>
       <button onClick={displayBtnClickHandler}> {show?'Hide' : 'Show'} </button>
      {show ? renderClock() : <h3>Clock Hidden!!</h3>}
    </>;
  }
  export default Clock;
  
  