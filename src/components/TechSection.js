import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import './../stylesheets/Section.css';

class TechSection extends Component { 
  render() {
    return (
      <div className="TechSection">
        <Col xs={12} sm={12} md={3} lg={3} className='section-title'>
            <b>experience</b>
            <hr/>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className='section-content'>
            <Row className='section-row'>
              <p><b>Programming Languages:</b> Python, Node.js/JavaScript</p>
            </Row>
            <Row className='section-row'>
              <p><b>Databases:</b> Postgres, MySQL, Hive, Redis, neo4j</p>
            </Row>
            <Row className='section-row'>
              <p><b>Frameworks:</b> React, Angular, Flask, Express.js</p>
            </Row>
            <Row className='section-row'>
              <p><b>Cloud:</b> Amazon Web Services, Microsoft Azure</p>
            </Row>

          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='section-border'>
          </Col>
      </div>
    );
  }
}

export default TechSection;
