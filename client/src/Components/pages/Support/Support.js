import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import './Support.css'


export default class Support extends React.Component {
    // Created constructor method which sets the initial state of the input fields and the errors property.
    constructor() {
        super()
        this.state = {
            fields: {firstName: '', lastName: '', email: '', message: ''},
            errors: {}
        }
        // Binds the below functions and their parameters to an object that can be used in the field 
        // properties inside the render() function.
        this.handleChange = this.handleChange.bind(this)
        this.submitSupportForm = this.submitSupportForm.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
    submitSupportForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["firstName"] = ""
            fields["lastName"] = ""
            fields["email"] = ""
            fields["message"] = ""
            this.setState({fields:fields})
            // The request type and controller is then fetched through the following url. The request method is specified
            // along with the content type specified as being converted to json format before being posted into 
            // the database table.
            fetch('http://localhost:4200/api/supportTicket', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "firstName": this.firstName.value,
                    "lastName": this.lastName.value,
                    "email": this.email.value,
                    "message": this.message.value,
                })
            })
            console.log("Ticket has been submitted")
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

        if (!fields["message"]) {
            formIsValid = false
            errors["message"] = "*Please enter your message."
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
            <section className="formBody">
                <PageTitle name="Support" />
                <form name="supportForm" onSubmit= {this.submitSupportForm} >
                    <br />
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" ref={(ref) => {this.firstName = ref}} placeholder="Your first name.." defaultValue={this.state.fields.firstName} onChange={this.handleChange} />   
                    <div className='errorMessage'>{this.state.errors.firstName}</div>
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" ref={(ref) => {this.lastName = ref}} placeholder="Your last name.." value={this.state.fields.lastName} onChange={this.handleChange} />  
                    <div className='errorMessage'>{this.state.errors.lastName}</div>
                    <br />
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" ref={(ref) => {this.email = ref}} placeholder="Your email.." value={this.state.fields.email} onChange={this.handleChange} />  
                    <div className='errorMessage'>{this.state.errors.email}</div>
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" ref={(ref) => {this.message = ref}} placeholder="Enter mesage here.." value={this.state.fields.message} onChange={this.handleChange} />  
                    <div className='errorMessage'>{this.state.errors.message}</div>
                    <input className="submitButton" type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}