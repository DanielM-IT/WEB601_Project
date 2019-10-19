import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import './BrowseMusic.css'
import BrowseSongsCard from '../../data/BrowseSongsCard'


export default class BrowseMusic extends React.Component {
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
        this.getSongs()
    }

    // Method that fetches all the song records from the database and places them into the songs array.
    // It also respondse with respon in json form.
    getSongs() {
        fetch('http://localhost:4200/api/songs')
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


    // Renders my categories and content column. The content column will be populated with 
    // all retrieved records.
    render() {
        return(
            <div className="browseMusicWrapper">
                <div className="categoryColumn">
                    <h3>Categories</h3>
                    <ul>
                        <li>Popular Music</li>
                        <br />
                        <li>Blues</li>
                        <br />
                        <li>Classical</li>
                        <br />
                        <li>Country</li>
                        <br />
                        <li>Heavy Metal</li>
                        <br />
                        <li>Hip Hop</li>
                        <br />
                        <li>Jazz</li>
                        <br />
                        <li>Pop</li>
                        <br />
                        <li>Reggae</li>
                        <br />
                        <li>Rock</li>
                    </ul>
                </div>
                <div className='contentColumn'>
                    <PageTitle name="Browse" title="Music" />
                    <BrowseSongsCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}