import React, { Component } from 'react';

import './stylesheets/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hi!</h1>
        <i className="fa fa-bars"></i>
      </div>
    );
  }
}

export default App;
