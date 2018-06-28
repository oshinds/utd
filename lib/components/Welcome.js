import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';
import Footer from 'Footer';
import PicturePanel from 'PicturePanel';
import JoinUs from 'JoinUs';


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
        <div style={{display:'inline-flex'}}>
          <h2 className='black'>Our Mission</h2>
          <p className='gray mission' style={{margin: '25px', fontSize: '18px'}}>Around the world, we are actively growing a<br/>diverse and empowered team of digital technology<br/>experts.  Working cohesively, we will scale and<br/>advance our future innovation and growth</p>
        </div>
      </div>
  </div>
)
const doCaptionPara = (props) => (<div><p>We accelerate the<br/>digitization of industry to<br/>deliver outcomes that matter<br/>to people.</p></div>);
const howCaptionPara = (props) => (<div><p>We design a more advanced,<br/>hospitable, and innovative<br/>future by keeping our<br/>customers and employees at<br/>the heart of our work.</p></div>);
const whoCaptionPara = (props) => (<div><p>We are a globally-connected<br/>community of experts,<br/>working together to imagine<br/>and enact what is possible<br/>for people and the world.</p></div>);
const newsCaptionPara = (props) => (<div><p>The robots are coming:<br/>how the rise of robots will<br/>change the future of<br/>industry.</p></div>);
const commitCaptionPara = (props) => (<div><p>At Digital University, we<br/>empower employees with<br/>lifelong learning opportunities.<br/>Explore our programs and get<br/>set to invest in yourself.</p></div>);
const resourcesCaptionPara = () => (['Access the essential tools and resources to help you understand our strategy, stay on brand, and keep projects moving forward.',
                                    'Frequently Asked Questions','Answers to the most pressing questions from our employees around the globe.',
                                    'Design Systems', 'An evolving set of guidelines and components to accelerate development of user interfaces.',
                                    'Brand Guidelines', 'A collection of materials to support digital marketing and communications.']);

class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      atTop: window.scrollY<=80,
      mobile: window.innerWidth <= 480,
      tablet: window.innerWidth <= 768 && window.innerWidth > 480,
      desktop:  window.innerWidth > 768
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
  }

  handleScroll(event) {
    this.setState({
      atTop: window.scrollY<=80,
    });
  }

  handleResize(event) {
    this.setState({
      mobile: window.innerWidth <= 480,
      tablet: window.innerWidth <= 768 && window.innerWidth > 480,
      desktop:  window.innerWidth > 768
    });
  }
  
  render(){
    const pathName = this.props.location.pathname.replace('/', '');
    return(
          <div className='wrapper'>
            <Navbar collapseOnSelect fixedTop componentClass={this.state.atTop && this.state.desktop? 'static' : 'fixed'}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a ref='head' href="/#"><img height='31' weight='31' src={this.state.atTop && this.state.desktop? 'logo.svg': 'logo-black.svg'}/></a>
                </Navbar.Brand>
                <span style={{ fontSize: 'xx-large', color: this.state.atTop ? '#fff': '#434343'}}>&#124;</span>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem  active={pathName === 'WhatWeDo'} eventKey={1} href="#WhatWeDo">
                    What We Do
                  </NavItem>
                  <NavItem  active={pathName === 'HowWeDoIt'} eventKey={2} href="#HowWeDoIt">
                    How We Do It
                  </NavItem>
                  <NavItem  active={pathName === 'WhoWeAre'} eventKey={3} href="#WhoWeAre">
                    Who We Are
                  </NavItem>
                  <NavItem  active={pathName === 'Resources'} eventKey={4} href="#Resources">
                    Resources
                  </NavItem>
                  <NavItem  active={pathName === 'CommittedToYou'} eventKey={5} href="#CommittedToYou">
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
            <PicturePanel id={'WhatWeDo'} align='right' header='What We Do' caption={doCaptionPara()} picture='img-what-we-do.jpg' />
            <PicturePanel id={'HowWeDoIt'} align='left' header='How We Do It' caption={howCaptionPara()} picture='img-how-we-do-it.jpg' />
            <PicturePanel id={'WhoWeAre'} align='right' header='Who We Are' caption={whoCaptionPara()} picture='img-who-we-are.jpg' />
            <PicturePanel id={'Resources'} align='full' header='Resources' caption={resourcesCaptionPara()} picture='img-resources.jpg' />
            <PicturePanel id={'LatestNews'} align='left' header='Latest News' caption={newsCaptionPara()} picture='img-latest-news.jpg' />
            <PicturePanel id={'CommittedToYou'} align='right' header='Committed To You' caption={commitCaptionPara()} picture='img-commited.jpg' />
            <JoinUs />
            <Footer/>
          </div>
      );
  }
}
export default withRouter(Welcome);