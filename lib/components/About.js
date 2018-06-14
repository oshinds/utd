import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import config from 'config';

class About extends React.Component{


  render(){
    return(
      <div className ='wrapper-about'>
          <h3>About Us</h3>
          <p>East meets West in Hartford, CT</p>
          <div style={{textAlign:'center'}}>
            <img height='75' src='osei.png'/>
            <div style={{display:'inline-block'}}>
              <p className='subtitle' style={{margin:'0 5px 0 5px'}}>OSEI HINDS & DOUG SWEENEY</p>
            </div>
            <img height='75' src='doug.png'/>
          </div>
          <br/>
        
          <p>We’re a lean digital marketing shop founded by two experienced professionals that have the collective experience together to solve your digital needs.</p>
          <p>Doug is a talented UX Designer and Osei is a skilled Software Engineer.  Together, they now operate in Hartford, CT.  Their collective 15 years of experience will give your business an optimal solution at the best price. </p>
          <p>Having had experience at larger companies and outfits like Disney, ESPN, The Royal Bank of Scotland, Credit Suisse, and Guthy-Renker in Tier 1 markets like LA and NYC, Osei and Doug have made their mark and have been well compensated for it.  Transparency and high quality are our watchwords.</p>
          <p>To give back while paving their own way, Osei and Doug started 10 Seed Digital in 2018 in New England to create an  affordable option for businesses to optimize in the modern age while making a social impact.  Proceeds from our services fund the planting of seeds at on one of our affiliated organic farms that serve local communities.</p>
      </div>);
  }
}
export default withRouter(About);