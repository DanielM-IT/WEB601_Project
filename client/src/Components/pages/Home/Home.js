import React from 'react'
import {Link} from 'react-router-dom'
import { BtnContainer } from '../../pageElements/Buttons';
import './Home.css'
import PageTitle from '../../pageElements/PageTitle'
import PromotionsCard from '../../data/PromotionsCard'
import {Container, Row} from 'reactstrap'


export default class Home extends React.Component {
    // Created constructor method which passes properties(props). It sets the initial state which is 
    // ‘isFetching: false’ and creates an array set to empty.
    constructor(props) {
        super(props) 
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    // Mount a new component which calles the getSongs() method.)
    componentDidMount() {
        this.getPromotionalSongs()
    }

    // Method that fetches all the song records from the database and places them into the songs array.
    // It also respondse with respon in json form.
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


    // Renders my categories and content columns. The promotions section will be populated with 
    // the six retrieved records.
    render() {
        return( 
            <Container className="landingPageWrapper">
                <Row className="featureContainer">
                    <img src='../../images/black_business_technology.jpg' alt="featureMic" className="featureImage" /> 
                    <div className="text">
                        <h2>Upload your songs for free today and show the <br/> music community what you can do!</h2>
                    </div>
                    <div className="callToAction">
                        <Link to="/UploadMusic">
                            <BtnContainer>
                                Upload Music
                            </BtnContainer>
                        </Link>
                    </div>
                </Row>
                <Row className="homeBody">
                    <div className="promotionsTitle">
                        <PageTitle name="Latest Music" />
                    </div>
                    <div className="promotions">
                        <PromotionsCard songs={this.state.songs}/>
                    </div>
                </Row>
            </Container>
        )
    }
}