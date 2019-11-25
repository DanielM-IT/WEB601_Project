import React from 'react'
import LoggedOutNavbar from './LoggedOutNavbar'
import LoggedInNavbar from './LoggedInNavbar'

export default class Navbar extends React.Component {
    // Started splitting my navbar to display according to the logged in state. To be completed...
    render() {
        if (this.props.userID === null) {
            return (
                <div>
                    <LoggedOutNavbar logOut={this.props.logUserOut} />
                </div>
            )
        } else {    
            return (
                <div>
                    <LoggedInNavbar />
                </div>
            )
        }
    }
}
