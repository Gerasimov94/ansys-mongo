import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import React, { Component } from 'react';

export default class MenuBar extends Component {

    onClick = (key, event) => {
      this.props.onClick(key)
    };
    
    render() {
        return (
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  Ansys Analysis Tool
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown title="Analysis" id="basic-nav-dropdown">
                    <MenuItem onSelect={this.onClick} eventKey="modal">Modal</MenuItem>
                    <MenuItem onSelect={this.onClick} eventKey="static">Static</MenuItem>
                    <MenuItem onSelect={this.onClick} eventKey="noneStatic">None static</MenuItem>
                    <MenuItem onSelect={this.onClick} eventKey="spectral">Spectral</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={2} href="#">
                    Results
                  </NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={2} href="#">
                    User & logo
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
   )}   
}
