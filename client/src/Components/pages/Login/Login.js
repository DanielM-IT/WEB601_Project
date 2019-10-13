import React from 'react'
import LoginForm from '../../forms/LoginForm'
import Title from '../../pageElements/Title'
import './Login.css'


export default class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="loginContainer">
        <section className="loginForm">
          <Title name="User" title="Login" />
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

