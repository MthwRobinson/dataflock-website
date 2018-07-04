import React, { Component } from 'react';

import './stylesheets/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  state = {
    menuVisible: true
  }

  toggleMenu = () => {
    this.setState({menuVisible: !this.state.menuVisible});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
