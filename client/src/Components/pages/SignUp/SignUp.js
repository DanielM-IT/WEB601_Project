import React from 'react'
import SignUpForm from '../../forms/SignUpForm'


class SignUp extends React.Component {

    // Here the page gets the sign up from component.
    render() {
        const {userSignupRequest} = this.props
        return(
            <div className="signUpContainer">
                <SignUpForm userSignupRequest={userSignupRequest} />
            </div>
        )
    }
}

export default SignUp