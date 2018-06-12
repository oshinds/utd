import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './App.css';
import config from 'config';

class Contact extends React.Component{

  onFormSubmit(e){  
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
			      <FormControl type="text" placeholder="Name" required />
			    </Col>
			  </FormGroup>

			  <FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={3}>
			      Email
			    </Col>
			    <Col sm={6}>
			      <FormControl type="email" placeholder="Email" required/>
			    </Col>
			  </FormGroup>


			  <FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={3}>
			      Phone
			    </Col>
			    <Col sm={6}>
			      <FormControl type="tel" placeholder="###-###-####" pattern="[0-9]{3}(-)?[0-9]{3}(-)?[0-9]{4}" required/>
			    </Col>
			  </FormGroup>

			    <FormGroup controlId="formControlsTextarea">
				  <Col componentClass={ControlLabel} sm={3}>
				    Description
				  </Col>
				  <Col sm={6}>
				  	<FormControl componentClass="textarea" placeholder="Summary" rows={4} required />
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