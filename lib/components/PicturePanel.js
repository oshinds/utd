import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, Image } from 'react-bootstrap';
import config from 'config';
import { HashRouter, Route, PropsRoute, Switch } from 'react-router-dom';



const PicturePanel = function(props){
  const style = {
      backgroundImage: "url(../../"+props.picture+")",
      backgroundSize: "contain",
      position: 'relative',
      width: '80vw',
      height: '530px',
      margin: '65px 0',
      float: props.align === 'right' ? 'left': 'right'
    };
  const panelStyle ={
    float: props.align,
    width: '505px',
    height:'419px',
    marginRight: props.align==='right' ? '-175px': '0',
    marginLeft: props.align==='right' ? '0': '-175px',
    backgroundColor: '#fff',
    marginTop: '90px'
  }
  const circleGlyph = {
    cursor:'pointer',
    display: 'block',
    border: '2px solid #CECECE',
    borderRadius: '50%',
    height: '60px',
    width: '60px',
    marginTop: '16px',
    color : '#001e9a',
    fontWeight: 'bold'
  }
  return (
    <div id={props.id} className = 'picture-panel' style={style}>
      <div style={panelStyle}>
        <hr className ='colored' />
        <div style={{padding: '20px 38px'}}>
          <h2>{props.header}</h2>
          {props.caption}
          <div style={circleGlyph}><span>&gt;</span></div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(PicturePanel);