import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';
import Contact from 'Contact';
import Services from 'Services';
import About from 'About';


const WelcomeInfo = (props) => (
  <div >
    <img className='banner' src='Banner.png' style={{width: '100%', height:'270px'}}/>
    <div >
    <Panel >
      <Panel.Body>
          <Row>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/0'})}} >
              <Image src="/research.png" rounded />
              <h2>Research & Discovery</h2>
            </Col>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/1'})}}>
              <Image src="/design.png" rounded  />
              <h2>Responsive Website & App Design</h2>
            </Col>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/2'})}}>
              <Image src="/solutions.png" rounded  />
              <h2>Business Tailored Tech Solutions</h2>
            </Col>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/3'})}}>
              <Image src="/analytics.png" rounded />
              <h2>Analytics Reporting</h2>
            </Col>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/4'})}}>
              <Image src="/ux.png" rounded  />
              <h2>User Experience Design</h2>
            </Col>
            <Col className='service-link z-10' xs={6} md={4} onClick={(e) => {props.history.push({pathname: 'services/5'})}}>
              <Image src="/hosting.png" rounded  />
              <h2>Secure Website Hosting</h2>
            </Col>
          </Row>
          <a href="#services"><p className='learn' align='right'>LEARN MORE</p></a>
      </Panel.Body>
    </Panel>
  </div>
  </div>
)
class Welcome extends React.Component{

  render(){
    const pathName = this.props.location.pathname.replace('/', '');
    return(
      <div>
          <Navbar collapseOnSelect>
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
                <NavItem active={pathName.match(/services*/) != null} eventKey={2} href="#services">
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
              <Route path='/services' component={Services}/>
              <Route exact path='/contact' component={Contact}/>
              <Route path='/' component={WelcomeInfo} />
            </Switch>
          </div>
      </div>);
  }
}
export default withRouter(Welcome);