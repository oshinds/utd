import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';



const WelcomeInfo = (props) => (
  <div className ='body-bkg'>
    <div className = 'header'>
      <h1>
        Innovating an<br/>Extraordinary<br/>Future
      </h1>
    </div>
    <div className='heading-desc'>
      <p>
        By applying our domain expertise and<br/>digital capabilities to real world<br/>problems- we enable modern life for<br/>billions of people.
      </p>
    </div>
  </div>
)
const Mission = (props) => (
  <div >
      <br/>
      <div className ='margin-200'>
        <hr className ='colored' />
      </div>
      <div style={{display:'inline'}}>
      <h2 className='black'>Our Mission</h2>
      <p className='gray'>Around the world, we are actively growing a<br/>diverse and empowered team of digital technology<br/>experts.  Working cohesively, we will scale and<br/>advance our future innovation and growth</p>
      </div>
  </div>
)
class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      atTop: window.scrollY<=80
    }
    this.handleScroll = this.handleScroll.bind(this);
    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      atTop: window.scrollY<=80
    });
  }

  render(){
    const pathName = this.props.location.pathname.replace('/', '');
    return(
          <div className='wrapper'>
            <Navbar collapseOnSelect fixedTop fluid componentClass={this.state.atTop? 'static' : 'fixed'}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a ref='head' href="/#"><img height='31' weight='31' src={this.state.atTop? 'logo.svg': 'logo-black.svg'}/></a>
                </Navbar.Brand>
                <span style={{ fontSize: 'xx-large', color: this.state.atTop ? '#fff': '#434343'}}>&#124;</span>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem  eventKey={1} href="#what">
                    What We Do
                  </NavItem>
                  <NavItem  eventKey={2} href="#how">
                    How We Do It
                  </NavItem>
                  <NavItem  eventKey={3} href="#who">
                    Who We Are
                  </NavItem>
                  <NavItem  eventKey={4} href="#resources">
                    Resources
                  </NavItem>
                  <NavItem  eventKey={5} href="#digitalu">
                    DigitalU
                  </NavItem>
                  <NavItem  eventKey={6} href="#join">
                    Join the Team
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <WelcomeInfo/>
            <Mission/>
          </div>
      );
  }
}
export default withRouter(Welcome);