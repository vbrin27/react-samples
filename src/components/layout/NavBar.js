import React, {useState} from "react";
import './NavBar.scss';
import NavItem from './NavItem';

function NavBar(props){
    let demoDetails = {
        clock: {
            text: "Clock"
        },
        github_activity:{
            text: "Github Activity"
        }
    }
    let getNavItems = function(){
        let demoKeys = Object.keys(demoDetails);
        return demoKeys.map((key)=>{
            let demoDetail = demoDetails[key];
            return <NavItem text={demoDetail.text} clickHandler={props.changeHandler} active = {props.currentSelected === key} key={key} name={key}></NavItem>
        });
    }
    return( 
        <nav className='nav__section'>
            {getNavItems()}
        </nav>
    );
}
export default NavBar;