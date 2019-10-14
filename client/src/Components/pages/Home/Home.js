import React from 'react'
import {Link} from 'react-router-dom'
import { BtnContainer } from '../../pageElements/Buttons';
import './Home.css'


export default class Home extends React.Component {
    render() {
        return( 
            <div className="landingPageWrapper">
                <div className="featureContainer">
                    <img src='../../images/black_business_technology.jpg' alt="featureMic" className="featureImage" /> 
                    <div className="websitePurposeText">
                        <h2>Website purpose here!</h2>
                    </div>
                    <div className="callToAction">
                        <Link to="/UploadMusic">
                            <BtnContainer>
                                Upload Music
                            </BtnContainer>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src='../../icons/searchBar.png' alt="tempSearchBarImg" className="tempSearchBar" /> 
                </div>
                <div className="homeGrid">
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                    <div className="promotionItem">
                        <h2>promotions here</h2>
                    </div>
                </div>
            </div>
        )
    }
}