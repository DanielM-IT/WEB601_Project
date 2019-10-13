import React from 'react'
import LoginForm from '../../forms/LoginForm'
import Title from '../../Title'
import './Login.css'


export default class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="container">
        <section className="loginPage">
          <Title name="User" title="Login" />
          <form>
            <div className='loginForm'>
              <LoginForm submit={this.submit} />
            </div>
          </form>
        </section>
      </div> 
    )
  }
}

