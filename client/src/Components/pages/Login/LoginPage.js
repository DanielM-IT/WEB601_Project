import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import {Form, Button} from 'semantic-ui-react'
import './Login.css'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userActions} from '../../../actions/accountActions'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.props.logout()

    this.state = {
        email: '',
        password: '',
        submitted: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChange(e) {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }


  onSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const {email, password} = this.state
    if (email && password) {
        this.props.login(email, password)
    }
}


  // Awaiting authentication to be added.
  render() {
    const { loggingIn } = this.props
    const { email, password, submitted } = this.state

    return (
      <div className="loginWrapper">
        <section className="loginForm">
          <PageTitle name="User" title="Login" />
          <br />
          <div>
            <div className='loginFormFields'>
              <Form onSubmit={this.onSubmit}>
                <div className={'formGroup' + (submitted && !email ? 'hasError' : '')}>
                  <label>Email</label>
                  <input 
                    className="formControl"
                    type="text"
                    name="email"
                    placeholder="example@example.com.."
                    value={email}
                    onChange={this.onChange}
                    />
                    {submitted && !email &&
                      <div className="helpBlock">Email is required</div>}
                </div>
                <div className={'formGroup' + (submitted && !password ? 'hasError' : '')}>
                  <label>Password</label>
                  <input 
                    className="formControl"
                    type="text"
                    name="password" 
                    placeholder="Password.."
                    value={password}
                    onChange={this.onChange}
                    />
                    {submitted && !password &&
                    <div className="helpBlock">Password is required</div>}
                </div>
                <br />
                <div className="form-group">
                  <Button primary className="btn btn-primary">Login</Button>
                  {loggingIn &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                  <Link to="/SignUp" className="btn btn-link">Sign Up</Link>
                </div>
              </Form>      
            </div>
          </div>
        </section> 
      </div> 
    )
  }
}

function mapState(state) {
  const {loggingIn} = state.authentication
  return {loggingIn}
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export {connectedLoginPage as LoginPage}
