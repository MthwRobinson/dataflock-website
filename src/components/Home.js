import React, { Component } from 'react';

import Section from './Section';
import './../stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Section />
        <Section />
      </div>
    );
  }
}

export default Home;
