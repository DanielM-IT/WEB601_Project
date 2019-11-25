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
        window.scrollTo(0, 0)
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
                        <br/>
                        <li>Classical</li>
                        <br />
                        <li>Film Scores</li>
                        <br />
                        <li>Hip Hop</li>
                        <br />
                        <li>Jazz</li>
                        <br />
                        <li>Pop</li>
                        <br />
                        <li>Rock</li>
                        <br />
                        <li>Electronic</li>
                    </ul>
                </div>
                <div className='contentColumn'>
                    <PageTitle name="Browse" title="Music" />
                    <br/>
                    <br/>
                    <BrowseSongsCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}