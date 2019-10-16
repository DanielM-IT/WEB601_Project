import React from 'react'
// import {Link} from 'react-router-dom'
import './SongCard.css'


export default class MySongs extends React.Component {

    constructor(props) {
        super(props)

        this.deleteSong = this.deleteSong.bind(this)
    }

    componentDidMount() {
        this.getSong()
    }

    getSong(SongId) {
        fetch('http://localhost:4200/api/songs/' + SongId)
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

    deleteSong(SongId) {
        fetch('http://localhost:4200/api/songs/' + SongId, {
            method: 'delete'
        }).then(res =>
            res.json().then(json => {
                return json
            })
        )
        window.location.reload()
    }


    render() {
        return(
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="song" key={Song.SongId}>
                    <h2>{Song.Title}</h2>  

                    <div className='details'>
                        <pre><h3>{Song.Author}    •   {Song.Genre}</h3></pre>
                    </div>
                    <div className='songLength'>
                        <pre><h3>{Song.Length}</h3></pre>
                    </div>
                     {/* <Link to="/EditMusic"><button className="editButton" > 
                        Edit Song
                    </button>
                    </Link> */}
                    <button className="editButton" onClick={this.deleteSong.bind(this,Song.SongId)}>
                        Delete Song
                    </button>
                    
               </div> 
            ))}
            </div>
        )
    }
}
