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
      backgroundSize: props.align == 'full'? 'initial' :"contain",
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      width: props.align == 'full'? '100vw' : '80vw',
      height: '530px',
      margin: '65px 0',
      float: props.align === 'left' ? 'right': 'left'
    };
  const panelStyle ={
    float: props.align === 'full'? 'right': props.align,
    width: props.align ==='full' ? '655px' : '505px',
    height:props.align ==='full' ? '540px' : '419px',
    marginRight: props.align==='full'? '100px' : props.align==='right' ? '-175px': '0',
    marginLeft: props.align==='right' || props.align==='full' ? '0': '-175px',
    backgroundColor: '#fff',
    marginTop: props.align === 'full'? '-90px' :' 90px'
  }
  const circleGlyph = {
    cursor:'pointer',
    display: 'block',
    border: '2px solid #CECECE',
    borderRadius: '50%',
    height: '60px',
    width: '60px',
    marginTop: props.align === 'full'? '1px': '16px',
    color : '#001e9a',
    fontWeight: 'bold',
    float: props.align === 'full'? 'right': 'none'
  }
  return (
    <div id={props.id} className = 'picture-panel' style={style}>
      {props.align ==='full' && 
        <div className='full'>
          <div style={{width:'464px', margin: '110px 0 0 125px'}}>
            <h3 style={{ fontSize: '47px'}}>{props.header}</h3>
            <p style={{ color:'#fff', fontSize: '27px'}}>{props.caption[0]}</p>
          </div>
          <div style={panelStyle}>
            <div style={{padding: '0 30px'}}>
              <h2>{props.caption[1]}</h2>
              <div style={{paddingBottom:'50px'}}>
                <p>{props.caption[2]}</p>
                <div style={circleGlyph}><span className="glyphicon glyphicon-save"></span></div>
              </div>
              <br/>
              <hr style={{borderTop: "dotted 1.5px #c9cad3", width: "100%"}} />
              <h2>{props.caption[3]}</h2>
              <div style={{paddingBottom:'50px'}}>
                <p>{props.caption[4]}</p>
                <div style={circleGlyph}><span>&gt;</span></div>
              </div>
              <br/>
              <hr style={{borderTop: "dotted 1.5px #c9cad3", width: "100%"}} />
              <h2>{props.caption[5]}</h2>
              <div style={{paddingBottom:'50px'}}>
                <p>{props.caption[6]}</p>
                <div style={circleGlyph}><span className="glyphicon glyphicon-save"></span></div>
              </div>
              <br/>
              <hr style={{borderTop: "dotted 1.5px #c9cad3", width: "100%"}} />
              <div style={{textAlign: 'center', marginTop: '34px', fontSize: 'x-large', fontWeight: '400'}} >
                <a href="/#" style={{color:'#000a88', textDecoration: 'underline', textDecorationColor: '#c9cad3'}}>View All Resources</a>
              </div>
            </div>
          </div>
        </div>
      }

      { props.align != 'full' &&
      <div style={panelStyle}>
        <hr className ='colored' />
        <div style={{padding: '20px 38px'}}>
          <h2>{props.header}</h2>
          {props.caption}
          <div style={circleGlyph}><span>&gt;</span></div>
        </div>
      </div>
    }
    </div>
  );
}
export default withRouter(PicturePanel);