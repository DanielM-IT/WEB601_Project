import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import {Link} from 'react-router-dom'
import './MyMusic.css'
import SongCard from '../../data/SongCard'


export default class MyMusic extends React.Component {
    
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
                    <SongCard songs={this.state.songs}/> 
                    <Link to="/EditMusic"><button className="editButton" > 
                        Edit Song
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}
