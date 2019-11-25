import React from 'react'
import LoggedOutNavbar from './LoggedOutNavbar'
import LoggedInNavbar from './LoggedInNavbar'

export default class Navbar extends React.Component {

    render() {
        if (this.props.userID === null) {
            return (
                <div>
                    <LoggedOutNavbar />
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
