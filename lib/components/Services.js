import React from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './App.css';
import { SERVDESC } from 'config';

class Services extends React.Component{
  constructor(props){
  	super(props);
    const path = this.props.location.pathname.split('/');
    const idx = path && path.length>1 && !isNaN(Number(path[2]))? Number(path[2]) : 0;
  	this.state = {
  		activeIndex: idx,
  		direction: 'next'
  	}
  }

  handleClick(e){
  	this.props.history.push({pathname: 'contact'})
  }

  render(){
  	const that = this;
  	let options = {
       	direction:that.state.direction,
        defaultActiveIndex :that.state.activeIndex
  	}

    return(
      <div>
          <h3>Our Services </h3>

          <Carousel
          	{...options}
          	pauseOnHover={true}
	          interval={2500}
            onSelect={(selectedIndex, e) => {this.setState({
              activeIndex: selectedIndex,
              direction: e.direction
            })}}
	      >
	      {SERVDESC.map(function(meta, i){
	      	return (

	      		<Carousel.Item key={i} onClick={(e) => {that.handleClick(e)}}>      
		          <Carousel.Caption>
		          	<Image src={meta.icon} rounded />
		            <h4>{meta.title}</h4>
		            <p>{meta.desc}</p>
		          </Carousel.Caption>
		        </Carousel.Item>

	      		);
	      })}
	      </Carousel>
	        
      </div>);
  }
}
export default withRouter(Services);