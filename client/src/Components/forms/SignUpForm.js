import React from 'react'
import PageTitle from '../pageElements/PageTitle'
import './SignUpForm.css'


export default class SignUpForm extends React.Component {
    // Created constructor method which sets the initial state of the input fields and the errors property.
    constructor(props) {
        super(props)
        this.state = {
            fields: {firstName: '', lastName: '', email: '', phone: '', password: ''},
            errors: {}
        }

        // Binds the below functions and their parameters to an object that can be used in the field 
        // properties inside the render() function.
        this.handleChange = this.handleChange.bind(this)
        this.submitSignUpForm = this.submitSignUpForm.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    // Method in which if validation passes will create a variable with empty fields. These will then 
    // have their state instructed to change to the current state of the constructors fields.
    submitSignUpForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["firstName"] = ""
            fields["lastName"] = ""
            fields["email"] = ""
            fields["phone"] = ""
            fields["password"] = ""
            // The request type and controller is then fetched through the following url. The request method is specified
            // along with the content type specified as being converted to json format before being posted into 
            // the database table.
            fetch('http://localhost:4200/api/account', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "firstName": this.firstName.value,
                    "lastName": this.lastName.value,
                    "email": this.email.value,
                    "phone": this.phone.value,
                    "password": this.password.value,
                })
            })
            console.log("Account has been created.")
            // Finishes with a message which lets the user know that the posting of data was successful.
            alert("Form submitted")
            
        }
    }

    // This method contains validations for each field to ensure no field is left blank and also to ensure the
    // correct type of data is inserted into each field.
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

        // if (typeof fields["phone"] !== "undefined") {
        //     if (!fields["phone"].match(/^[0-9]{10}$/)) {
        //         formIsValid = false
        //         errors["phone"] = "*Please enter a valid phone number."
        //     }
        // }

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

    // Here the page is rendered with the needed methods. To the <form> is added an onSubmit={} attribute and called the 
    // method containing the fetching here. In each of the input fields is created three properties. The first is a reference to the 
    // corresponding field, the second a value property which takes the current state of the corresponding field and the third an onChange={} 
    // method which calls the handleChange() method. The change handle will allow the state of each field to be update after every change made 
    // by the user in an input field.
    render() {
        return(
            <div className="signUpForm">
                <PageTitle name="Sign Up" title="Here" />
                <form method="post" name="signUpForm" onSubmit= {this.submitSignUpForm} >
                    <br /> 
                    <label>First Name</label> 
                    <input 
                        type="text" 
                        name="firstName" 
                        ref={(ref) => {this.firstName = ref}} 
                        placeholder="Your first name.." 
                        value={this.state.fields.firstName} 
                        onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.firstName}</div>
                    <label>Last Name</label> 
                    <input 
                        type="text" 
                        name="lastName" 
                        ref={(ref) => {this.lastName = ref}} 
                        placeholder="Your last name.." 
                        value={this.state.fields.lastName} 
                        onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.lastName}</div>
                    <label>Email Address</label>
                    <input 
                        type="text" 
                        name="email" 
                        ref={(ref) => {this.email = ref}} 
                        placeholder="Your email.." 
                        value={this.state.fields.email} 
                        onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.email}</div>
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        ref={(ref) => {this.phone = ref}} 
                        placeholder="Your phone number.." 
                        value={this.state.fields.phone} 
                        onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.phone}</div>
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        ref={(ref) => {this.password = ref}} 
                        placeholder="Choose a password.." 
                        value={this.state.fields.password} 
                        onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.password}</div>
                    <br />
                       <input 
                        type="submit" 
                        className="button" 
                        value="Sign Up" /> 
                </form>
            </div>
        )
    }
}

