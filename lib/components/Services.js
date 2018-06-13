import React from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './App.css';
import { SERVDESC } from 'config';

class Services extends React.Component{

  handleClick(e){
  	this.props.history.push({pathname: 'contact'})
  }

  render(){
  	const that = this;
    return(
      <div>
          <h3>Our Services </h3>

          <Carousel
          	
          	pauseOnHover={true}
	        interval={2500}
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