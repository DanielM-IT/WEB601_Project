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
        <NavbarBrand href="/">                        
            <img src='../../icons/musical-notes-symbols.png' alt="musicSite" className="navbar-logo"/>
        </NavbarBrand>
        <NavItem>
            <h1 className="navbarBrand"><strong>Tunique</strong></h1>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/BrowseMusic" className="navbar-link">
                    Browse Music
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/Support" className="navbar-link">
                    Support
                </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu className="dropdownBackground" right>
                <DropdownItem>
                    <Link to="/MyAccount" className="navbar-link">
                        My Account
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/UploadMusic" className="navbar-link">
                        Upload Music
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/MyMusic" className="navbar-link">
                        My Music
                    </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="" className="navbar-link">
                        Log Out
                    </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <Link to="/Login">
                    <BtnContainer>
                        <span>Login</span>
                    </BtnContainer>
                </Link>
            </NavItem>
            <NavItem>
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
