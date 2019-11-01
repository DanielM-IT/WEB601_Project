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
                    <h3>{Song.Title}</h3>  
                    <input className="slider" type="range" />
                    <div className='songLength'>
                        <pre><p>{Song.Length}</p></pre>
                    </div>
                    <div className='details'>
                        <pre><p><strong>{Song.Author}    •   {Song.Genre}</strong></p></pre>
                    </div>
               </div>
            ))}
            </div>
        )
    }
}
