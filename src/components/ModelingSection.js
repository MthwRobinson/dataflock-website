import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import './../stylesheets/Section.css';

class ModelingSection extends Component { 
  render() {
    return (
      <div className="ModelingSection">
        <Col xs={12} sm={12} md={3} lg={3} className='section-title'>
            <b>modeling skills</b>
            <hr/>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className='section-content'>
            <Row className='section-row'>
              <p><b>Machine Learning:</b> Classification, Clustering, Natural Language Processing</p>
            </Row>
            <Row className='section-row'>
              <p><b>Operations Research:</b> Optimization, Discrete Event Simulation, Stochastic Processes</p>
            </Row>
            <Row className='section-row'>
              <p><b>Statistics:</b> Regression, Generalized Linear Models, Bayesian Models </p>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='section-border'>
          </Col>
      </div>
    );
  }
}

export default ModelingSection;
