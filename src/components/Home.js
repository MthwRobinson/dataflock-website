import React, { Component } from 'react';

import Section from './Section';
import './../stylesheets/Home.css';

const sectionData = require('./../content/home.json');

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Section 
          title={sectionData[0].title}
          content={sectionData[0].content}
        />
        <Section 
          title={sectionData[0].title}
          content={sectionData[0].content}
        />
      </div>
    );
  }
}

export default Home;
