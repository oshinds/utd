import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';


const JoinUs = function(props){
  const style = {
    backgroundImage: "url(../../img-join-our-team.jpg)",
    backgroundSize: "contain",
    display: 'inline-block',
    position: 'relative'
  };
  return (
    <div className ='join-bkg' style={style}>
      <div className = 'header'>
        <h1>
          Join Our Team
        </h1>
      </div>
      <div className='heading-desc'>
        <p>
          We step beyond the expected to imagine new, groundbreaking ways to live, work, and fly. Join our team and help us redefine the future.
        </p>
        <button>View Open Positions</button>
      </div>
    </div>
  )
}

export default withRouter(JoinUs);