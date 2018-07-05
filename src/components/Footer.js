import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import './../stylesheets/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Col xs={12} sm={12} md={12} lg={12} className='footer-container'>
          <img
            src='/dataflock-duck.png'
            height='70px'
            className='pull-left duck-outline'
          />
          <b><u>DataFlock Solutions</u></b><br/>
          <b>located: </b> Tysons Corner, Virginia<br/>
          <b>contact us: </b> <a href="mailto:matt@dataflock.io">matt@dataflock.io</a>
        </Col>
      </div>
    );
  }
}

export default Footer;
