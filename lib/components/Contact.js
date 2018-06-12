import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './App.css';
import config from 'config';

class Contact extends React.Component{

  onFormSubmit(e){  
	const enquiry = {
	  	name: this.name.value,
	  	email: this.email.value,
	  	phone: this.phone.value,
	  	details: this.details.value
	  };
	  axios.post('/enquiry', enquiry)
	  .then(function (response) {
	  })
	  .catch(function (error) {
	  });
	  window.alert('Thank you for reaching out to us.  We will contact you shortly...');
  	this.props.history.push({pathname: '/'})
  }


  render(){
    return(
      <div>
          <h3>Contact Us</h3>
          <p>Reach out to us today and see what solutions we can provide for your business</p>
          <Form horizontal onSubmit={(e) => this.onFormSubmit(e)}>
          	 <FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={3}>
			      Company Contact
			    </Col>
			    <Col sm={6}>
			      <FormControl inputRef={node => this.name = node} type="text" placeholder="Name" required />
			    </Col>
			  </FormGroup>

			  <FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={3}>
			      Email
			    </Col>
			    <Col sm={6}>
			      <FormControl inputRef={node => this.email = node} type="email" placeholder="Email" required/>
			    </Col>
			  </FormGroup>


			  <FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={3}>
			      Phone
			    </Col>
			    <Col sm={6}>
			      <FormControl inputRef={node => this.phone = node} type="tel" placeholder="###-###-####" pattern="[0-9]{3}(-)?[0-9]{3}(-)?[0-9]{4}" required/>
			    </Col>
			  </FormGroup>

			    <FormGroup controlId="formControlsTextarea">
				  <Col componentClass={ControlLabel} sm={3}>
				    Description
				  </Col>
				  <Col sm={6}>
				  	<FormControl inputRef={node => this.details = node} componentClass="textarea" placeholder="Summary" rows={4} required />
				  </Col>
				</FormGroup>

			  <FormGroup>
			    <Col smOffset={4} sm={6}>
			      <Button type="submit">Send Message</Button>
			    </Col>
			  </FormGroup>
			</Form>
      </div>);
  }
}
export default withRouter(Contact);