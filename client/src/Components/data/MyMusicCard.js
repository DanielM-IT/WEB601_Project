import React from 'react'
import {Link} from 'react-router-dom'
import './MyMusicCard.css'


export default class MySongs extends React.Component {
    // Constructor to construct the initial state of the component on load.
    constructor(props) {
        super(props)

        // Create an object to bind the method and its empty parameter to any parameter passed through the object
        // in the render().
        this.deleteSong = this.deleteSong.bind(this)
    }

    // Method that fetches the record from the database identified by the parameter SongId. It then responds by deleting it. 
    // Finally the window is refreshed to show the updated list of records. 
    deleteSong(SongId) {
        fetch('http://localhost:4200/api/songs/' + SongId, {
            method: 'delete'
        }).then(response =>
            response.json().then(json => {
                return json
            })
        )
        window.location.reload()
    }

    // Renders each song card. 
    render() {
        return(
            // Maps each song from the song array to a specific record. This then takes the SongId as its key.
            // Following this each value from the selected record is placed into a header to be displayed.
            // Last of all there are two buttons. The first links to an edit page to edit records. The second
            // is bound to the SongId to all the correct song card to be deleted on click.  
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="song" key={Song.SongId}>
                    <h3>{Song.Title}</h3>  
                    <input className="slider" type="range" />
                    <div className='songLength'>
                        <pre><p>{Song.Length}</p></pre> 
                    </div>
                    <div className='details'>
                        <pre><p><strong>{Song.Author}    •   {Song.Genre}</strong></p></pre>
                    </div>
                    <Link songs={Song.SongId} to='/EditMusic'>
                        <input type="submit" className="editBtn" value="Edit Song" /> 
                    </Link>
                    <input type="submit" className="deleteBtn" value="Delete Song" onClick={this.deleteSong.bind(this,Song.SongId)}/> 
               </div> 
            ))}
            </div>
        )
    }
}
