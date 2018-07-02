import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './../stylesheets/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="section-content">
              <h1><b>JOIN THE FLOCK</b></h1>
              <hr/>
              <b><p>Have a lot of data? Not sure to do with it? The flock is here to help! Dataflock offers a variety of services, ranging from data consulting to enterprise application development. We take care of the boring stuff so that you can do what you do best.</p></b>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Section;
