import React from 'react'


export default class DisplayAccountCard extends React.Component {

    // Maps each account from the account array to a specific record. This then takes the email as its key.
    // Following this each value from the selected record is placed into a header to be displayed.
    render() {
        return(
            <div className="accountGrid">
                {this.props.accounts.map((DisplayAccountCard) => (
               <div className="account" key={DisplayAccountCard.email}>
                    <h3>{DisplayAccountCard.firstName}</h3>  
                    <h3>{DisplayAccountCard.lastName}</h3>
                    <h3>{DisplayAccountCard.email}</h3>
                    <h3>{DisplayAccountCard.phone}</h3>
                    <h3>{DisplayAccountCard.password}</h3>
               </div>
            ))}
            </div>
        )
    }
}
