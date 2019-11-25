import React from 'react'
import {Link} from 'react-router-dom'
import AudioPlayer from "react-h5-audio-player"
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
            // Inside a pair of divs is an audio player component. This takes a link to an audio file from my 
            // database and will render it within a small audio player on the application page.
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="mySong" key={Song.SongId}>
                   <div className="titleContainer">
                    <h3>{Song.Title}</h3>
                    </div>
                        <AudioPlayer
                            src={Song.AudioFile}
                            onPlay={e => console.log("onPlay")}
                        />
                    <div className='details'>
                        <strong><pre>Author:   {Song.Author}
                        <br/>
                        Genre:   {Song.Genre}</pre></strong>
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
