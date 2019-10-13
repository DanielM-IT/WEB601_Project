import React from 'react'
import Title from '../../pageElements/Title'


export default class MyAccount extends React.Component {
    render() {
        return(
            <div className="editAccountWrapper">
                <Title name="My Account" title="Here" />
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstName" />   
                    <label>Last Name</label>
                    <input type="text" name="lastName" />  
                    <label>Email Address</label>
                    <input type="text" name="email" />  
                    <label>Phone</label>
                    <input type="text" name="phone" />  
                    <label>User Name</label>
                    <input type="text" name="userName" />  
                    <label>Password</label>
                    <input type="text" name="password" />  
                    <hr />
                    <input type="submit" value="Confirm Changes" />
                    <input type="submit" value="Return to Home" />
                </form>
            </div> 

        )
    }
}