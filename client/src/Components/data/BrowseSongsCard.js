import React from 'react'
import './BrowseSongsCard.css'


export default class Song extends React.Component {

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
                    <input className="slider" type="range" />
               </div>
            ))}
            </div>
        )
    }
}
