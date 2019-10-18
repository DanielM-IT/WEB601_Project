import React from 'react'


export default class DisplayAccountCard extends React.Component {

    render() {
        return(
            <div className="accountGrid">
                {this.props.accounts.map((DisplayAccountCard) => (
               <div className="account" key={DisplayAccountCard.SongId}>
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
