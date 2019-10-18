import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import './BrowseMusic.css'
import BrowseSongsCard from '../../data/BrowseSongsCard'


export default class BrowseMusic extends React.Component {
    
    constructor(props) {
        super(props)
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    componentDidMount() {
        this.getSongs()
    }

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