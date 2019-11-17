import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="leftFooterColumn">
            <MDBCol md="5">
              <h5 className="creditLink">Footer Content</h5>
              <p className="creditLink">
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="creditLink">Links</h5>
              <ul>
                <li className="list-item">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="creditLink">Links</h5>
              <ul>
                <li className="list-item">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-item">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
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


// export default class Footer extends React.Component {
//     render() {
//         return(
            
//             <div className="footerContainer">
//                 <div className="creditLink">Icons made by 
//                     <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from 
//                     <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a> is licensed by 
//                     <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY
//                     </a>
//                 </div>
//             </div>
//         )
//     }
// }