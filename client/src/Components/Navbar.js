import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {BtnContainer} from './pageElements/Buttons'
import Dropdown from './pageElements/Dropdown';
import './Navbar.css'



export default class Navbar extends Component {
    render() {
        return(
                <nav className= "navbar">
                    <div>
                    <Link to='/'>
                        <img src='../../icons/musical-notes-symbols.png' alt="musicSite" className="navbar-logo"/>
                    </Link>
                    </div>
                    
                    
                    <ul className="navbar-item">
                        <li>
                            <label className="navbar-link">
                                <Dropdown />
                            </label>  
                        </li>  
                        <li>   
                            <Link to="/Support" className="navbar-link">
                                Support
                            </Link>
                        </li>  
                        <li>
                            <Link to="/BrowseMusic" className="navbar-link">
                                Browse Music
                            </Link>
                        </li> 
                    </ul> 
              
                    <Link to="/Login" style={{float: 'right'}}>
                        <BtnContainer>
                            <span>Login</span>
                        </BtnContainer>
                    </Link>
                    <Link to="/SignUp" style={{float: 'right'}}>
                        <BtnContainer>
                            <span>SignUp</span>
                        </BtnContainer>
                    </Link>   
                </nav>
        )
    }
}

