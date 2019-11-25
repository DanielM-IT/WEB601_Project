import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import EditSongCard from '../../data/EditSongCard'
import './EditMusic.css'


export default class EditMusic extends React.Component {
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
        this.getSong()
        window.scrollTo(0, 0)
    }

    // Method that fetches a single song from the database using the specified ID and places it into the songs array.
    // It also responds with the response in json form. 
    getSong() {
        fetch('http://localhost:4200/api/songs/1')
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


    // Rendersthe content. The content area will be populated with 
    // the retrieved song.
    render() {
        return(
            <div className="editContainer">
                <PageTitle name="Edit" title="Song" />
                <div className='editContent'>
                    <EditSongCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}
