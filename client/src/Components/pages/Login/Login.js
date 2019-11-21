import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import {Form, Button} from 'semantic-ui-react'
import './Login.css'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userActions} from '../../../actions/accountActions'


export default class LoginPage extends React.Component {
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
                  <label>Email</label>
                  <input 
                    type="email"
                    name="email"
                    placeholder="example@example.com.."
                    value={email}
                    onChange={this.onChange}
                    />
                  <label>Password</label>
                  <input 
                    type="password"
                    name="password" 
                    placeholder="Password.."
                    value={password}
                    onChange={this.onChange}
                    />
                  <br />
                  <Button primary>Login</Button>
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
