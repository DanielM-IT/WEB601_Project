import React, {Component} from 'react'
import Title from '../../pageElements/Title'
import './Support.css'


export default class Support extends Component {
    render() {
        return(
            <div className="container">
                <section className="formBody">
                    <Title name="Support" title="Here" />
                    <form>
                        <hr />
                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" />   
                        <br />
                        <br />
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" />  
                        <br />
                        <br />
                        <label for="email">Email Address</label>
                        <input type="text" name="email" />  
                        <br />
                        <br />
                        <label for="message">Message</label>
                        <textarea name="message" rows="15" cols="40"/>  
                        <hr />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </div> 
        )
    }
}