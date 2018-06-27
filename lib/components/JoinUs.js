import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';


const JoinUs = (props) => (
  <div className='footer utdBlue'>
      <br/>
      <div className ='margin-100 '>
        <div style={{display:'inline-flex'}}>
          <h3 className='white'>About Us</h3>
          <p className='white' style={{margin: '25px', fontSize: '18px'}}>UT Digital is a world-class team across United Technologies. Together we are accelerating what's possible for our customers, employees and businesses. Using our domain expertise, data and digital digital capabilities, we are helping shape the future of our industries and deliver outcomes that matter to people and the world.</p>
        </div>
        <hr className ='gray' />
        <div className='footerLinks'>
          <span className='leftLinks'>
            <a href="#">Contact Us</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
          </span>
          <span className='rightLinks'>
            <span>Follow Us</span>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </span>
        </div>
      </div>
  </div>
)

export default withRouter(JoinUs);