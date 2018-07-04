import React, { Component } from 'react';

import Section from './Section';
import './../stylesheets/Home.css';

const sectionData = require('./../content/home.json');

class Home extends Component {
  render() {
    let sections = null;
    if(sectionData.length>0){
      sections = (
        <div>
          {sectionData.map((section, index) => {
            return <Section title={section.title} content={section.content} />
          })}
        </div>
        
      )
    }

    return (
      <div className="Home">
        {sections}
      </div>
    );
  }
}

export default Home;
