import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './../stylesheets/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="Section">
          <Col xs={12} sm={12} md={3} lg={3} className='section-title'>
            <b>join the flock</b>
            <hr/>
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='90px'
            />
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='90px'
            />
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='90px'
            />
          </Col>
          
          <Col xs={12} sm={12} md={9} lg={9} className='section-content'>
            <b><p>Have a lot of data? Not sure to do with it? The flock is here to help! Dataflock offers a variety of services, ranging from data consulting to enterprise application development. We take care of the boring stuff so that you can do what you do best.</p></b>
          </Col>
      </div>
    );
  }
}

export default Section;
