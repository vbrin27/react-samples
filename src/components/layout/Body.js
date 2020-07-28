import React, {useState, useCallback} from "react";
import './Body.scss';
import Content from './Content';
import NavBar from "./NavBar";

function Body(){
    let [currentSelected, setCurrentSelected] = useState("clock");
    let changeHandler = function(orgEvent, name){
        setCurrentSelected(name);
    }
    return (<main className='main__section'>
        <NavBar currentSelected={currentSelected} changeHandler={changeHandler}/>
        <Content currentSelected={currentSelected}/>
    </main>); 
}

export default Body;