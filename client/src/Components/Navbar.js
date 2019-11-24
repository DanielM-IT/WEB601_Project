import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import {BtnContainer} from './pageElements/Buttons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } 
  from 'reactstrap';
 import './Navbar.css'


const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/" className="logo-container">                        
            <img src='../../icons/musical-notes-symbols.png' alt="musicSite" className="navbar-logo"/>
        </NavbarBrand>
        <NavItem>
            <Link to="/" className="navbar-title">
                <h1 className="navbarBrand"><strong>Tunique</strong></h1>
            </Link>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="link-container">
                <Link to="/BrowseMusic" className="navbar-link">
                    Browse
                </Link>
            </NavItem>
            <NavItem className="link-container">
                <Link to="/Support" className="navbar-link">
                    Support
                </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navbar-dropdown">
                <span className="navbar-link">Account</span>
              </DropdownToggle>
              <DropdownMenu className="dropdownBackground" right>
                <DropdownItem>
                    <Link to="/MyAccount" className="dropdown-link">
                        My Account
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/UploadMusic" className="dropdown-link">
                        Upload Music
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/MyMusic" className="dropdown-link">
                        My Music
                    </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="/" className="dropdown-link">
                        Log Out
                    </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="navbar-buttons">
                <Link to="/Login">
                    <BtnContainer>
                        <span>Login</span>
                    </BtnContainer>
                </Link>
            </NavItem>
            <NavItem className="navbar-buttons">
                <Link to="/SignUp">
                    <BtnContainer>
                        <span>SignUp</span>
                    </BtnContainer>
                </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;
