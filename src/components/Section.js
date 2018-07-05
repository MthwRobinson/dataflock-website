import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './../stylesheets/Section.css';

class Section extends Component { 
  render() {
    return (
      <div className="Section">
        <Col xs={12} sm={12} md={3} lg={3} className='section-title'>
            <b>{this.props.title}</b>
            <hr/>
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='60px'
            />
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='60px'
            />
            <img
              src='/dataflock-duck.png'
              alt='Dataflock Duck'
              height='60px'
            />
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className='section-content'>
            <b><p>{this.props.content}</p></b>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='section-border'>
          </Col>
      </div>
    );
  }
}

export default Section;
