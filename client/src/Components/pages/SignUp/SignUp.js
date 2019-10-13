import React from 'react'
import Title from '../../pageElements/Title'
import './SignUp.css'


export default class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitSignUpForm = this.submitSignUpForm.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    submitSignUpForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["firstName"] = ""
            fields["lastName"] = ""
            fields["email"] = ""
            fields["phone"] = ""
            fields["userName"] = ""
            fields["password"] = ""
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

        if (!fields["phone"]) {
            formIsValid = false
            errors["phone"] = "*Please enter your phone number."
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]{10}$/)) {
                formIsValid = false
                errors["phone"] = "*Please enter a valid phone number."
            }
        }

        if (!fields["userName"]) {
            formIsValid = false
            errors["userName"] = "*Please enter a user name."
        }

        if (typeof fields["userName"] !== "undefined") {
            if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["userName"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["password"]) {
            formIsValid = false
            errors["password"] = "*Please enter a password."
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].length >= 6) {
                formIsValid = false
                errors["password"] = "*Please enter a secure and strong password."
            }
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }


    render() {
        return(
            <div className="signUpForm">
                <Title name="Sign Up" title="Here" />
                <form method="post" name="signUpForm" onSubmit= {this.submitSignUpForm} >
                    <br /> 
                    <label>First Name</label> 
                    <input type="text" name="firstName" placeholder="Your first name.." value={this.state.fields.firstName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.firstName}</div>
                    <label>Last Name</label> 
                    <input type="text" name="lastName" placeholder="Your last name.." value={this.state.fields.lastName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.lastName}</div>
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Your email.." value={this.state.fields.email} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.email}</div>
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="Your phone number.." value={this.state.fields.phone} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.phone}</div>
                    <label>User Name</label>
                    <input type="text" name="userName" placeholder="Choose a username.." value={this.state.fields.userName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.userName}</div>
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Choose a password.." value={this.state.fields.password} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.password}</div>
                    <br />
                    <input type="submit" className="button" value="Sign Up" />
                </form>
            </div>
        )
    }
}