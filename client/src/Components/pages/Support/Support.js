import React from 'react'
import Title from '../../pageElements/Title'
import './Support.css'


export default class Support extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitSupportForm = this.submitSupportForm.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    submitSupportForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["firstName"] = ""
            fields["lastName"] = ""
            fields["email"] = ""
            fields["message"] = ""
            this.setState({fields:fields})
            alert("Form submitted")
        }
    }

    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if (!fields["firstName"]) {
            formIsValid = false
            errors["firstName"] = "*Please enter your first name."
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["firstName"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false
            errors["lastName"] = "*Please enter your last name."
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["lastName"] = "*Please enter alphabet characters only."
            }
        }
        
        if (!fields["email"]) {
            formIsValid = false
            errors["email"] = "*Please enter your email address."
        }

        if (typeof fields["email"] !== "undefined") {
            // Below is a common pattern used to valid an email address.
            var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if (!emailPattern.test(fields["email"])) {
                formIsValid = false
                errors["email"] = "*Please enter a valid email address.."
            }
        }

        if (!fields["message"]) {
            formIsValid = false
            errors["message"] = "*Please enter your message."
        }


        this.setState({
            errors: errors
        })
        return formIsValid
    }


    render() {
        return(
            <div className="supportWrapper">
                <section className="formBody">
                    <Title name="Support" />
                    <form method="post" name="supportForm" onSubmit= {this.submitSupportForm} >
                        <br />
                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="Your first name.." value={this.state.fields.firstName} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.firstName}</div>
                        <br />
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Your last name.." value={this.state.fields.lastName} onChange={this.handleChange} />  
                        <div className='errorMessage'>{this.state.errors.lastName}</div>
                        <br />
                        <label for="email">Email Address</label>
                        <input type="text" name="email" placeholder="Your email.." value={this.state.fields.email} onChange={this.handleChange} />  
                        <div className='errorMessage'>{this.state.errors.email}</div>
                        <br />
                        <label for="message">Message</label>
                        <textarea name="message" placeholder="Enter mesage here.." value={this.state.fields.message} onChange={this.handleChange} />  
                        <div className='errorMessage'>{this.state.errors.message}</div>
                        <input className="submitButton" type="submit" value="Submit" />
                    </form>
                </section>
            </div> 
        )
    }
}