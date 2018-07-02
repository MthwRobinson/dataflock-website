import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './../stylesheets/Header.css';

//<Nav pullRight>
//            <NavItem>
//              <i className="fa fa-bars menu-button pull-right"></i>
//            </NavItem>
//          </Nav>
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Form>
                <i className="fa fa-bars menu-button pull-right"></i>
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
