import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/pages/Home/Home'
import Support from './Components/pages/Support/Support'
import MyAccount from './Components/pages/MyAccount/MyAccount'
import Default from './Components/pages/Default'
import BrowseMusic from './Components/pages/BrowseMusic/BrowseMusic'
import Footer from './Components/Footer'
import LoginPage from './Components/pages/Login/LoginPage'
import {SignUpPage} from './Components/pages/SignUp/SignUp'
import MyMusic from './Components/pages/MyMusic/MyMusic'
import UploadMusic from './Components/pages/UploadMusic/UploadMusic'
import EditAccount from './Components/pages/EditAccount/EditAccount'
import EditMusic from './Components/pages/EditMusic/EditMusic'
// Import each of the above pages or components to have their path routed in the switch.


// Variable containing the reacte-router-dom's switch and routes switched between. Each route component is assigned a path.
// This is a variable not a class here. The reason being that there is no need to use lifecycle hooks or set the state here.
class App extends React.Component {

  // I have set an initial state of userID to null. I can check logged in state based on this. If it is null then the user is logged out and I can
  // show the correct navbar. If there is an ID then a user is logged in and I have to show the logged in navbar.
  constructor() {
    super();
    this.state = {
        userID: null
    }
  }
  logUserOut = (e) => {
    e.preventDefault()
    this.setState({userID: null});
  }

  render() {
    return (
        <div className="container">
        <div className="header">
          <Navbar userID={this.state.userID} logUserOut={this.logUserOut} />
        </div>
        <div className="body"> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/BrowseMusic" component={BrowseMusic} />
              <Route path="/Support" component={Support} />
              <Route path="/Login" userID={this.state.userID} component={LoginPage} />
              <Route path="/SignUp" component={SignUpPage} />
              <Route path="/MyAccount" component={MyAccount} />
              <Route path="/MyMusic" component={MyMusic} />
              <Route path="/UploadMusic" component={UploadMusic} />
              <Route path="/EditAccount" component={EditAccount} />
              <Route path="/EditMusic" component={EditMusic} />
              <Route component={Default} />
            </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

// The variable is exported.
export default App;



