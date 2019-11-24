import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Form, Button} from 'semantic-ui-react'
import PageTitle from '../../pageElements/PageTitle'
import './SignUp.css'
import { accountActions } from '../../../actions/accountActions'


class SignUp extends React.Component {
    // Created constructor method which sets the initial state of the input fields and the errors property.
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                firstName: '', 
                lastName: '', 
                email: '', 
                phone: '', 
                password: ''
            },
            submitted: false,
            errors: {}
        }

        // Binds the below functions and their parameters to an object that can be used in the field 
        // properties inside the render() function.
        this.handleChange = this.handleChange.bind(this)
        this.submitSignUpForm = this.submitSignUpForm.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        const {name, value} = e.target
        const {fields} = this.state
        this.setState({
            fields: {
                ...fields,
                [name]: value
            }
        })
    }

    // Method in which if validation passes will create a variable with empty fields. These will then 
    // have their state instructed to change to the current state of the constructors fields.
    submitSignUpForm(e) {
        e.preventDefault()

        this.setState({ submitted: true })
        const {fields} = this.state
        if (this.validateForm()) {
            if (fields.firstName && fields.lastName && fields.email && fields.phone && fields.password) {
                this.props.register(fields)
            }
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
        const {registering} = this.props
        const { fields, submitted } = this.state
        return(
            <div className="signUpContainer">
                <div className="signUpForm">
                    <PageTitle name="Sign Up" title="Here" />
                    <Form name="signUpForm" onSubmit= {this.submitSignUpForm} >
                        <br /> 
                        <div className={'formGroup' + (submitted && !fields.firstName ? 'hasError' : '')}>
                            <label>First Name</label> 
                            <input 
                                type="text" 
                                className="formControl"
                                name="firstName" 
                                placeholder="Your first name.." 
                                value={fields.firstName} 
                                onChange={this.handleChange} />   
                        </div>
                        <div className='errorMessage'>{this.state.errors.firstName}</div>
                        
                        <div className={'formGroup' + (submitted && !fields.lastName ? 'hasError' : '')}>
                            <label>Last Name</label> 
                            <input 
                                type="text" 
                                className="formControl"
                                name="lastName" 
                                placeholder="Your last name.." 
                                value={fields.lastName} 
                                onChange={this.handleChange} />   
                        </div>
                        <div className='errorMessage'>{this.state.errors.lastName}</div>
                        
                        <div className={'formGroup' + (submitted && !fields.email ? 'hasError' : '')}>
                            <label>Email Address</label>
                            <input 
                                type="text" 
                                className="formControl"
                                name="email" 
                                placeholder="Your email.." 
                                value={fields.email} 
                                onChange={this.handleChange} />   
                        </div>
                        <div className='errorMessage'>{this.state.errors.email}</div>
                        
                        <div className={'formGroup' + (submitted && !fields.phone ? 'hasError' : '')}>
                            <label>Phone</label>
                            <input 
                                type="text" 
                                className="formControl"
                                name="phone" 
                                placeholder="Your phone number.." 
                                value={fields.phone} 
                                onChange={this.handleChange} />   
                        </div>
                        <div className='errorMessage'>{this.state.errors.phone}</div>
                       
                        <div className={'formGroup' + (submitted && !fields.password ? 'hasError' : '')}>
                            <label>Password</label>
                            <input 
                                type="text" 
                                className="formControl"
                                name="password" 
                                placeholder="Choose a password.." 
                                value={fields.password} 
                                onChange={this.handleChange} />   
                        </div>
                        <div className='errorMessage'>{this.state.errors.password}</div>
                        <br />
                        <div className='formGroup'>
                            <Button primary className="button">Sign Up</Button> 
                            {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <Link to="/" className="btn btn-link">Cancel</Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const {registering} = state.registration
    return {registering}
}

const actionCreators = {
    register: accountActions.register
}

const connectedSignUpPage = connect(mapState, actionCreators)(SignUp)
export { connectedSignUpPage as SignUpPage }