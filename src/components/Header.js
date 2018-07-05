import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

import './../stylesheets/Header.css';

//<i className="fa fa-bars menu-button pull-right"></i>
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
                  className='duck-logo'
                />
              <Button className='email-button'>
                <a href="mailto:matt@dataflock.io">Email Us</a>
              </Button>
            </Navbar.Form>
          </Navbar.Header>
        </Navbar>

      </div>
    );
  }
}

export default Header;
