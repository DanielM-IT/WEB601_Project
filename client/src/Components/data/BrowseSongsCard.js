import React from 'react'
import './BrowseSongsCard.css'


export default class Song extends React.Component {

    render() {
        return(
            // Maps each song from the song array to a specific record. This then takes the SongId as its key.
            // Following this each value from the selected record is placed into a header to be displayed.
            <div className="songGrid">
                {this.props.songs.map((Song) => (
               <div className="song" key={Song.SongId}>
                    <h2>{Song.Title}</h2>  
                    <input className="slider" type="range" />
                    <div className='songLength'>
                        <pre><h3>{Song.Length}</h3></pre>
                    </div>
                    <div className='details'>
                        <pre><h3>{Song.Author}    •   {Song.Genre}</h3></pre>
                    </div>
               </div>
            ))}
            </div>
        )
    }
}
