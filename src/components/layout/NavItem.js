import React from 'react';
import './NavItem.scss';

function NavItem(props){
  return(
    <a tabIndex="0" onClick={(orgEvent)=>props.clickHandler(orgEvent, props.name)} className={'nav__item '+(props.active ? 'is-active' : '')} >{props.text}</a>
  );  
}

export default NavItem;
