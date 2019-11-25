import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="leftFooterColumn">
            <MDBCol md="3">
            </MDBCol>
            <MDBCol md="4">
              <h5 className="creditLink">Connect With Us</h5>
              <MDBRow>
              <MDBCol md="3">
              <pre><SocialIcon network="spotify" /><p className="list-item">Spotify</p></pre>
              </MDBCol>
              <MDBCol md="3">
              <SocialIcon network="youtube" /><p className="list-item">YouTube</p> 
              </MDBCol>
              <MDBCol md="3">
              <SocialIcon network="soundcloud" /><p className="list-item">Soundcloud</p>
              </MDBCol>
              <MDBCol md="3">
              <SocialIcon network="facebook" /><p className="list-item">Facebook</p>
              </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="5">
              <h5 className="creditLink">Links</h5>
              <Link to="/" className="list-item">
                    Home
                </Link>
                <br/>
              <Link to="/BrowseMusic" className="list-item">
                BrowseMusic
                </Link>
                <br/>
                <Link to="/Support" className="list-item">
                    Support
                </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="creditLink">
            &copy; {new Date().getFullYear()} Copyright: <Link to='/'> Tunique.com </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
  
  export default Footer;


