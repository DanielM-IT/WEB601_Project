import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import './MyMusic.css'
import MyMusicCard from '../../data/MyMusicCard'


export default class MyMusic extends React.Component {
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
            <div className="myMusicWrapper">
                <div className="listColumn">
                    <h3>Categories</h3>
                    <ul>
                        <li>Category 1</li>
                        <br />
                        <li>Category 2</li>
                        <br />
                        <li>Category 3</li>
                        <br />
                        <li>Category 4</li>
                        <br />
                        <li>Category 5</li>
                        <br />
                        <li>Category 6</li>
                        <br />
                        <li>Category 7</li>
                        <br />
                        <li>Category 8</li>
                        <br />
                        <li>Category 9</li>
                    </ul>
                </div>
                <div className='contentColumn'>
                    <PageTitle name="My" title="Music" />
                    <br/>
                    <br/>
                    <MyMusicCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}
