import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Contact from 'Contact';
import Services from 'Services';
import About from 'About';


const WelcomeInfo = (props) => (
  <div>
    <img style={{maxWidth: '100%'}} src='Banner.png' />
  </div>
)
class Welcome extends React.Component{
  render(){
    const pathName = this.props.location.pathname.replace('/', '');
    return(
      <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#"><img height='49' weight='30' src='logo.png' style={{marginTop: '-14px'}}/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem active={pathName === 'about'} eventKey={1} href="#about">
                  About
                </NavItem>
                <NavItem active={pathName === 'services'} eventKey={2} href="#services">
                  Services
                </NavItem>
                <NavItem active={pathName === 'contact'} eventKey={3} href="#contact">
                  Contact Us
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className='wrapper'>
            <Switch>
              <Route exact path='/about' component={About}/>
              <Route exact path='/services' component={Services}/>
              <Route exact path='/contact' component={Contact}/>
              <Route path='/' component={WelcomeInfo}/>
            </Switch>
          </div>
      </div>);
  }
}
export default withRouter(Welcome);