import React from 'react'


export default class DisplayAccountCard extends React.Component {

    // Maps each account from the account array to a specific record. This then takes the email as its key.
    // Following this each value from the selected record is placed into a header to be displayed.
    render() {
        return(
            <div className="accountGrid">
                {this.props.accounts.map((DisplayAccountCard) => (
               <div className="account" key={DisplayAccountCard.email}>
                    <h4>{DisplayAccountCard.firstName}</h4>  
                    <h4>{DisplayAccountCard.lastName}</h4>
                    <h4>{DisplayAccountCard.email}</h4>
                    <h4>{DisplayAccountCard.phone}</h4>
                    <h4>{DisplayAccountCard.password}</h4>
               </div>
            ))}
            </div>
        )
    }
}
