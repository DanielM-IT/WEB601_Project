import React from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../../pageElements/PageTitle'
import './MyAccount.css'


export default class MyAccount extends React.Component {
    render() {
        return(
            <div className="myAccountWrapper">
                <div className="pagesListColumn">
                    <h3>Account Pages</h3>
                    <ul>
                        <li>My Account</li>
                        <br />
                        <li>Upload Music</li>
                        <br />
                        <li>My Music</li>
                        <br />
                        <li>Log Out</li>
                    </ul>
                </div>
                <div className="accountContentColumn">
                    <section className="accountDetails">
                        <PageTitle name="My" title="Account" />
                        <div className="accountGrid">
                            <form>
                                <div className="leftColumn">
                                    <br />
                                    <br />
                                    <label>First Name:</label>
                                    <br />
                                    <label>Last Name:</label>
                                    <br />
                                    <label>Email:</label>
                                    <br />  
                                    <label>Phone:</label>
                                    <br /> 
                                    <label>Password:</label>
                                    <br /> 
                                    <br /> 
                               </div>
                                <div className="rightColumn">
                                    <br />
                                    <br />
                                    <label>First Name:</label>
                                    <br />
                                    <label>Last Name:</label>
                                    <br />
                                    <label>Email:</label>
                                    <br />  
                                    <label>Phone:</label>
                                    <br /> 
                                    <label>Password:</label>
                                    <br /> 
                                    <br /> 
                                </div>
                                <hr />
                                <Link to='/EditAccount'>
                                    <input className="editButton" type="submit" value="Edit Details" />
                                </Link>
                            </form>
                        </div>
                    </section>
                </div>
            </div> 
        )
    }
}