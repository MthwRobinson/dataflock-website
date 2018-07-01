import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './../stylesheets/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Form>
                <img 
                  src='/dataflock-logo.png'
                  alt='DataFlock'
                  height='50px'
                />
            </Navbar.Form>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
