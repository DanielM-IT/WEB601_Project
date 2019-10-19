import React from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../../pageElements/PageTitle'
import './MyAccount.css'
import DisplayAccountCard from '../../data/DisplayAccountCard'


export default class MyAccount extends React.Component {
    // Created constructor method which passes properties(props). It sets the initial state which is 
    // ‘isFetching: false’ and creates an array set to empty.
    constructor(props) {
        super(props)
            this.state = ({
                isFetching: false,
                accounts: []
            })
    }

    // Mount a new component which calles the getSongs() method.)
    componentDidMount() {
        this.getAccount()
    }

    // Method that fetches a single account records from the database and places them into the accounts array.
    // It also responds with the response in json form. I have specified the email key here temporarily until authentication
    // allows me to retrieve the key of the currently logged in account.
    getAccount() {
        fetch('http://localhost:4200/api/account/7ebed7@gmail.com')
		.then(res => res.json())
		.then(data => { 
			if(data.code === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                accounts: data, 
            })
            }
		})
		.catch(error => {
		   console.log(error)
        })	
    }


    // Renders my categories and content columns. The content column will be populated with 
    // the retrieved accounts data.
    render() {
        return(
            <div className="myAccountWrapper">
                <div className="pagesListColumn">
                    <h3>Account Pages</h3>
                    <ul>
                        <li>My Account</li>
                        <br />
                        <li>Upload Music</li>
                        <br />
                        <li>My Music</li>
                        <br />
                        <li>Log Out</li>
                    </ul>
                </div>
                <div className="accountContentColumn">
                    <section className="accountDetails">
                        <PageTitle name="My" title="Account" />
                        <div className="accountGrid">
                            <form>
                                <div className="leftColumn">
                                    <br />
                                    <h3>First Name:</h3>
                                    <h3>Last Name:</h3>
                                    <h3>Email:</h3>
                                    <h3>Phone:</h3>
                                    <h3>Password:</h3>
                                    <br /> 
                               </div>
                                <div className="rightColumn">
                                    <br />
                                    <br />
                                    <DisplayAccountCard accounts={this.state.accounts}/>
                                    <br /> 
                                    <br /> 
                                </div>
                                <hr />
                                <Link to='/EditAccount' accounts={this.state.accounts}>
                                    <input className="editButton" type="submit" value="Edit Details" />
                                </Link>
                            </form>
                        </div>
                    </section>
                </div>
            </div> 
        )
    }
}