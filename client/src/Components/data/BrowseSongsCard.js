import React from 'react'
import AudioPlayer from "react-h5-audio-player"
import './BrowseSongsCard.css'


export default class Song extends React.Component {

    render() {
        return(
            // Maps each song from the song array to a specific record. This then takes the SongId as its key.
            // Following this each value from the selected record is placed into a header to be displayed.
            <div className="songGrid">
                {this.props.songs.map((Song) => (
               <div className="singleSong" key={Song.SongId}>
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
               </div>
            ))}
            </div>
        )
    }
}
