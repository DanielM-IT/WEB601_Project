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
import Login from './Components/pages/Login/Login'
import SignUp from './Components/pages/SignUp/SignUp'
import MyMusic from './Components/pages/MyMusic/MyMusic'
import UploadMusic from './Components/pages/UploadMusic/UploadMusic'
import EditAccount from './Components/pages/EditAccount/EditAccount'


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
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/MyAccount" component={MyAccount} />
              <Route path="/MyMusic" component={MyMusic} />
              <Route path="/UploadMusic" component={UploadMusic} />
              <Route path="/EditAccount" component={EditAccount} />
              <Route component={Default} />
            </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
)  


export default App;



