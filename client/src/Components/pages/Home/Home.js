import React from 'react'
import {Link} from 'react-router-dom'
import { BtnContainer } from '../../pageElements/Buttons';
import './Home.css'
import PromotionsCard from '../../data/PromotionsCard'


export default class Home extends React.Component {

    constructor(props) {
        super(props) 
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    componentDidMount() {
        this.getPromotionalSongs()
    }

    getPromotionalSongs() {
        fetch('http://localhost:4200/api/promotionalSongs')
        .then(res => res.json())
        .then(data => {
			if(data.code === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                songs: data, 
            })
            }
        })
        .catch(error => {
            console.log(error)
         })	
 
    }



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
                <div className="homeBody">
                    <div>
                        <img src='../../icons/searchBar.png' alt="tempSearchBarImg" className="tempSearchBar" /> 
                    </div>
                    <div className="promotions">
                        <h1>Latest Music</h1>
                        <PromotionsCard songs={this.state.songs}/>
                    </div>
                </div>
            </div>
        )
    }
}