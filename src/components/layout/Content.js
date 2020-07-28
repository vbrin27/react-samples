import React, {useState, useEffect} from 'react';
import './Content.scss';
import Clock from '../demos/Clock';


function Content(props){
    function getComponent(componentKey){
        switch (componentKey) {
            case "clock":
                return <Clock/>;
            default:
                return <h1>{componentKey}</h1>;
        }
    }
    return( 
        <section className='content__section'>
            <div className="demo__section">
                { getComponent(props.currentSelected) }
            </div>
        </section>
    );
}
export default Content;