import React from 'react'
import LoginForm from '../../forms/LoginForm'
import PageTitle from '../../pageElements/PageTitle'
import './Login.css'


export default class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="loginWrapper">
        <section className="loginForm">
          <PageTitle name="User" title="Login" />
          <br />
          <form>
            <div className='loginFormFields'>
              <LoginForm submit={this.submit} />
            </div>
          </form>
        </section> 
      </div> 
    )
  }
}

