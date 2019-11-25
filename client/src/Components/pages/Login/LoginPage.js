import React, {useState} from 'react'
import PageTitle from '../../pageElements/PageTitle'
import {Form, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import './Login.css'


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
        email: '',
        password: '',
        errors: {},
        submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitLoginForm = this.submitLoginForm.bind(this)
  }


  handleChange(e) {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }


  submitLoginForm(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const {email, password} = this.state
    if (email && password) {
      this.props.login(email, password)
    }
  }


  render() {
    const { loggingIn } = this.props
    const { email, password, submitted } = this.state

    const [name,setName] = useState("")

    const [email,setEmail] = useState("")

    const [url,setUrl] = useState("")


    const responseGoogle = response => {
      setName(response.profileObj.name)
      setEmail(response.profileObj.email)
      setUrl(response.profileObj.imageUrl)

    }

    return (
      <div className="loginWrapper">
        <section className="loginForm">
          <PageTitle name="User" title="Login" />
          <br />
          <div>
            <div className='loginFormFields'>
              <Form onSubmit={this.submitLoginForm}>
                <div className={'formGroup' + (submitted && !email ? 'hasError' : '')}>
                  <label>Email</label>
                  <input 
                    className="formControl"
                    type="text"
                    name="email"
                    placeholder="example@example.com.."
                    value={email}
                    onChange={this.handleChange}
                    field="email"
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
                    onChange={this.handleChange}
                    />
                    {submitted && !password &&
                    <div className="helpBlock">Password is required</div>}
                </div>
                <br />
                <GoogleLogin
                  clientId="628926382103-esupl3pfh09ulilccp614q32t6unsbi2.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                <br />
                <br />
                <div className="form-group">
                  <Button primary className="btnLogin">Login</Button>
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

// export default class LoginPage extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//         redirected: false
//     }

//     this.signup = this.signup.bind(this)
//   }

//   signup(res, type) {

//   }


//   render() {





