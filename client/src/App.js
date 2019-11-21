import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home/Home'
import Support from './Components/pages/Support/Support'
import MyAccount from './Components/pages/MyAccount/MyAccount'
import Default from './Components/pages/Default'
import BrowseMusic from './Components/pages/BrowseMusic/BrowseMusic'
import Footer from './Components/Footer'
import {LoginPage} from './Components/pages/Login/LoginPage'
import SignUp from './Components/pages/SignUp/SignUp'
import MyMusic from './Components/pages/MyMusic/MyMusic'
import UploadMusic from './Components/pages/UploadMusic/UploadMusic'
import EditAccount from './Components/pages/EditAccount/EditAccount'
import EditMusic from './Components/pages/EditMusic/EditMusic'
// Import each of the above pages or components to have their path routed in the switch.

// Variable containing the reacte-router-dom's switch and routes switched between. Each route component is assigned a path.
// This is a variable not a class here. The reason being that there is no need to use lifecycle hooks or set the state here.
const App = () => (
  <div className="container">
        <div className="header">
          <Navbar />
        </div>
        <div className="body"> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/BrowseMusic" component={BrowseMusic} />
              <Route path="/Support" component={Support} />
              <Route path="/Login" component={LoginPage} />
              <Route path="/SignUp" component={SignUp} />
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

// The variable is exported.
export default App;



