import React from 'react'
import {Link} from 'react-router-dom'
import Title from '../../pageElements/Title'
import './EditAccount.css'


export default class MyAccount extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitAccountForm = this.submitAccountForm.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields 
        })
    }

    submitAccountForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["firstName"] = "" /*Display database account data here */
            fields["lastName"] = "" /*Display database account data here */
            fields["email"] = "" /*Display database account data here */
            fields["phone"] = "" /*Display database account data here */
            fields["userName"] = "" /*Display database account data here */
            fields["password"] = "" /*Display database account data here */
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
            <div className="editAccountForm">
                <Title name="Edit" title="Account" />
                <form method="post" name="editAccountForm" onSubmit= {this.submitAccountForm} >
                    <br /> 
                    <label>First Name</label> 
                    <input type="text" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.firstName}</div>
                    <label>Last Name</label> 
                    <input type="text" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.lastName}</div>
                    <label>Email Address</label>
                    <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.email}</div>
                    <label>Phone</label>
                    <input type="text" name="phone" value={this.state.fields.phone} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.phone}</div>
                    <label>User Name</label>
                    <input type="text" name="userName" value={this.state.fields.userName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.userName}</div>
                    <label>Password</label>
                    <input type="text" name="password" value={this.state.fields.password} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.password}</div>
                    <br />
                    <input type="submit" className="confirmButton" value="Confirm" />
                    <Link to="/MyAccount">
                        <input type="button" className="cancelButton" value="Cancel" />
                    </Link>
                </form>
            </div>
        )
    }
}